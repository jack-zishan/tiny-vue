<script setup>
import { reactive, ref } from 'vue'
import { Repl, ReplStore, File } from '@vue/repl'
import Monaco from '@vue/repl/monaco-editor'
import '@vue/repl/style.css'
import { ButtonGroup as TinyButtonGroup, Select as TinySelect, Option as TinyOption, Notify } from '@opentiny/vue'
import { staticDemoPath, getWebdocPath } from '@/views/components/cmpConfig'
import { fetchDemosFile } from '@/tools/utils'
import logoUrl from './assets/opentiny-logo.svg?url'
import GitHub from './icons/Github.vue'
import Sun from './icons/Sun.vue'
import Moon from './icons/Moon.vue'
import Share from './icons/Share.vue'

const versions = ['3.9.1', '3.8.4']
const latestVersion = versions[0]

const createImportMap = (version) => {
  return {
    imports: {
      '@opentiny/vue': `https://unpkg.com/@opentiny/vue@${version}/runtime/tiny-vue.mjs`,
      '@opentiny/vue-icon': `https://unpkg.com/@opentiny/vue@${version}/runtime/tiny-vue-icon.mjs`,
      '@opentiny/vue-locale': `https://unpkg.com/@opentiny/vue@${version}/runtime/tiny-vue-locale.mjs`,
      '@opentiny/vue-common': `https://unpkg.com/@opentiny/vue@${version}/runtime/tiny-vue-common.mjs`
    }
  }
}
// 如果hash有效，它格式为： 3.8.4|eNqIVV9p.............
const hash = location.hash.slice(1)
const shareData = hash.split('|')

const store = new ReplStore({
  serializedState: shareData.length === 2 ? shareData[1] : '',
  showOutput: true,
  outputMode: 'preview'
})

// 切换主题
const dark = ref(false)

const toggleTheme = (theme) => {
  dark.value = theme
}

const state = reactive({
  // repl 属性
  layout: 'horizon',
  layoutOptions: [
    { value: 'horizon', text: '水平' },
    { value: 'vertical', text: '垂直' }
  ],
  previewOptions: { headHTML: '' },
  // 版本切换
  versions: versions.map((item) => ({ value: item })),
  selectVersion: shareData.length === 2 ? shareData[0] : latestVersion
})

function versionChange(version) {
  const importMap = createImportMap(version)
  store.setImportMap(importMap)
  state.previewOptions.headHTML = `<link rel="stylesheet" href="https://unpkg.com/@opentiny/vue-theme@${version}/index.css">`
}

const langReg = / lang="jsx"/

function getDemoName(name, apiMode) {
  return name.replace(/\.vue$/, `${apiMode === 'Options' ? '' : '-composition-api'}.vue`)
}

const getDemoCode = async ({ cmpId, fileName, apiMode }) => {
  const demoName = getDemoName(`${getWebdocPath(cmpId)}/${fileName}`, apiMode)
  const path = `${staticDemoPath}/${demoName}`
  const code = await fetchDemosFile(path)
    .then((code) => {
      return code
    })
    .catch((error) => {
      return `${demoName}示例资源不存在，请检查文件名是否正确？`
    })

  return code
}

const loadFileCode = async ({ cmpId, fileName, apiMode }) => {
  const code = await getDemoCode({ cmpId, fileName, apiMode })
  const resultCode = code.replace(langReg, '')
  store.state.mainFile = fileName
  store.state.activeFile = fileName
  store.addFile(new File(fileName, resultCode, false))
  versionChange(latestVersion)
}

// 初始加载,有分享则加载分享，否则加载默认版本的默认文件
if (shareData.length === 2) {
  versionChange(shareData[0])
} else {
  const searchObj = new URLSearchParams(location.search)
  const fileName = searchObj.get('fileName')
  const cmpId = searchObj.get('cmpId')
  const apiMode = searchObj.get('apiMode')
  if (fileName && cmpId && apiMode) {
    loadFileCode({ cmpId, fileName, apiMode })
  }
}

// 分享功能
function share() {
  const hash = store.serialize().slice(1)
  const shareUrl = location.origin + '/tiny-vue/playground.html#' + state.selectVersion + '|' + hash

  navigator.clipboard.writeText(shareUrl)
  Notify({
    type: 'success',
    title: '分享',
    message: '当前URL已被复制到剪贴板.',
    duration: 2000
  })
}
</script>

<template>
  <div class="header">
    <div class="title"><img class="logo" :src="logoUrl" /> <span>OpenTiny Vue 演练场</span></div>
    <div>
      <span class="ml20">
        布局方向:
        <tiny-button-group :data="state.layoutOptions" v-model="state.layout"></tiny-button-group>
      </span>
      <span class="ml20">
        版本:
        <tiny-select v-model="state.selectVersion" @change="versionChange" style="width: 150px">
          <tiny-option
            v-for="item in state.versions"
            :key="item.value"
            :label="'opentiny/vue@' + item.value"
            :value="item.value"
          >
          </tiny-option>
        </tiny-select>
      </span>
      <Share @click="share" title="分享" class="share" />
      <Sun v-if="!dark" @click="toggleTheme(true)" class="light" />
      <Moon v-else @click="toggleTheme(false)" class="dark" />
      <a style="display: flex" href="https://github.com/opentiny/tiny-vue" target="_blank">
        <GitHub class="github" />
      </a>
    </div>
  </div>
  <Repl
    :editor="Monaco"
    :store="store"
    :theme="dark ? 'dark' : 'light'"
    :preview-options="state.previewOptions"
    :clear-console="false"
    :layout="state.layout"
  ></Repl>
</template>

<style>
* {
  box-sizing: border-box;
}

#header {
  display: none;
}
#app {
  padding-top: 0;
}
.header {
  height: 46px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 6px;
  border-bottom: solid 1px #e1e1e1;
}

.header > div {
  display: flex;
  align-items: center;
}

.logo {
  margin-right: 10px;
}

.title {
  font-size: 20px;
}

.ml20 {
  margin-left: 20px;
}

.vue-repl {
  /* 16px 是body默认margin*/
  height: calc(100vh - 36px - 16px) !important;
}

.light,
.dark,
.github,
.share {
  width: 20px;
  margin-right: 10px;
  cursor: pointer;
}

.share {
  margin-left: 10px;
}
</style>
