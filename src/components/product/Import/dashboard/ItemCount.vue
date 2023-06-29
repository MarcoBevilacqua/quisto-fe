<template>
  <div id="items-count">
    <div class="info-item">
      <h4>
        Updated: <span class="result">{{ updated }}</span>
      </h4>
    </div>
    <div class="info-item">
      <h4>
        Created: <span class="result">{{ created }}</span>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    updated: Number,
    created: Number
  }
}
</script>
