<template>
  <div class="home">
    <div v-for="(product, index) in products" v-bind:key="index">
      <ul class="product_card">
        <li>{{ product.name }}</li>
        <li>{{ product.url }}</li>
        <li>{{ product.description }}</li>
      </ul>
    </div>
  </div>
</template>
<style>
.product_card {
  color: #1e366a;
  border: dotted #1e366a 1px; /*ドット 色 太さ*/
  padding: 0.5em 0.5em 0.5em 2em;
}

.product_card li {
  line-height: 1.5;
  padding: 0.5em 0;
}
</style>
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
