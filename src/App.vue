<template>
  <header>
    <h1>Csv Product Import</h1>
  </header>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import ProductUploadForm from './components/product/Import/Form.vue'

export default {
  components: {
    ProductUploadForm
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    justify-content: center;
  }

  .container {
    margin: 20px auto;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    margin: 120px auto;
  }
}
</style>
