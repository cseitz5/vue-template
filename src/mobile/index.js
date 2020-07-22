import Vue from 'vue'
import store from '../store/store.js'

// Written by Chris Seitz
/*
  Used for easily making responsive websites.

  There are 3 global variables that are built in to every instance of vue:
    - mobile -> small screen
    - desktop -> not a small screen
    - wide -> screen is desktop and pretty wide. Allow extra whitepace on sides.
  They are used via v-if directives or whatever you need.
    <div v-if="mobile">This only appears on mobile</div>
    <div v-else>This appears on normal sized screens</div>

  Additionally, these can also be used in SCSS like so:
    p {
      font-size: 4vh;
      max-width: 80vw;
      @include mobile {
        font-size: 2vh;
      }
      @include wide {
        max-width: 40vw; // Wide screen, make paragraph more blocky.
      }
    }
*/

let mobile = false;
let computeScreen = function() {
  let def = { // default
    mobile: false,
    wide: true,
  }
  if (window.innerWidth <= (2 * 800)) {
    def.wide = false;
    if (window.innerWidth <= 800) {
      def.mobile = true;
    }
  }
  return def;
}
let upd = function() {
  let res = computeScreen();
  for (let x of Object.keys(res)) {
    store.state[x] = res[x];
  }
}
window.addEventListener("resize", upd);
upd()

Vue.mixin({
  computed: {
    mobile: {
      get() {
        return this.$store.state.mobile;
      },
    },
    desktop: {
      get() {
        return !(this.$store.state.mobile);
      },
    },
    wide: {
      get() {
        return this.$store.state.wide;
      },
    },
  }
})
