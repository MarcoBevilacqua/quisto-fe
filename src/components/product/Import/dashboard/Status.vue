<template>
  <div id="info-container">
    <div class="info-item">
      <h4>Pending jobs</h4>
      <span class="result">{{ this.pendingItems }}</span>
    </div>
    <div class="info-item">
      <h4>Failed jobs</h4>
      <span class="result">{{ this.failedItems }}</span>
    </div>
    <div class="info-item">
      <h4>Items Updated</h4>
      <span class="result">{{ updated }}</span>
    </div>
    <div class="info-item">
      <h4>Items Created</h4>
      <span class="result">{{ created }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pendingItems: Number,
    failedItems: Number,
    updated: Number,
    created: Number
  }
}
</script>
<style>
.info-item {
  padding: 20px 10px;
  font-size: large;
  font-weight: 300;
  text-align: center;
  border: 1px solid gray;
  box-shadow: 1px 2px gray;
  border-radius: 3px;
}

.info-item h4 {
  font-size: 13px;
}

.result {
  font-size: 52px;
  font-weight: 700;
}
</style>
