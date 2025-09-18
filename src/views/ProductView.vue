<template>
  <!-- products -->
  <section class="products">
    <div class="container">
      <div class="products-wrapper" id="goods-container">
        <!-- products-card -->
        <router-link
          class="products-card"
          v-for="goods in goodsArray"
          :key="goods.id"
          :to="`/rest?id=${goods.id} `"
        >
          <div class="products-card__image">
            <img :src="getUrl(goods.image)" alt="roll-standard" />
          </div>
          <!-- products-card__description -->
          <div class="products-card__description">
            <!-- products-card__description-row -->
            <div class="products-card__description-row">
              <h5 class="products-card__description--name">
                {{ goods.title }}
              </h5>
            </div>
            <!-- products-card__description-row -->
            <div class="products-card__description-row">
              <p class="products-card__description--text">
                {{ goods.description }}
              </p>
            </div>
            <!-- products-card__description-row -->
            <div class="products-card__description-row">
              <div class="products-card__description-controls">
                <button class="btn btn-primary">
                  {{ goods.name }}
                  <img
                    src="../assets/images/icons/basket-white.svg"
                    alt="basket-white"
                  />
                </button>
                <span class="products-card__description-controls--price">
                  {{ goods.price }} ₽
                </span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>


<script setup>
import { goodsArray } from "../constants/goods";

const getUrl = (name) => {
  return new URL(`../assets/images/goods/${name}`, import.meta.url);
};
</script>