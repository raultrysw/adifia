<template>
  <section>
    <h2>Editando {{$route.query.id}}</h2>
    <form @submit.prevent="submitPhoto">
      
        <div>
          <p>likes</p>
          <input type="text" v-model="photo.likes" />
        </div>
      
        <div>
          <p>title</p>
          <input type="text" v-model="photo.title" />
        </div>
      
        <div>
          <p>description</p>
          <input type="text" v-model="photo.description" />
        </div>
      
        <div>
          <p>location</p>
          <input type="text" v-model="photo.location" />
        </div>
      
      <div>
        <p><nuxt-link to="/photos">Volver atras</nuxt-link> <button type="submit"> Actualizar</button></p>
      </div>
    </form>
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
