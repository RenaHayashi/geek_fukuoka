<template>
  <div class="products">
    <p>{{ $route.params.course }}コースプロダクト一覧</p>
    <div v-for="(product, index) in products" v-bind:key="index">
      <div>
        <p>{{ product.name }}</p>
        <p>{{ product.url }}</p>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import db from "@/firebase";

export default {
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
