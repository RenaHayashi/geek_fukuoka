<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>{{ text }}</span>
    <input type="text" v-model="text" />
    <button v-on:click="addText">追加</button>
    <div v-for="(text, index) in texts" v-bind:key="index">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      texts: [],
      text: ""
    };
  },
  methods: {
    addText: function() {
      this.texts.push(this.text);
      this.text = "";
    }
  }
};
</script>
