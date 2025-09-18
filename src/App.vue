<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Modal from "./components/Modal.vue";
import {ref} from "vue";

const isOpen = ref(false);
</script>

<template>
  <div class="page-wrapper">
    <!-- components Header -->
    <Header @toggleModal="isOpen = !isOpen"/>

    <!-- main -->
    <main class="main">
      <router-view></router-view>
    </main>

    <!-- components Modal -->
    <Modal :isOpen="isOpen" @toggleModal="isOpen = !isOpen"/>

    <!-- components Footer -->
    <Footer />
  </div>
</template>

<style scoped>
</style>
