<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ msg }}</p>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>{{count}}</h3>
    <h3>{{hoge}}</h3>
  </div>
</template>

<script>
  // import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  data() {
    return {
      hoge: this.$store.state.hoge
    }
  },
  created() {
    console.log('HWcomp' + this.$store.state.count)
    this.$store.dispatch('incrementAction')
    console.log('HWcomp' + this.$store.state.count)

  },
  props: {
    msg: String,
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
// console.log(hoge)
  // console.log(this.$store.state.count)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
