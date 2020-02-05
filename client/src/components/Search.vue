<template>
  <div class="search">
    <input type="text" name="search" :value="query" @input="onInput" />
    <button @click="search(query)"></button>
  </div>
</template>

<script>
export default {
  name: 'search-component',
  data() {
    return {
      query: ''
    };
  },

  props: {
    serviceToGet: Function
  },

  methods: {
    search(event) {
      this.serviceToGet(event)
        .then(data => {
          this.responseEvent(data);
        })
        .catch(err => console.error(err));
    },

    responseEvent(value) {
      this.$emit('onResponse', value);
    },

    onInput(ev) {
      this.query = ev;
      this.$emit('input', ev);
    }
  },

  watch: {
    query(query) {
      console.log('query', query);
    }
  }
};
</script>

<style scoped></style>