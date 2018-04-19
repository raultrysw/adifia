<template>
  <section>
    <h2>Editando {{$route.query.id}}</h2>
    <form @submit.prevent="submitEvent">
      
        <div>
          <p>title</p>
          <input type="text" v-model="event.title" />
        </div>
      
        <div>
          <p>description</p>
          <input type="text" v-model="event.description" />
        </div>
      
        <div>
          <p>location</p>
          <input type="text" v-model="event.location" />
        </div>
      
        <div>
          <p>time</p>
          <input type="text" v-model="event.time" />
        </div>
      
        <div>
          <p>date</p>
          <input type="text" v-model="event.date" />
        </div>
      
        <div>
          <p>story</p>
          <input type="text" v-model="event.story" />
        </div>
      
      <div>
        <p><nuxt-link to="/events">Volver atras</nuxt-link> <button type="submit"> Actualizar</button></p>
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
  created () {
    this.makeRequest({url: this.eventUri}, 'get',
      ({event}) => {
        this.event = event
      }, (error) => {
        console.log(error)
      }
    )
  },
  computed: {
    eventUri () {
      return '/events/' + this.$route.query.id
    }
  },
  methods: {
    submitEvent () {
      this.makeRequest({url: this.eventUri, data: this.event}, 'put',
        ({event}) => {
          this.$router.push('/events/' + event._id)
        }, (error) => {
          console.log(error)
        }
      )
    }
  }
}
</script>
