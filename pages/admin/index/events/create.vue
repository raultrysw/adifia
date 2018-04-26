<template>
  <section>
    <h2>Creando un miembro</h2>
    <my-form :errors="errors" :onSubmit="postEvent" text="Guardar evento" urlCb="/events" textCb="Volver">
      <my-input v-model="event.title" placeholder="Título del evento" type="text" text="Pon el tíulo del evento" />
      <my-input v-model="event.description" placeholder="Descripción del evento" type="text" text="Pon la descripción del evento" />
      <rsw-location-picker v-model="location" height="12vh" hint="Busca aquí las coordenadas" />
      <div>
        <p>Dia y hora</p>
        <div>
          <input v-model="event.time" type="time" />
          <input v-model="event.date" type="date" />
        </div>
      </div>
      <div>
        <p>¿Como sucedió?</p>
        <textarea v-model="event.story"></textarea>
      </div>
    </my-form>
  </section>
</template>
<script>
import {postEvent} from '~/api/events'
import rswLocationPicker from '~/components/rsw-location-picker.vue'
import {mapMutations} from 'vuex'

export default {
  components: {rswLocationPicker},
  data () {
    return {
      event: { title: '', description: '', location: '', time: '', date: '', story: '' },
      errors: []
    }
  },
  computed: {
    location: {
      get () { return this.event.location },
      set ({lat, lng, placeDescription}) { this.event.location = lat() + ':' + lng() + ':' + placeDescription }
    }
  },
  methods: { postEvent, ...mapMutations('administration', ['submitAnEvent']) }
}
</script>
