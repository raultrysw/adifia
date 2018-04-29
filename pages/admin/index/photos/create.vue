<template>
  <section>
    <h2>Creando un miembro</h2>
    <my-form :onSubmit="createPhoto" :errors="errors" text="Crear la foto" urlCb="/admin/photos" textCb="Volver atas">
      <my-input type="text" v-model="photo.title" text="Titulo" placeholder="Título de la foto" />
      <div class="flex-horizontal form">
        <rsw-live-image-preview width="100%" height="42vh" :atChange="updateFile" />
        <!--my-input type="text" text="Foto de la barrera" v-model="photo.file" placeholder="Foto de la barrera" /-->
        <my-input type="text" text="Sitio de la barrera" v-model="photo.location" placeholder="Sitio de la barrera" />
      </div>
      <my-input type="textarea" :rows="10" text="Descripción" v-model="photo.description" placeholder="Descripción de la foto" />
    </my-form>
  </section>
</template>
<script>
import rswLiveImagePreview from '~/components/RSWLivePreviewImage.vue'
import {createPhoto} from '~/api/photos'
export default {
  components: {rswLiveImagePreview},
  data () {
    return {
      errors: [],
      photo: {
        file: null,
        likes: '',
        title: '',
        description: '',
        location: ''
      }
    }
  },
  computed: {
    data () {
      let fd = new FormData()
      fd.append('title', this.photo.title)
      fd.append('description', this.photo.description)
      fd.append('location', this.photo.location)
      fd.append('file', this.photo.file)
      return fd
    }
  },
  methods: {
    createPhoto,
    updateFile (file) {
      debugger //eslint-disable-line
      this.photo.file = file
    }
  }
}
</script>
