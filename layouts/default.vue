<template>
  <div class="wrapper main-layout">
    <!-- App Header -->
    <AppHeader />

    <!-- View Pages -->
    <main class="view-page">
      <nuxt/>
    </main>


  </div>
</template>

<script>
import AppHeader from '@/components/layouts/AppHeader'
export default {
  data () {
    return {

    }
  },
  components:{
    AppHeader,
  }
}
</script>
