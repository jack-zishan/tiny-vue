<template>
  <tiny-layout>
    <tiny-row>
      <tiny-button @click="disabled = !disabled">
        {{ disabled ? '点击启用按钮' : '点击禁用按钮' }}
      </tiny-button>
    </tiny-row>
    <tiny-row>
      <tiny-button :icon="IconSearch" type="text" size="mini" :disabled="disabled"></tiny-button>
      <tiny-button :disabled="disabled">默认按钮</tiny-button>
      <tiny-button type="primary" :disabled="disabled">主要按钮</tiny-button>
      <tiny-button type="success" :disabled="disabled">成功按钮</tiny-button>
      <tiny-button type="info" :disabled="disabled">信息按钮</tiny-button>
      <tiny-button type="warning" :disabled="disabled">警告按钮</tiny-button>
      <tiny-button type="danger" :disabled="disabled">危险按钮</tiny-button>
    </tiny-row>

    <tiny-row>
      <tiny-button :disabled="disabled" plain>默认按钮</tiny-button>
      <tiny-button type="primary" :disabled="disabled" plain>主要按钮</tiny-button>
      <tiny-button type="success" :disabled="disabled" plain>成功按钮</tiny-button>
      <tiny-button type="info" :disabled="disabled" plain>信息按钮</tiny-button>
      <tiny-button type="warning" :disabled="disabled" plain>警告按钮</tiny-button>
      <tiny-button type="danger" :disabled="disabled" plain>危险按钮</tiny-button>
    </tiny-row>
  </tiny-layout>
</template>

<script lang="jsx">
import { Button, Layout, Row } from '@opentiny/vue'
import { IconSearch } from '@opentiny/vue-icon'

export default {
  components: {
    TinyButton: Button,
    TinyLayout: Layout,
    TinyRow: Row
  },
  data() {
    return {
      disabled: false,
      IconSearch: IconSearch()
    }
  }
}
</script>

<style scoped>
.tiny-row {
  margin-bottom: 20px;
}
</style>
