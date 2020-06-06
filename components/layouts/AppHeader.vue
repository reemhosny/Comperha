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
                      <li class="nav-item"><nuxt-link to="/" active-class="active" exact class="nav-link">
                      <img src="~/assets/images/Home.png" class="ml-3 menue-icon">
                      الرئيسية
                      </nuxt-link>
                      <img src="~/assets/images/ChevronLeft.png">
                      </li>
                      <li class="nav-item"><nuxt-link to="/" active-class="active" exact class="nav-link">
                      <img src="~/assets/images/icon1.png" class="ml-3 menue-icon">
                      بطاقات الائتمان
                      </nuxt-link>
                      <img src="~/assets/images/ChevronLeft.png">
                      </li>
                      <li class="nav-item"><nuxt-link to="/" active-class="active" exact class="nav-link">
                      <img src="~/assets/images/icon2.png" class="ml-3 menue-icon">
                      قروض السيارات
                      </nuxt-link>
                      <img src="~/assets/images/ChevronLeft.png">
                      </li>
                      <li class="nav-item"><nuxt-link to="/" active-class="active" exact class="nav-link">
                      <img src="~/assets/images/icon3 .png" class="ml-3 menue-icon">
                      قروض شخصية
                      </nuxt-link>
                      <img src="~/assets/images/ChevronLeft.png">
                      </li>
                      <li class="nav-item"><nuxt-link to="/" active-class="active" exact class="nav-link">
                      <img src="~/assets/images/icon4 .png" class="ml-3 menue-icon">
                      تأمين السفر
                      </nuxt-link>
                      <img src="~/assets/images/ChevronLeft.png">
                      </li> 
                      <li class="nav-item"><nuxt-link to="/" active-class="active" exact class="nav-link">
                      <img src="~/assets/images/icon5.png" class="ml-3 menue-icon">
                      تأمين السيارة
                      </nuxt-link>
                      <img src="~/assets/images/ChevronLeft.png">
                      </li> 
                      <li class="nav-item"><nuxt-link to="/" active-class="active" exact class="nav-link">
                      <img src="~/assets/images/icon7.png" class="ml-3 menue-icon">
                      تمويلات عقارية
                      </nuxt-link>
                      <img src="~/assets/images/ChevronLeft.png">
                      </li> 
                      <li class="nav-item"><nuxt-link to="/" active-class="active" exact class="nav-link">
                      <img src="~/assets/images/Icon6.png" class="ml-3 menue-icon"> 
                      تأمين المنزل
                      </nuxt-link>
                      <img src="~/assets/images/ChevronLeft.png">
                      </li> 
                      <li class="nav-item"><nuxt-link to="/" active-class="active" exact class="nav-link">
                      <img src="~/assets/images/Info.png" class="ml-3 menue-icon">
                      عن الموقع
                      </nuxt-link>
                      <img src="~/assets/images/ChevronLeft.png">
                      </li> 
                      <li class="nav-item"><nuxt-link to="/" active-class="active" exact class="nav-link">
                      <img src="~/assets/images/DuplexLand.png" class="ml-3 menue-icon">
                      مدونة
                      </nuxt-link>
                      <img src="~/assets/images/ChevronLeft.png">
                      </li> 
                      <li class="nav-item"><nuxt-link to="/" active-class="active" exact class="nav-link">
                      <img src="~/assets/images/Headphone.png" class="ml-3 menue-icon">
                      تواصل معنا
                      </nuxt-link>
                      <img src="~/assets/images/ChevronLeft.png" class="ml-3 menue-icon">
                      </li> 
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
