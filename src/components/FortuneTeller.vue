<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input
      type="text"
      v-model="question"
      placeholder="Preguntame..."
      @focus="$emit('onFucus', true)"
      @blur="$emit('onBlur', true)"
    />
    <h4>{{ answer | titleize }}</h4>
  </div>
</template>

<script>
import { debounce } from "vue-debounce";

export default {
  name: "FortuneTeller",
  props: {
    msg: String
  },
  data() {
    return {
      question: "",
      answer: ""
    };
  },
  filters: {
    titleize: function(value) {
      if (!value) return;
      return value
        .split(" ")
        .map(x => x.charAt(0).toUpperCase() + x.slice(1))
        .join(" ");
    }
  },
  methods: {
    getAnswer: function() {
      const answers = [
        "mmm no se",
        "lo que diga jose",
        "si",
        "no",
        "ahorita",
        "pizza",
        "pueda que si",
        "pueda que no",
        "proba despues"
      ];
      if (this.question.length == 0) {
        this.answer = "";
        return;
      } else if (this.question.indexOf("?") === -1) {
        this.answer = "preguntas terminan con un '?'";
        return;
      }
      this.answer = answers[Math.floor(Math.random() * 9)];
    }
  },
  watch: {
    question: function() {
      this.answer = "hmmm vamos a ver...";
      this.debouncedGetAnswer();
    }
  },
  created: function() {
    this.debouncedGetAnswer = debounce(this.getAnswer, 1000);
  }
};
</script>

<style scoped lang="scss">
h1,
h4 {
  margin: 0.5rem 0 0;
}
input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  margin: 20px 0;
  display: inline-block;
  border: 2px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #f5f5f5;
  font-size: 1rem;
}
</style>
