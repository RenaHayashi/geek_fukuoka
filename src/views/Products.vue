<template>
  <div>
    <Tickets />
    <div class="body">
      <h2 class="ppt">{{ $route.params.course }} Products</h2>
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
import Tickets from "@/components/Tickets.vue";

export default {
  components: {
    Tickets
  },
  data: function() {
    return {
      products: []
    };
  },
  created: function() {
    db.collection("products")
      .where("course", "==", this.$route.params.course) // ① これが web のとき
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.products.push(doc.data());
          console.log(this.$route.products);
        });
      });
    console.log(this.$route.products);
  }
};
</script>
<style>
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
</style>
