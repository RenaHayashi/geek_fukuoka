<template>
  <div>
    <Slide />
    <Tickets />
    <div class="body">
      <h2 class="ppt">Products</h2>
      <div class="list">
        <div class="card-box">
          <div class="card">
            <div class="name">
              タイトル
            </div>
            <br />
            <div class="description">
              アプリ・サービス説明
            </div>
          </div>
        </div>
      </div>
      <div v-for="(product, index) in products" v-bind:key="index">
        <div class="list">
          <div class="card-box">
            <div class="card">
              <div class="name">
                {{ product.name }}
              </div>
              <br />
              <router-link to="/show/1 ">
                <div class="description">
                  {{ product.description }}
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase";
import Slide from "@/components/Slide.vue";
import Tickets from "@/components/Tickets.vue";

export default {
  components: {
    Slide,
    Tickets
  },
  data: function() {
    return {
      products: []
    };
  },
  created: function() {
    db.collection("products")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.products.push({
            id: doc.id,
            ...doc.data()
          });
        });
      });
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Sawarabi+Gothic&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Sawarabi+Gothic&display=swap");

.body {
  padding-left: 80px;
}
/* Productsの表記 */
h2.ppt {
  position: relative;
  padding-left: 80px;
  margin-right: 80px;
  margin-top: 20px;
  border-bottom: 2px solid rgb(190, 253, 255);
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  font-size: 3em;
}
h2.ppt:before,
h2.ppt:after {
  content: "";
  display: block;
  position: absolute;
}
h2.ppt:before {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid rgb(190, 253, 255);
  bottom: -16px;
  left: 8px;
}
h2.ppt:after {
  height: 64px;
  border-left: 2px solid rgb(190, 253, 255);
  bottom: -32px;
  left: 24px;
}
/* カード */
.list {
  float: left;
}
div.card-box {
  margin-left: 45px;
  margin-top: 20px;
  margin-bottom: 20px;
}

div.card-box div.card {
  width: 270px;
  height: 330px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  padding: 10px;
  background-color: #fff;
  border: double 10px rgb(31, 101, 252);
  cursor: pointer;
  transition: background-color 0.3s;
}
div.card-box div.card:hover {
  background-color: rgb(207, 250, 252);
}
/* カードの中身 */
.name {
  font-size: 1.3em;
  font-weight: 900;
  margin-left: 10px;
  margin-right: 10px;
}
.description {
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  font-family: "Sawarabi Gothic", sans-serif;
}
</style>
