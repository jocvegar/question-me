<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" class="main-img" />
    <FortuneTeller
      msg="¿Qué Está En Tu Mente?"
      @onFucus="onFucusFromChild"
      @onBlur="onBlurFromChild"
    />
    <button
      v-if="onFucus == false && onBlur == true"
      :class="buttonText == 'Noche' ? 'night' : 'day'"
      @click="darkThemeSwitch"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
import FortuneTeller from "./components/FortuneTeller.vue";

export default {
  name: "App",
  components: {
    FortuneTeller
  },
  data() {
    return {
      buttonText: "Noche",
      onFucus: false,
      onBlur: true
    };
  },
  mounted: function() {
    const currentTheme = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : null;
    if (currentTheme && currentTheme == "dark") {
      this._addDarkTheme();
      this.buttonText = "Día";
    }
  },
  methods: {
    onFucusFromChild(value) {
      this.onFucus = value;
      this.onBlur = !this.onBlur;
    },
    onBlurFromChild(value) {
      this.onBlur = value;
      this.onFucus = !this.onFucus;
    },
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
        this.buttonText = "Día";
      } else {
        this._removeDarkTheme();
        localStorage.setItem("theme", "light");
        this.buttonText = "Noche";
      }
    }
  }
};
</script>

<style lang="scss">
*:focus {
  outline: none;
}
body {
  background-color: #f0f0f0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: stretch;
  margin: 2rem 10vw;
}
.main-img {
  width: 8em;
  height: 8em;
}
button {
  border: none;
  color: rgb(201, 201, 201);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  padding: 10px 30px;
  border-radius: 5px;
  position: fixed;
  bottom: 10vh;
}
.day {
  background-color: rgba(126, 114, 8, 0.8);
}
.night {
  background-color: rgba(0, 58, 124, 0.8);
}
</style>
