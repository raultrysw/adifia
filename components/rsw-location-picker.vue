<template lang="html">
    <div class="gmap">
        <input :value="text" ref="searchInput" :placeholder="hint" type="text" class="gmap__location-search" />
        <div :style="style" ref="map" class="gmap__map-viewer">mapa</div>
    </div>
</template>

<script lang="js">
let initState = {
  center: {lat: -34.397, lng: 150.644},
  zoom: 8
}

export default {
  /* global google */
  props: ['hint', 'lat', 'lng', 'text', 'height'],
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
    let inputElement = this.$refs.searchInput

    let mapsPromise = gmapsClientFactory(key, ['places'])
    setTimeout(() => {
      mapsPromise().then(maps => {
        const self = this
        let input = new maps.places.SearchBox(inputElement)
        console.log('input configurado', input)
        let map = new maps.Map(mapContainer, initState)

        if (this.lat && this.lng) {
          map.setCenter({
            lat: this.lat,
            lng: this.lng
          })
          map.setZoom(15)
          this.$emit('input', map.getCenter())
          setMarker(map.getCenter())
        }

        let lastMarker = null

        function setMarker (location) {
          if (lastMarker) lastMarker.setMap(null)

          let marker = new google.maps.Marker({
            position: location,
            map
          })

          marker.setMap(map)
          lastMarker = marker
          location.placeDescription = inputElement.value
          self.$emit('input', location)
        }

        input.addListener('places_changed', () => {
          let location = input.getPlaces()[0].geometry.location

          map.setCenter(location)
          map.setZoom(15)

          setMarker(location)
        })
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
