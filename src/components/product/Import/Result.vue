<template>
  <div class="navbar">
    <div>
      <h3>
        Batch id: <span class="batch-id">{{ this.$route.params.id }}</span>
      </h3>
    </div>
    <div class="toolbar">
      <button @click="getProgress">Update Progress</button>
      <button class="back-btn" @click="goHome">Back to import</button>
    </div>
  </div>
  <div class="result-container">
    <progress-bar :progress="this.progress" />
    <status :pendingItems="this.pending" :isFinished="finished" :failedItems="failed" />
    <item-count :updated="updated" :created="created" />
  </div>
  <div id="error-container">
    <errors :errors="this.errors" v-if="errors.length" />
  </div>
</template>

<script>
import { getImportStatus } from '../../../api/product-upload'
import ProgressBar from './dashboard/Progress.vue'
import Status from './dashboard/Status.vue'
import ItemCount from './dashboard/ItemCount.vue'
import Errors from './errors/Errors.vue'

export default {
  components: {
    ProgressBar,
    Status,
    ItemCount,
    Errors
  },
  mounted() {
    this.getProgress()
  },
  data() {
    return {
      progress: 0,
      pending: 0,
      failed: 0,
      finished: false,
      created: 0,
      updated: 0,
      errors: []
    }
  },
  methods: {
    goHome() {
      this.$router.push('/')
    },
    getProgress() {
      getImportStatus(this.$route.params.id).then((res) => {
        this.progress = res.progress
        this.pending = res.pending
        this.finished = res.finished
        this.failed = res.failed
        this.errors = res.errors
      })
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
}

.toolbar button {
  cursor: pointer;
  border-radius: 3px;
  color: white;
  border: none;
  margin-right: 5px;
  padding: 4px 8px;
  background-color: #4caf50;
}

.toolbar .back-btn {
  background-color: #e7e7e7;
  color: black;
}
.batch-id {
  font-weight: 100;
}

#info-container {
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
