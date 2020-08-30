<template>
  <div class="home">
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
  name: "home",
  methods: {
    postTweet: function() {
      db.collection("tweets").add({
        text: "こんにちは、ツイートの本文です。"
      });
    }
  },
  data: function() {
    return {
      tweets: []
    };
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
