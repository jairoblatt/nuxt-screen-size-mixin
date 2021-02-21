import Vue from "vue";

export type INuxtScreenSize = number | void;

const nuxtScreenSizeMixin = Vue.extend({
  data: () => ({
    nuxtWidth: 0,
    nuxtHeight: 0,
  }),

  mounted() {
    this.resize();
    window.addEventListener("resize", this.resize);
  },

  destroyed() {
    window.removeEventListener("resize", this.resize);
  },

  methods: {
    getWidth(): INuxtScreenSize {
      if (!!window.$nuxt && process.client) {
        return (
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth
        );
      }
    },

    getHeight(): INuxtScreenSize {
      if (!!window.$nuxt && process.client) {
        return (
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight
        );
      }
    },

    resize(): void {
      this.nuxtWidth = this.getWidth() as number;
      this.nuxtHeight = this.getHeight() as number;
    },
  },
});

Vue.mixin(nuxtScreenSizeMixin);
