<template>
  <section v-if="loaded">
    <h2>Editando {{$route.query.id}}</h2>
    <my-form :onSubmit="putEvent" :errors="errors" text="Actualizar evento"
        urlCb="/admin/events" textCb="volver atras">
      <my-input type="text" text="Escribe un título"   placeholder="Título del evento" v-model="event.title" />      
      <my-input type="text" text="Escribe una descripción"   placeholder="Descripción del evento" v-model="event.description" />      
      <span class="input-control__text">Lugar del evento</span>
      <rsw-location-picker hint="Lugar del evento" :text="locationParsed.text" :lat="locationParsed.lat" :lng="locationParsed.lng" height="12vh" />
      <div class="flex-horizontal form">      
        <my-input type="time" text="Escribe una hora"   placeholder="Hora del evento" v-model="event.time" />      
        <my-input type="date" text="Escribe un dia"   placeholder="Dia del evento" v-model="event.date" />      
      </div>
      <div v-if="consumed" class="event__story">
        <span class="input-control__text">Como sucedio</span>        
        <textarea rows="10" v-model="event.story"></textarea>
      </div>
    </my-form>
  </section>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
import {putEvent, recoverAllEvents} from '~/api/events'
import rswLocationPicker from '~/components/rsw-location-picker.vue'

export default {
  components: {rswLocationPicker},
  data () {
    return {
      errors: []
    }
  },
  created () { this.recoverAllEvents() },
  computed: {
    event () {
      debugger //eslint-disable-line
      return (this.loaded && this.events.filter(event => event._id === this.$route.query.id)[0]) || {}
    },
    consumed () {
      let date = this.event.date
      let time = this.event.time
      let d = new Date(date + ' ' + time)
      let consumed = Date.now() - d.getTime() > 0
      return consumed
    },
    // 38.3459963:-0.4906855000000405:Alicante, España
    locationParsed () {
      let [lat, lng, text] = this.event.location.split(':')
      return {lat, lng, text}
    },
    loaded () {
      return this.events.length > 0
    },
    ...mapState('administration', ['events'])
  },
  methods: { putEvent, recoverAllEvents, ...mapMutations('administration', ['submitAllEvents']) }
}
</script>
