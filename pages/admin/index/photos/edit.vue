<template>
  <section>
    <h2>Editando {{$route.query.id}}</h2>
    <my-form :onSubmit="submitPhoto" :errors="errors" text="Crear la foto" urlCb="/admin/photos" textCb="Volver atas">
      <my-input type="text" v-model="photo.likes" placeholder="likes de las fotos" />
      <my-input type="text" v-model="photo.title" placeholder="Título de la foto" />
      <my-input type="text" v-model="photo.description" placeholder="Descripción de la foto" />
      <my-input type="text" v-model="photo.location" placeholder="Sitio de la barrera" />
    </my-form>
  </section>
</template>
<script>
export default {
  data () {
    return {
      photo: {

        likes: '',

        title: '',

        description: '',

        location: ''

      }
    }
  },
  created () {
    this.makeRequest({url: this.photoUri}, 'get',
      ({photo}) => {
        this.photo = photo
      }, (error) => {
        console.log(error)
      }
    )
  },
  computed: {
    photoUri () {
      return '/photos/' + this.$route.query.id
    }
  },
  methods: {
    submitPhoto () {
      this.makeRequest({url: this.photoUri, data: this.photo}, 'put',
        ({photo}) => {
          this.$router.push('/photos/' + photo._id)
        }, (error) => {
          console.log(error)
        }
      )
    }
  }
}
</script>
