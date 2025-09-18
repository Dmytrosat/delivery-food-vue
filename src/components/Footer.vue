<template>
  <!-- footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-box">
        <router-link to="/" class="footer-logo logo">
          <img src="../assets/images/logo.png" alt="logo" />
        </router-link>
        <div class="footer-nav">
          <ul>
            <li><router-link to="/restaurants">Ресторанам </router-link></li>
            <li><router-link to="/couriers">Курьерам</router-link></li>
            <li><router-link to="/press">Пресс-центр</router-link></li>
            <li><router-link to="/contacts">Контакты</router-link></li>
          </ul>
        </div>
        <div class="footer-social">
          <a
            href="https://instagram.com/yourpage"
            target="_blank"
            rel="noopener"
          >
            <img src="../assets/images/social/instagram.png" alt="instagram" />
          </a>
          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener"
          >
            <img src="../assets/images/social/facebook.png" alt="facebook" />
          </a>
          <a href="https://vk.com/yourpage" target="_blank" rel="noopener">
            <img src="../assets/images/social/vk.png" alt="vk" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
/* footer */
.footer {
  min-height: 156px;
  display: flex;
  align-items: center;
  padding: 60px 0;
}

.footer-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
  flex-wrap: wrap;
}

.footer-nav {
  flex-grow: 1;
}

.footer-nav ul {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 15px;
  flex-wrap: wrap;
}

.footer-nav ul li {
  color: #595959;
  font-size: 18px;
  font-weight: 400;
}

.footer-social {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
}
@media (min-width: 768px) {
  .footer-box {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>