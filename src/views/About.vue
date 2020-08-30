<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>{{ body }}</span>
    <input type="body" v-model="body" />
    <button v-on:click="addText">追加</button>
    <div v-for="(body, index) in bodys" v-bind:key="index">
      {{ body }}
    </div>
    <br />
    <button v-on:click="postTweet">
      クリック
    </button>

    <div v-for="(tweet, index) in tweets" v-bind:key="index">
      {{ tweet.text }}
    </div>
  </div>
</template>

<script>
import db from "@/firebase";

export default {
  name: "about",

  data: function() {
    return {
      tweets: [],
      bodys: [],
      body: ""
    };
  },
  methods: {
    addText: function() {
      this.bodys.push(this.body);
      this.body = "";
    },
    postTweet: function() {
      db.collection("tweets").add({
        text: "こんにちは、ツイートの本文です。"
      });
    }
  },
  created: function() {
    db.collection("tweets")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.tweets.push({
            id: doc.id,
            ...doc.data()
          });
        });
      });
  }
};
</script>
