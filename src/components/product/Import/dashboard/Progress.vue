<template>
  <div id="progress-container">
    <div>
      <h4>Progress:</h4>
    </div>
    <div class="meter">
      <span :style="'width:' + progress + '%'"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    progress: Number
  }
}
</script>

<style>
#progress-container {
  margin: 20px auto;
}

.meter {
  box-sizing: content-box;
  height: 10px;
  position: relative;
  background: #555;
  border-radius: 25px;
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
}

.meter > span {
  display: block;
  height: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: rgb(43, 194, 83);
  background-image: linear-gradient(center bottom, rgb(43, 194, 83) 37%, rgb(84, 240, 84) 69%);
  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3), inset 0 -2px 6px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
}
</style>
