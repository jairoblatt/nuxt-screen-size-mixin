import Vue from "vue";

var nuxtScreenSizeMixin = {
  data: () => ({
    nuxtWidth: 0,
    nuxtHeight: 0
  }),

  mounted() {
    this.resize();

    window.addEventListener("resize", this.resize);

    this.$once("hook:beforeDestroy", () => {
      window.removeEventListener("resize", this.resize);
    });
  },

  methods: {
    getWidth() {
      if (process.client) {
        return (
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth
        );
      }
    },

    getHeight() {
      if (process.client) {
        return (
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight
        );
      }
    },

    resize() {
      this.nuxtWidth = this.getWidth();
      this.nuxtHeight = this.getHeight();
    }
  }
};

export default nuxtScreenSizeMixin;
Vue.mixin(nuxtScreenSizeMixin);
