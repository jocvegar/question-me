<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" class="main-img" />
    <HelloWorld msg="HOLA JoC, como estas?" />
    <button @click="darkThemeSwitch">Switch Theme</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  mounted: function() {
    console.log("mounted!");
    const currentTheme = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : null;
    if (currentTheme && currentTheme == "dark") {
      this._addDarkTheme();
    }
  },
  methods: {
    _addDarkTheme() {
      let darkThemeLinkEl = document.createElement("link");
      darkThemeLinkEl.setAttribute("rel", "stylesheet");
      darkThemeLinkEl.setAttribute("href", "/css/darktheme.css");
      darkThemeLinkEl.setAttribute("id", "dark-theme-style");

      let docHead = document.querySelector("head");
      docHead.append(darkThemeLinkEl);
    },
    _removeDarkTheme() {
      let darkThemeLinkEl = document.querySelector("#dark-theme-style");
      let parentNode = darkThemeLinkEl.parentNode;
      parentNode.removeChild(darkThemeLinkEl);
    },
    darkThemeSwitch() {
      let darkThemeLinkEl = document.querySelector("#dark-theme-style");
      if (!darkThemeLinkEl) {
        this._addDarkTheme();
        localStorage.setItem("theme", "dark");
      } else {
        this._removeDarkTheme();
        localStorage.setItem("theme", "light");
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: stretch;
  margin: 0 10vw;
}

.main-img {
  width: 8em;
  height: 8em;
}
</style>
