<template>
  <div :style="styleObject" class="live-image-loader" @click="dispatchImageSelector">
      <input ref="fileDispatcher" class="live-image-loader__dispatcher" @change="reloadImage" type="file" />
      <img class="live-image-loader__image" :src="img" ref="image" />
  </div>
</template>
<script>
export default {
  props: ['atChange', 'width', 'height', 'defaultImg'],
  data () {
    return {
      image: ''
    }
  },
  computed: {
    styleObject () {
      return {
        width: this.width,
        height: this.height,
        backgroundImage: this.image
      }
    },
    img () {
      return this.image || this.defaultImg
    }
  },
  methods: {
    dispatchImageSelector () {
      this.$refs.fileDispatcher.dispatchEvent(new MouseEvent('click'))
    },
    reloadImage (e) {
      let file = e.target.files[0]

      var reader = new FileReader()
      const self = this

      reader.onload = function (e) {
        self.image = e.target.result
        self.atChange(file, e.target.result)
      }

      reader.readAsDataURL(file)
    }
  }
}
</script>

<style lang="scss">
.live-image-loader {
    border: 1px solid;
    cursor: pointer;
    text-align: center;
    &__image {
        &:not([src="#"]) {
            object-fit: cover;
            height: 100%;
        }
        &[src="#"] {
            display: none;
        }
    }
    &__dispatcher {
        display: none;
    }
}
</style>
