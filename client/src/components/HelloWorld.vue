<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>hello vue!</h3>

    <div class="row">
      <div class="col-xs-12 col-md-8 col-md-offset-2">
        sadfg
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
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
