<template>
  <div id="app">
    {{ msg }}
    <p id="name">{{ store.state.message }}</p>
  </div>
</template>

<script>
import store from "../../store/store";
export default {
  name: "MyHello",
  data() {
    return {
      store: store.sharedData,
      msg: "Hello"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
#name {
  color: crimson;
  display: inline-block;
}
</style>
