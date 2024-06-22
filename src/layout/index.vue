<template>
  <a-layout class="layout">
    <Header class="header" />
    <a-layout class="layout">
      <Menu class="menu" />
      <a-layout-content>
        <RouterView />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { RouterView } from 'vue-router'
import Menu from './Menu/index.vue'
import Header from './Header/index.vue'
</script>
<style lang="less" scoped>
@margin: 10px;

.layout {
  padding-right: @margin;
  .header {
    margin-bottom: @margin;
  }
  .menu {
    margin-right: @margin;
  }
}
</style>
