<template>
  <div class="content">
    <!-- <div class="text">{{ second }}</div> -->
    <div class="left-wrap">
      <!-- <div class="left" :style="{ transform: `rotate(${leftRotate}deg)` }"></div> -->
      <div class="left" :style="{ animationPlayState: paused }"></div>
    </div>
    <div class="right-wrap">
      <div class="right" :style="{ animationPlayState: paused }"></div>
    </div>
  </div>
  <div @click="handlePaused">暂停/播放</div>

  <div>arr:{{ arr }}</div>
  <div>select:{{ selectArr }}</div>
  <div @click="init">随机抽取</div>
  <div @click="change" style="margin-top: 10px">换一换</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const second = ref(0)
const paused = ref('paused')
const timer = ref()
const handlePaused = () => {
  if (paused.value) {
    paused.value = ''
    timer.value = setInterval(() => {
      second.value += 1
      if (second.value >= 15) clearInterval(timer.value)
    }, 1000)
  } else {
    paused.value = 'paused'
    clearInterval(timer.value)
  }
}

const arr = ref([])
const selectArr = ref([])
const init = () => {
  const result = [
    { id: 1, name: '张三' },
    { id: 2, name: '李四' },
    { id: 3, name: '王五' },
    { id: 4, name: '赵六' },
    { id: 5, name: '钱七' },
    { id: 6, name: '孙八' },
    { id: 7, name: '周九' },
    { id: 8, name: '吴十' }
  ]
  arr.value = getRandomElementsWithFixedSelection(result, 6)
  selectArr.value = [arr.value[1], arr.value[2]]
}
const change = () => {
  arr.value = getRandomElementsWithFixedSelection(arr.value, 6, selectArr.value)
}

function getRandomElementsWithFixedSelection(arr, count, selectedIds = []) {
  if (arr.length < count) {
    throw new Error('The array does not contain enough elements.')
  }

  // 分离选中对象和其他对象
  const fixedElements = []
  const otherElements = []
  const resultArray = Array(arr.length).fill(null)

  arr.forEach((item, index) => {
    if (selectedIds.find((el) => el.id === item.id)) {
      fixedElements.push({ item, index })
    } else {
      otherElements.push(item)
    }
  })
  debugger
  for (let i = otherElements.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[otherElements[i], otherElements[j]] = [otherElements[j], otherElements[i]]
  }

  let finalArray = []

  if (selectedIds.length === 0) {
    // 随机抽取 count 条数据
    finalArray = otherElements.slice(0, count)
  } else {
    // 保持选中对象的位置不变，并将其他对象打乱后插入
    let otherIndex = 0
    for (let i = 0; i < resultArray.length; i++) {
      if (fixedElements.some((fixed) => fixed.index === i)) {
        resultArray[i] = fixedElements.find((fixed) => fixed.index === i).item
      } else if (otherIndex < otherElements.length) {
        resultArray[i] = otherElements[otherIndex++]
      }
    }

    // 截取到 count 长度
    finalArray = resultArray.filter((item) => item !== null).slice(0, count)
  }

  return finalArray
}
// function Person() {
//   this.name = '张三'
//   this.age = 18
//   this.sayHello = function () {
//     console.log('hello')
//   }
// }
</script>

<style lang="less" scoped>
.content {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  .text {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background-color: #fff;
    z-index: 2;
  }
  .left-wrap,
  .right-wrap {
    position: absolute;
    width: 100px;
    height: 200px;
    overflow: hidden;
  }
  .left-wrap {
    left: 0;
  }
  .right-wrap {
    right: 0;
  }
  .left {
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 200px;
    border-radius: 100px 0 0 100px;
    background-color: blue;
    transform: rotate(0deg);
    transform-origin: right center;
    animation: leftRotate 10s linear infinite;
  }
  .right {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 200px;
    border-radius: 0 100px 100px 0;
    background-color: rgb(156, 38, 156);
    transform: rotate(0deg);
    transform-origin: left center;
    animation-name: rightRotate;
    animation-duration: 10s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  @keyframes leftRotate {
    0%,
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
  @keyframes rightRotate {
    0% {
      transform: rotate(0deg);
    }
    50%,
    100% {
      transform: rotate(180deg);
    }
  }
}
</style>
