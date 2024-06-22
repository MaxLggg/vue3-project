<template>
  <div>
    <h2>什么是闭包</h2>
    <h3>一个函数的内部给函数保存在外部，从而产生闭包</h3>
    <p>优点：缓存结构、全局变量控制</p>
    <p>缺点：产生内存泄漏</p>
    <p>解决：1. 使用let定义变量</p>
    <p>2: 通过再次使用闭包</p>
  </div>
</template>

<script setup lang="ts">
// 1.
// function test() {
//   let arr = []
//   for (let i = 0; i < 10; i++) {
//     arr[i] = function () {
//       console.log(i)
//     }
//   }
//   return arr
// }

// 2.
// function test() {
//   let arr = []
//   //@ts-ignore
//   for (var i = 0; i < 10; i++) {
//     (function (i) {
//       //@ts-ignore
//       var j = i
//       arr[i] = function () {
//         console.log(j)
//       }
//     })(i)
//   }
//   return arr
// }

// test().forEach((element) => {
//   element()
// })
</script>

<style lang="less" scoped></style>
