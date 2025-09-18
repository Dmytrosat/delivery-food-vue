<template>
  <!-- header -->
  <header class="header">
    <div class="container">
      <div class="header-box">
        <router-link to="/" class="header-logo logo">
          <img src="../assets/images/logo.png" alt="logo" />
        </router-link>
        <div class="header-controls">
          <button class="btn btn-primary">
            <img src="../assets/images/icons/user.png" alt="user" />
            Войти
          </button>
          <button class="btn btn-outline" @click="openModal()">
            <img src="../assets/images/icons/basket.png" alt="basket" />
            Корзина
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
    const emit = defineEmits(['toggleModal'])
    const openModal = () => emit('toggleModal')
</script>

<style scoped>
/* header */
.header {
    min-height: 124px;
    display: flex;
    align-items: center;
}

.header-box {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header-controls {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
}

.btn {
    display: flex;
    padding: 8px 16px;
    align-items: center;
    gap: 4px;
    outline: none;
    cursor: pointer;
}

.btn-primary {
    border-radius: 2px;
    background: #1890FF;
    border: 1px solid #1890FF;
    color: #FFF;
}

.btn-outline {
    border-radius: 2px;
    border: 1px solid #D9D9D9;
    background: #FFF;
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.00);
    color: #595959;
}
</style>
