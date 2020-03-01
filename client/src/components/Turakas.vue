<template lang="pug">
  .turakas
    q-fab.fixed-center(
      v-for="({ color, icon, direction, action }, buttonName) in buttons"
      ref="turakas"
      :key="direction"
      :icon="icon"
      :buttonName=buttonName
      :direction="direction"
      :color="color"
      activeIcon="ac_unit"
      persistent
      aria-label="Show actions"
      v-model="open"
      :style="{transform: currentX}"
      @click.stop.prevent.native="$router.push($route.name === 'turakas' ? '/' : 'turakas')"
      v-touch-pan.mouse="moveTurakas"
    )
      q-fab-action(
        v-if="active[buttonName]"
        :label-position="action.labelPosition" 
        :label="action.label"
        color="white"
        text-color="info"
        icon="insert_emoticon"
      )
    span.fixed-top {{leftEdge}}
</template>

<script>
export default {
  name: "Turakas",
  data() {
    return {
      _x: 0,
      _y: 0,
      _z: 0,
      x: 0,
      y: 0,
      z: 0,
      position: {left: 0, right: 0},
      mounted: false,
      turakasDragging: false,
      buttons: {
        bottom: {
          icon: "insert_emoticon",
          color: "primary",
          direction: "up",
          action: {
            label: "up",
            labelPosition: "right",
          },
        },
        middle: {
          icon: "wb_sunny",
          color: "primary",
          direction: "right",
          action: {
            label: "right",
            labelPosition: "right",
          },
        },
        top: {
          icon: "wb_sunny",
          color: "primary",
          direction: "left",
          action: {
            label: "Cat",
            labelPosition: "left",
          },
        },
      },
      open: true,
    }
  },
  methods: {
    changeRoute() {
      setTimeout(() => {
        console.log("changeRoute")
      }, 500)
    },
    moveTurakas(ev) {
      if (!ev) return
      this.positiong = ev.position
      if (ev.isFirst) {
        this._x = this.x
        this._y = this.y
      }
      if (ev.isFinal) {
        this._x = this.x
        this._y = this.y
      }
      if (!ev.isFirst && !ev.isFinal) {
        this.draggingFab = true
        this.x = ev.offset.x + this._x
        this.y = ev.offset.y + this._y
      }
    },
  },
  computed: {
    currentX() {
      return `translate(${this.x}px, ${this.y}px)`
    },
    active() {
      return {
        top: true,
        middle: true,
        bottom: true,
      }
    },
    leftEdge() {
      if (!this.mounted) return 0
      const turakas = document.getElementsByClassName("turakas")[0]
      var rect = turakas.getBoundingClientRect()
      console.log(rect.top, rect.right, rect.bottom, rect.left)
      return {
        left: rect.left + window.scrollX - this.left,
        top: rect.top + window.scrollY,
      }
    },
  },
  mounted() {
    this.mounted = true
  },
  watch: {
    open: {
      handler(is, was) {
        // console.log(is, was)
      },
      immediate: true,
    },
  },
}
</script>
