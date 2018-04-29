<template>
  <section>
    <h2>Creando un miembro</h2>
    <my-form :errors="errors" :onSubmit="postEvent" text="Guardar evento" urlCb="/events" textCb="Volver">
      <div class="flex-horizontal form">
        <my-input v-model="event.title" placeholder="Título del evento" type="text" text="Pon el tíulo del evento" />
        <my-input v-model="event.description" placeholder="Descripción del evento" type="text" text="Pon la descripción del evento" />
      </div>
      
      <div class="flex-horizontal form">
        <rsw-location-picker v-model="location" height="25vh" hint="Busca aquí las coordenadas" />
        <div class="event__timedate">
          <my-input v-model="event.time" palceholder="Hora del evento" type="time" text="Hora del evento" />
          <my-input v-model="event.date" palceholder="Dia del evento" type="date" text="Dia del evento" />
        </div>
      </div>
      <div class="event__story">
        <h3>¿Como sucedió?</h3>
        <textarea rows="10" v-model="event.story"></textarea>
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
