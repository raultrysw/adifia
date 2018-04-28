<template>
  <section v-if="show">
    <h2>Adifia cuenta con {{partnersCount}} socios</h2>
    <section>
      <h3>Estos son los administradores de adifia</h3>
      <ul v-for="(admin, index) in administrators" :key="index">
        <li>{{admin.name}} {{admin.surname}}</li>
      </ul>
    </section>
  </section>
</template>
<script>
export default {
  data () {
    return {
      partnersCount: -1,
      administrators: [],
      show: false,
      title: 'Acerca de adifia'
    }
  },
  mounted () {
    this.getMembers(members => {
      this.administrators = members.filter(member => member.pvLvl > 1)
      this.partnersCount = members.length - this.administrators.length
      this.show = true
    })
  }
}
</script>
