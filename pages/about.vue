<template>
  <section v-if="show">
    <h2>Acerca de adifia</h2>
    <h3>Adifia cuenta con {{partnersCount}} socios</h3>
    <section>
      <h4>Estos son los administradores de adifia</h4>
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
      show: false
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
