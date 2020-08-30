<template>
  <div class="home">
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
