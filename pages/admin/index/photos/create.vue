<template>
  <section>
    <h2>Creando un miembro</h2>
    <my-form :onSubmit="createPhoto" :errors="errors" text="Crear la foto" urlCb="/admin/photos" textCb="Volver atas">
      <my-input type="text" v-model="photo.title" text="Titulo" placeholder="Título de la foto" />
      <div class="flex-horizontal form">
        <rsw-live-image-preview width="100%" height="42vh" :atChange="updateFile" />
        <!--my-input type="text" text="Foto de la barrera" v-model="photo.file" placeholder="Foto de la barrera" /-->
        <rsw-location-picker v-model="location" hint="Busca aquí donde se encuentra la barrera" height="90%" />
      </div>
      <my-input type="textarea" :rows="10" text="Descripción" v-model="photo.description" placeholder="Descripción de la foto" />
    </my-form>
  </section>
</template>
<script>
import rswLiveImagePreview from '~/components/RSWLivePreviewImage.vue'
import rswLocationPicker from '~/components/rsw-location-picker.vue'
import {createPhoto} from '~/api/photos'
import {mapMutations} from 'vuex'
export default {
  components: {rswLiveImagePreview, rswLocationPicker},
  data () {
    return {
      errors: [],
      photo: {
        file: null,
        title: '',
        description: '',
        location: ''
      }
    }
  },
  computed: {
    data () {
      debugger //eslint-disable-line
      let fd = new FormData()
      fd.append('title', this.photo.title)
      fd.append('description', this.photo.description)
      fd.append('location', this.photo.location)
      fd.append('file', this.photo.file)
      return fd
    },
    location: {
      get () {
        return this.photo.location
      },
      set (value) {
        this.photo.location = value.lat() + ':' + value.lng() + ':' + value.placeDescription
      }
    }
  },
  methods: {
    createPhoto,
    ...mapMutations(['submitPhoto']),
    updateFile (file) {
      debugger //eslint-disable-line
      this.photo.file = file
    }
  }
}
</script>
