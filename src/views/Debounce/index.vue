<template>
	<input v-model="inputValue" />
	<h2>{{ inputValue }}</h2>
</template>

<script setup>
// import { ref } from "vue";
import { debounceRef } from '../utils/debounce';

const inputValue = debounceRef('');
// 方案一
// const inputValue = ref("");
// const updateInput = (e) => {
//   inputValue.value = e.target.value;
// };
// const handleInput = debounce(updateInput, 1000);

// 方案二
</script>

<style></style>
../../utils/debounce
