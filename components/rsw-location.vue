<template lang="html">
    <div class="gmap">
        <div :style="style" ref="map" class="gmap__map-viewer">mapa</div>
    </div>
</template>

<script lang="js">
export default {
  /* global google */
  props: ['lat', 'lng', 'height'],
  data () {
    return {
      map: {}
    }
  },
  computed: {
    style () {
      return {
        height: this.height
      }
    }
  },
  mounted () {
    let gmapsClientFactory = require('google-maps-api')
    let key = 'AIzaSyCrnaY5fzSUOEu3c-LlHpiekjlXtqKn2K8'
    let mapContainer = this.$refs.map

    let mapsPromise = gmapsClientFactory(key, ['places'])
    setTimeout(() => {
      mapsPromise().then(maps => {
        const {lat, lng} = this
        const state = {center: {lat: Number(lat), lng: Number(lng)}, zoom: 8}
        console.log('Estado inicial', state)
        let map = new maps.Map(mapContainer, state)

        if (this.lat && this.lng) {
          map.setCenter({
            lat: this.lat,
            lng: this.lng
          })
          map.setZoom(15)
          this.$emit('input', map.getCenter())
          setMarker(map.getCenter())
        }

        function setMarker (location) {
          let marker = new google.maps.Marker({
            position: location,
            map
          })

          marker.setMap(map)
        }
      })
    }, 500)
  }
}
</script>

<style lang="scss">
.gmap {
    &__location-search {
        width: 100%;
        display: block;
        padding: .2em;
        font-size: 1.2em;
    }
}
</style>
