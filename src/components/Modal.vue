<template>
  <!-- cart-modal-overlay -->
  <div class="cart-modal__overlay" :class="{ open: isOpen }" @click.self="closeModal()">
    <div class="cart-modal">
      <div class="cart-modal__header">
        <h2 class="cart-modal__header--title">Корзина</h2>
        <span class="cart-modal__header--close" @click="closeModal()">
          <img src="../assets/images/icons/close.svg" alt="close" />
        </span>
      </div>
      <div class="cart-modal__body">
        <!-- cart-item -->
        <div class="cart-item">
          <p class="cart-item__title">Ролл угорь стандарт</p>
          <div class="cart-item__controls">
            <div class="cart-item__controls--price">250 ₽</div>
            <button class="btn btn-outline">-</button>
            <div class="cart-item__controls--count">1</div>
            <button class="btn btn-outline">+</button>
          </div>
        </div>
        <!-- cart-item -->
        <div class="cart-item">
          <p class="cart-item__title">Ролл угорь стандарт</p>
          <div class="cart-item__controls">
            <div class="cart-item__controls--price">250 ₽</div>
            <button class="btn btn-outline">-</button>
            <div class="cart-item__controls--count">1</div>
            <button class="btn btn-outline">+</button>
          </div>
        </div>
        <!-- cart-item -->
        <div class="cart-item">
          <p class="cart-item__title">Ролл угорь стандарт</p>
          <div class="cart-item__controls">
            <div class="cart-item__controls--price">250 ₽</div>
            <button class="btn btn-outline">-</button>
            <div class="cart-item__controls--count">1</div>
            <button class="btn btn-outline">+</button>
          </div>
        </div>
        <div class="cart-modal__footer">
          <div class="cart-modal__footer--price">1250 ₽</div>
          <div class="cart-modal__footer--controls">
            <button class="btn btn-primary">Оформить заказ</button>
            <button class="btn btn-outline">Отмена</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { isOpen } = defineProps({ isOpen: Boolean });
const emit = defineEmits(["toggleModal"]);
const closeModal = () => emit("toggleModal");
</script>

<style scoped>
/* modal */
.cart-modal__overlay {
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
}

.cart-modal__overlay.open {
  display: flex;
}
.cart-modal {
  width: 100%;
  max-width: 780px;
  padding: 40px 45px;
  border-radius: 5px;
  background: #fff;
}

.cart-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 48px 0;
}

.cart-modal__header--title {
  color: #000;
  font-size: 36px;
  font-weight: 700;
  line-height: normal;
  margin: 0;
}

.cart-modal__header--close {
  cursor: pointer;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}

.cart-item:not(:last-child) {
  padding: 0 0 10px 0;
  margin: 0 0 10px 0;
  border-bottom: 1px solid #d9d9d9;
}

.cart-item__title {
  color: #000;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  margin: 0;
}

.cart-item__controls {
  display: flex;
  align-items: center;
}

.cart-item__controls--price {
  color: #000;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  margin: 0 50px 0 0;
}

.cart-item__controls button {
  border-radius: 2px;
  border: 1px solid #40a9ff;
  background: #fff;
  color: #40a9ff;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.cart-item__controls--count {
  margin: 0 15px;
}

.cart-modal__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  margin: 50px 0 0 0;
}

.cart-modal__footer--price {
  color: #fafafa;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  border-radius: 5px;
  background: #262626;
  padding: 15px 20px;
}

.cart-modal__footer--controls {
  display: flex;
  align-items: center;
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
  background: #1890ff;
  border: 1px solid #1890ff;
  color: #fff;
}

.btn-outline {
  border-radius: 2px;
  border: 1px solid #d9d9d9;
  background: #fff;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0);
  color: #595959;
}
</style>
