<template>
  <header class="app-header" :class="{'menuOpen': menuOpen}">
    <div class="container">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="wrap-btn-menu-mobil">
              <a class="btn-menu-mobile" @click="menuOpen =! menuOpen">
                <template v-if="!menuOpen">
                  <img src="~/assets/images/GlobalNavButton.png">
                </template>
                <template v-else>
                  <img src="~/assets/images/GlobalNavButton.png">
                </template>
                </a>
            </div>
              <div class="navbar-brand">
                  <a class="brand-logo" href="/">
                    <img src="~/assets/images/logo.png">
                  </a>
              </div>

              <div class="navbar-menu">
                  <div class="overlay" @click="menuOpen = false"></div>
                  <div class="wrap-main-menu">
                    <ul class="navbar-end main-menu">
                      <li class="nav-item"><nuxt-link to="/" active-class="active" exact class="nav-link">الرئيسية</nuxt-link></li>
                      <li class="nav-item"><nuxt-link to="/" active-class="active" exact class="nav-link">العقارات</nuxt-link></li>
                      <li class="nav-item"><nuxt-link to="/" active-class="active" exact class="nav-link">المقارنة</nuxt-link></li>
                      <li class="nav-item"><nuxt-link to="/" active-class="active" exact class="nav-link">الوسطاء</nuxt-link></li>
                      <li class="nav-item"><nuxt-link to="/" active-class="active" exact class="nav-link">الخدمات العقارية</nuxt-link></li> 
                    </ul>
                  </div>
                  <div class="navbar-start">
                    <img src="~/assets/images/GlobalNavButton.png" class="left-desktop">
                    <a href="#" class="left-mobile">En</a>
                  </div>
              </div>
        </nav>
    </div>
  </header>
</template>

<script>

export default {
  data() {
    return {
      menuOpen: false
    }
  },

}
</script>
