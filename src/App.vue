<template>
  <div class="app">
    <Header />
    <Navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Header
  }
};
</script>
