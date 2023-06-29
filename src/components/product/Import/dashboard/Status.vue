<template>
  <div id="info-container">
    <div class="info-item">
      <h4>
        Pending: <span class="result">{{ this.pendingItems }}</span>
      </h4>
    </div>
    <div class="info-item">
      <h4>
        Finished: <span class="result">{{ isFinished }}</span>
      </h4>
    </div>
    <div class="info-item">
      <h4>
        Failed: <span class="result">{{ failedItems }}</span>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pendingItems: Number,
    failedItems: Number,
    isFinished: Boolean
  }
}
</script>
<style>
.info-item {
  text-align: center;
}
</style>
