import axios from 'axios'

export async function uploadProductCsv(importData) {
  console.log(importData)
  const response = await axios.post('/api/csv/import', importData)
  return response.data
}

export async function getImportStatus(batchId) {
  console.log(batchId)
  const response = await axios.get('/api/batch/' + batchId)
  return response.data
}
