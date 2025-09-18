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
                        :to="`/rest?id=${goods.id} `">

                            <div class="products-card__image">
                                <img :src="getUrl(goods.image)" alt="roll-standard">
                            </div>
                            <!-- products-card__description -->
                            <div class="products-card__description">
                                <!-- products-card__description-row -->
                                <div class="products-card__description-row">
                                    <h5 class="products-card__description--name">
                                        {{goods.title}}
                                    </h5>
                                </div>
                                <!-- products-card__description-row -->
                                <div class="products-card__description-row">
                                    <p class="products-card__description--text">
                                        {{goods.description}}
                                    </p>
                                </div>
                                <!-- products-card__description-row -->
                                <div class="products-card__description-row">
                                    <div class="products-card__description-controls">
                                        <button class="btn btn-primary">
                                            {{goods.name}}
                                            <img src="../assets/images/icons/basket-white.svg" alt="basket-white">
                                        </button>
                                        <span class="products-card__description-controls--price">
                                            {{goods.price}} ₽
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

const getUrl = (name) => {
    return new URL(`../assets/images/goods/${name}`, import.meta.url)    
}
        // Array of cards goods
    const goodsArray = [{
            id: 0,
            title: 'Ролл угорь стандарт',
            description: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
            name: 'В корзину',
            icons: 'basket-white.svg',
            price: 250,
            image: 'roll-standard.jpg'
        },
        {
            id: 1,
            title: 'Калифорния лосось стандарт',
            description: 'ис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            name: 'В корзину',
            icons: 'basket-white.svg',
            price: 250,
            image: 'california-standard.jpg'
        },
        {
            id: 2,
            title: 'Окинава стандарт 185 г',
            description: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            name: 'В корзину',
            icons: 'basket-white.svg',
            price: 250,
            image: 'okinawa-standard.jpg'
        },
        {
            id: 3,
            title: 'Цезарь маки хl',
            description: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
            name: 'В корзину',
            icons: 'basket-white.svg',
            price: 250,
            image: 'caesar-poppies.jpg'
        },
        {
            id: 4,
            title: 'Ясай маки стандарт 185 г',
            description: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
            name: 'В корзину',
            icons: 'basket-white.svg',
            price: 250,
            image: 'poppies-standard.jpg'
        },
        {
            id: 5,
            title: 'Ролл с креветкой стандарт',
            description: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
            name: 'В корзину',
            icons: 'basket-white.svg',
            price: 250,
            image: 'shrimp-standard.jpg'
        }
    ]
</script>