<template>
  <section>
    <p>title {{event.title}}</p><p>description {{event.description}}</p><p>location {{event.location}}</p><p>time {{event.time}}</p><p>date {{event.date}}</p><p>story {{event.story}}</p>

    <p><nuxt-link to="/admin/events">Volver atras</nuxt-link></p>
  </section>
</template>
<script>
export default {
  data () {
    return {
      event: {}
    }
  },
  created () {
    this.makeRequest({url: this.eventUrl}, 'get',
      ({event}) => {
        this.event = event
      }, (data) => {
        console.log(data)
      }
    )
  },
  computed: {
    eventUrl () {
      return '/events/' + this.$route.params.id
    }
  }
}
</script>
