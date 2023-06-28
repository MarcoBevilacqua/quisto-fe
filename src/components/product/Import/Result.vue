<template>
  <div class="navbar">
    <div>
      <h3>
        Batch id: <span class="batch-id">{{ this.$route.params.id }}</span>
      </h3>
    </div>
    <div class="toolbar">
      <button @click="getProgress">Update Progress</button>
      <button @click="goHome">Back to import</button>
    </div>
  </div>
  <div class="result-container">
    <div id="progress-container">
      <div>
        <h4>Progress:</h4>
      </div>
      <div class="meter">
        <span :style="'width:' + progress + '%'"></span>
      </div>
    </div>

    <div id="info-container">
      <div class="info-item">
        <h4>
          Pending: <span class="result">{{ pending }}</span>
        </h4>
      </div>
      <div class="info-item">
        <h4>
          Finished: <span class="result">{{ finished }}</span>
        </h4>
      </div>
      <div class="info-item">
        <h4>
          Failed: <span class="result">{{ failed }}</span>
        </h4>
      </div>
    </div>
  </div>
  <div id="error-container">
    <div class="error-container-header">
      <h3>Errors: {{ errors.length }}</h3>
    </div>
    <div class="errors-container" v-if="errors.length">
      <div class="row" style="display: inline-table" v-for="errorLine in errors">
        <div>{{ errorLine.uuid }}</div>
        <div>{{ errorLine.exception }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getImportStatus } from '../../../api/product-upload'
export default {
  methods: {
    getProgress() {
      getImportStatus(this.$route.params.id).then((res) => {
        this.progress = res.progress
        this.pending = res.pending
        this.finished = res.finished
        this.failed = res.failed
        this.errors = res.errors
      })
    },
    goHome() {
      this.$router.push('/')
    }
  },
  data() {
    return {
      progress: 0,
      pending: 0,
      failed: 0,
      finished: 0,
      errors: []
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
}
.batch-id {
  font-weight: 100;
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

#progress-container {
  margin: 20px auto;
}

#info-container {
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.info-item {
  text-align: center;
}
</style>
