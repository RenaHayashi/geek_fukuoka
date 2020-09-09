<template>
  <div>
    <Slide />
    <Tickets />
    <div class="body">
      <div class="card" v-for="(product, index) in products" v-bind:key="index">
        <ul class="product_card">
          <li>{{ product.name }}</li>
          <li>{{ product.url }}</li>
          <li>{{ product.description }}</li>
        </ul>
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
.body {
  margin: 0px, 200px;
}
.product_card {
  color: #1e366a;
  border: dotted #1e366a 1px; /*ドット 色 太さ*/
  padding: 0.5em 0.5em 0.5em 2em;
  width: 600px;
}

.product_card li {
  line-height: 1.5;
  padding: 0.5em 0;
}
</style>
