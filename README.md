# Nuxt screen size mixin

A simple mixin for nuxtjs to get the dimensions of the screen :)

<p align="center">
  <img width="690" height="388" src="https://github.com/jairoblatt/nuxt-screen-size-mixin/blob/master/demo.gif">
</p>

## Installation

Copy the typescript file to plugins directory or any other directory.

### global

Reference in plugins inside nuxt.config.js

```javascript
'In nuxt.config.js'

plugins: ["@/plugins/nuxt-screen-size", ...],
```

### Local/Component

```javascript
'In component'
import nuxtScreenSize from "@/plugins/nuxt-screen-size";

export default Vue.extend({
  mixins: [nuxtScreenSize],
  ...
  })
```

## Prop

| Name       | description                | type   |
| ---------- | -------------------------- | ------ |
| nuxtWidth  | Get current viewport width | number |
| nuxtHeight | Get current viewport width | number |
