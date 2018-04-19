<template>
  <section>
    <h2>Creando un miembro</h2>
    <form @submit.prevent="submitPhoto">
      
        <div>
          <p>likes</p>
          <input type="text" v-model="photo.likes" />
        </div>
        <div>
          <p><nuxt-link to="/articles">Volver atras</nuxt-link> <button type="submit"> Actualizar</button></p>
        </div>
      
        <div>
          <p>title</p>
          <input type="text" v-model="photo.title" />
        </div>
        <div>
          <p><nuxt-link to="/articles">Volver atras</nuxt-link> <button type="submit"> Actualizar</button></p>
        </div>
      
        <div>
          <p>description</p>
          <input type="text" v-model="photo.description" />
        </div>
        <div>
          <p><nuxt-link to="/articles">Volver atras</nuxt-link> <button type="submit"> Actualizar</button></p>
        </div>
      
        <div>
          <p>location</p>
          <input type="text" v-model="photo.location" />
        </div>
        <div>
          <p><nuxt-link to="/articles">Volver atras</nuxt-link> <button type="submit"> Actualizar</button></p>
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
  methods: {
    submitPhoto () {
      let url = '/photos'
      this.makeRequest({url, data: this.photo}, 'post',
        ({photoCreated}) => {
          console.log('Se ha creado', photoCreated)
          this.$router.push('/photos/' + photoCreated._id)
        }, (error) => {
          console.log(error)
        }
      )
    }
  }
}
</script>
