<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Hang ten slob air mongo hand rail handplant wax Johnny Rad nose grab.
      Shiloh Greathouse alley oop transfer nose bump ollie north Japan air 360
      540. Judo air Sacto half-cab nosebone kingpin carve kick-nose feeble.
      Japan air 540 blunt 360 Bullet 66 coffin street axle.
    </p>
    <h3>{{ title | upcase }}</h3>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      title: "pop shove-it shoveit manual "
    };
  },
  filters: {
    upcase: function(value) {
      return value.toUpperCase();
    }
  }
};
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
