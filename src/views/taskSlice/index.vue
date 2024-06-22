<template>
  <a-button type="primary" @click="createWorkstationModal">添加工位</a-button>
  <!-- <a-button>Default Button</a-button> -->

  <a-table :columns="columns" :data-source="data" bordered>
    <template #bodyCell="{ column, index }">
      <template v-if="column.key === 'process'">
        <a-button type="link" danger @click="deleteWorkstation(index)">删除</a-button>
      </template>
    </template>
  </a-table>

  <a-modal v-model:open="open" title="Basic Modal" @ok="handleOk">
    <a-input-number id="inputNumber" v-model:value="worksStationNumber" :min="1" :max="1000" />
  </a-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const columns = [
  {
    title: '工位号',
    dataIndex: 'workstation',
    key: 'workstation'
  },
  {
    title: '面积',
    dataIndex: 'area',
    key: 'area'
  },
  {
    title: '操作',
    dataIndex: 'process',
    key: 'process'
  }
]
const data = ref([])
const open = ref(false)
const totalArea = ref(400)
const worksStationNumber = ref(1)
const createWorkstationModal = () => {
  open.value = true
}

const handleOk = () => {
  const len = worksStationNumber.value.toString.length
  Array.from({ length: worksStationNumber.value }, (_, i) => ({
    workstation: (i + 1).toString().padStart(len > 3 ? len : 3, `0`),
    area: `${totalArea.value / worksStationNumber.value}`
  })).forEach((item) => data.value.push(item))
  open.value = false
}
// 删除工位
const deleteWorkstation = (index: number) => {
  data.value.splice(index, 1)
}
</script>

<style scoped></style>
