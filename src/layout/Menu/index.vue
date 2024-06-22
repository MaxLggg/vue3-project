<template>
  <a-layout-sider width="200" style="background: #fff">
    <a-menu v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" mode="inline">
      <a-sub-menu key="sub1">
        <template #title>
          <span> vue3 </span>
        </template>
        <a-menu-item v-for="item in routes" :key="item.path" @click="router.push(item.path)">
          {{ item.meta?.title }}
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const routes = router.options.routes.slice(1)

const selectedKeys2 = ref<string[]>(['1'])
const openKeys = ref<string[]>(['sub1'])
</script>

<style scoped></style>
