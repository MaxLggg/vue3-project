<template>
  <a-layout-header>
    <div class="header">
      <div class="logo">Logo</div>
      <!-- <a-menu
        v-model:selectedKeys="selectedKeys1"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu> -->
    </div>
  </a-layout-header>
</template>

<script setup lang="ts">
// import { ref } from 'vue'

// const selectedKeys1 = ref<string[]>(['2'])
</script>

<style lang="less" scoped>
.header {
  display: flex;
}
.logo {
  box-sizing: border-box;
  color: #fff;
  width: 200px;
  margin-right: 20px;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-left-color: #fff;
  border-right-color: #fff;
}
</style>
