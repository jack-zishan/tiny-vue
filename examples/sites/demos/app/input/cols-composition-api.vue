<template>
  <div class="demo-input">
    <tiny-input type="textarea" v-model="input" placeholder="cols 为默认"></tiny-input>
    <br />
    <br />
    <tiny-input type="textarea" v-model="input" :cols="100" placeholder="cols 为 100"></tiny-input>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Input as TinyInput } from '@opentiny/vue'

const input = ref('')
</script>

<style scoped>
.demo-input .tiny-textarea {
  width: auto;
}
</style>
