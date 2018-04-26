<template>
  <section v-if="loaded">
    <h2>Editando {{$route.query.id}}</h2>
    <my-form :onSubmit="putEvent" :errors="errors" text="Actualizar evento"
        urlCb="/admin/events" textCb="volver atras">
      <my-input type="text" text="Escribe un título"   placeholder="Título del evento" v-model="event.title" />      
      <my-input type="text" text="Escribe una descripción"   placeholder="Descripción del evento" v-model="event.description" />      
      <my-input type="text" text="Escribe un lugar"   placeholder="Lugar del evento" v-model="event.location" />      
      <my-input type="text" text="Escribe una hora"   placeholder="Hora del evento" v-model="event.time" />      
      <my-input type="text" text="Escribe un dia"   placeholder="Dia del evento" v-model="event.date" />      
      <my-input type="text" text="Escribe una descripción de como sucedio"   placeholder="Sucesos del evento" v-model="event.story" />      
    </my-form>
  </section>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
import {putEvent, recoverAllEvents} from '~/api/events'

export default {
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
    loaded () {
      return this.events.length > 0
    },
    ...mapState('administration', ['events'])
  },
  methods: { putEvent, recoverAllEvents, ...mapMutations('administration', ['submitAllEvents']) }
}
</script>
