/*
 In situations with no server code, we can expand the page files
 so that they can be served normally.
*/

let fs = require('fs')
let path = require('path')

let dist = path.join(__dirname, '/dist')
let indexFile = fs.readFileSync(path.join(dist, 'index.html'))

for (let x of fs.readdirSync(path.join(dist, 'js'))) {
  let first = x.split('.').shift().split('-').shift();
  let last = x.split('.').pop();
  if (first != 'app' && first != 'chunk') {
    if (last == 'js') {
      console.log(x)
      try { fs.mkdirSync(path.join(dist, first)) } catch(e) { }
      fs.writeFileSync(path.join(dist, first, 'index.html'), indexFile)
    }
  }
}

let action = process.argv.slice(2).shift()
if (action) {
  if (action == 'test' || action == 'serve') {
    let port = 8088;
    let express = require('express')
    let app = express()
    app.use(express.static(dist))
    app.listen(port)
    console.log("Listening on port " + port)
  }
}
