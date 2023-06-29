<template>
  <div class="form-container">
    <div class="header">
      <span class="upload">Upload Csv File</span>
    </div>
    <div v-if="loading" class="drop loading">
      <div class="loading-ind">
        <h3>Processing...</h3>
      </div>
    </div>
    <div class="drop" v-else>
      <form enctype="multipart/form-data" @submit.prevent="upload">
        <div class="select-file">
          <label for="file">Select File</label>
          <input required type="file" name="products" ref="file" />
          <span class="file-name">{{ fileName }}</span>
        </div>

        <div class="import-file">
          <input type="submit" value="Start Import" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { uploadProductCsv } from '../../../api/product-upload'
export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {
    upload() {
      const formData = new FormData()
      this.loading = true
      formData.append('products', this.$refs.file.files[0])
      uploadProductCsv(formData).then((resData) => {
        console.log(resData)
        this.$router.push('batch/' + resData.batchId)
      })
    }
  }
}
</script>

<style scoped>
.form-container {
  width: 400px;
  margin: 120px auto;
  border: 2px solid gray;
}
.header {
  background: #eb6a5a;
  text-align: center;
}

.upload {
  display: inline-block;
  font-weight: 100;
  margin-left: -8px;
  color: #fff;
  font-size: 40px;
  margin: 0;
  padding: 50px 0;
}

.drop {
  text-align: center;
  padding: 50px 0;
  padding-bottom: 30px;
}

.loading-ind {
  margin: 75px auto;
}

.select-file {
  height: 50px;
  margin: 20px auto;
  position: relative;
  width: 200px;
}

label,
input {
  cursor: pointer;
  display: block;
  height: 50px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  border-radius: 5px;
}

label {
  background: #fff;
  color: #eb6a5a;
  display: inline-block;
  font-size: 1.2em;
  line-height: 50px;
  padding: 0;
  text-align: center;
  white-space: nowrap;
  text-transform: uppercase;
  font-weight: 400;
  border: 1px solid gray;
}

input[type='file'] {
  opacity: 0;
}

input[type='submit'] {
  margin-top: 20px;
  cursor: pointer;
  height: 30px;
  position: relative;
  width: 40%;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #eb6a5a;
  display: inline-block;
  font-size: 0.8em;
  padding: 0;
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
}
</style>
