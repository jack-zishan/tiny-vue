<template>
  <div>
    <tiny-select v-model="value" placeholder="请选择">
      <tiny-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        @click.native="clickItem(item.value)"
        :highlight-class="item._highlightClass"
      ></tiny-option>
    </tiny-select>
    <p class="cache-value">
      {{ cacheValue }}
    </p>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Select as TinySelect, Option as TinyOption } from '@opentiny/vue'
import Memorize from '@opentiny/vue-renderless/common/deps/memorize'

const MemorizeInstance = new Memorize({ key: 'test456' })

const options = MemorizeInstance.assemble([
  { value: '选项1', label: '黄金糕' },
  { value: '选项2', label: '双皮奶' },
  { value: '选项3', label: '蚵仔煎' },
  { value: '选项4', label: '龙须面' },
  { value: '选项5', label: '北京烤鸭' }
])

const value = ref('选项3')
const cacheValue = ref([])

function clickItem(value) {
  MemorizeInstance.updateByKey(value)
  cacheValue.value = window.localStorage.getItem('tiny_memorize_test456')
}
</script>
