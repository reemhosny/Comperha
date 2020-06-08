<template>
  <div class="home-page">

      <!-- Credit -->
      <SectionCredit />

     
      <FilterItems/>

      <!-- Slider  -->
      <!-- <AdsSlider/> -->

      <!-- Why Are We -->
      <!-- <WhyAreWe /> -->



  </div>
</template>

<script>
import SectionCredit from '../components/SectionCredit'
import FilterItems from '../components/FilterItems'

export default {
  components:{
    SectionCredit,
    FilterItems

  }
  
}
</script>
