<template>
  <section>
    <h2>Creando un miembro</h2>
    <form @submit.prevent="submitEvent">
      
        <div>
          <p>title</p>
          <input type="text" v-model="event.title" />
        </div>
        <div>
          <p><nuxt-link to="/articles">Volver atras</nuxt-link> <button type="submit"> Actualizar</button></p>
        </div>
      
        <div>
          <p>description</p>
          <input type="text" v-model="event.description" />
        </div>
        <div>
          <p><nuxt-link to="/articles">Volver atras</nuxt-link> <button type="submit"> Actualizar</button></p>
        </div>
      
        <div>
          <p>location</p>
          <input type="text" v-model="event.location" />
        </div>
        <div>
          <p><nuxt-link to="/articles">Volver atras</nuxt-link> <button type="submit"> Actualizar</button></p>
        </div>
      
        <div>
          <p>time</p>
          <input type="text" v-model="event.time" />
        </div>
        <div>
          <p><nuxt-link to="/articles">Volver atras</nuxt-link> <button type="submit"> Actualizar</button></p>
        </div>
      
        <div>
          <p>date</p>
          <input type="text" v-model="event.date" />
        </div>
        <div>
          <p><nuxt-link to="/articles">Volver atras</nuxt-link> <button type="submit"> Actualizar</button></p>
        </div>
      
        <div>
          <p>story</p>
          <input type="text" v-model="event.story" />
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
      event: {

        title: '',

        description: '',

        location: '',

        time: '',

        date: '',

        story: ''

      }
    }
  },
  methods: {
    submitEvent () {
      let url = '/events'
      this.makeRequest({url, data: this.event}, 'post',
        ({eventCreated}) => {
          console.log('Se ha creado', eventCreated)
          this.$router.push('/events/' + eventCreated._id)
        }, (error) => {
          console.log(error)
        }
      )
    }
  }
}
</script>
