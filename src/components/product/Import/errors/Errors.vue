<template>
  <div class="errors-container">
    <div class="errors-container">
      <table id="errors">
        <thead>
          <tr>
            <th>Job Id</th>
            <th>Exception</th>
          </tr>
        </thead>
        <tbody>
          <tr class="errors-table" v-for="errorLine in errors">
            <td class="table-cell">{{ errorLine.uuid }}</td>
            <td class="table-cell">
              <div>{{ errorLine.exception }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    errors: Array
  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  text-align: left;
}
table th {
  font-weight: 600;
}
.errors-container {
  margin-top: 50px;
  width: 100%;
  border-radius: 5px;
}

#errors td,
#errors th {
  border: 1px solid #ddd;
  padding: 8px;
}

td div {
  max-width: 1200px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

#errors tr:nth-child(even) {
  background-color: #f2f2f2;
}

#errors tr:hover {
  background-color: #ddd;
}

#errors th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: brown;
  color: white;
}
</style>
