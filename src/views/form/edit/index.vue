<template>
  <div style="position: relative;width: 100%; height: 100%;">
    <div class="left-board">
      <el-select v-model="dataSource" size="small" @change="handleChangeDataSource">
        <template #prefix><b>表单数据：</b></template>
        <el-option value="1">1</el-option>
        <el-option value="2">2</el-option>
        <el-option value="defaultValue">默认值</el-option>
        <el-option value="cascader">级联</el-option>
        <el-option value="all">All</el-option>
        <el-option value="custom">自定义组件</el-option>
      </el-select>
      <el-scrollbar class="left-scrollbar">
        <div class="components-list">
          <div v-for="(item, listIndex) in leftComponents" :key="listIndex">
            <div class="components-title">
              <svg-icon icon-class="component" />
              {{ item.title }}
            </div>
            <draggable
                class="components-draggable"
                :list="item.list"
                :group="{ name: 'componentsGroup', pull: 'clone', put: false }"
                :clone="cloneComponent"
                draggable=".components-item"
                :sort="false"
                @end="onEnd"
            >
              <div
                  v-for="(element, index) in item.list"
                  :key="index"
                  class="components-item"
                  @click="addComponent(element)"
              >
                <div class="components-body">
                  <svg-icon :icon-class="element.__config__.tagIcon" />
                  {{ element.__config__.label }}
                </div>
              </div>
            </draggable>
          </div>
        </div>
      </el-scrollbar>
    </div>

    <div class="center-board">
      <div class="action-bar">
        <el-button icon="el-icon-video-play" type="text" @click="run">
          运行
        </el-button>
        <el-button icon="el-icon-view" type="text" @click="showJson">
          查看json
        </el-button>
        <el-button icon="el-icon-download" type="text" @click="download">
          导出vue文件
        </el-button>
        <el-button class="copy-btn-main" icon="el-icon-document-copy" type="text" @click="copy">
          复制代码
        </el-button>
        <el-button class="delete-btn" icon="el-icon-delete" type="text" @click="empty">
          清空
        </el-button>
      </div>
      <el-scrollbar class="center-scrollbar">
        <el-row class="center-board-row" :gutter="formConf.gutter">
          <el-form
              :size="formConf.size"
              :label-position="formConf.labelPosition"
              :disabled="formConf.disabled"
              :label-width="formConf.labelWidth + 'px'"
          >
            <draggable class="drawing-board" :list="drawingList" :animation="340" group="componentsGroup">
              <draggable-item
                  v-for="(item, index) in drawingList"
                  :key="item.renderKey"
                  :drawing-list="drawingList"
                  :current-item="item"
                  :index="index"
                  :active-id="activeId"
                  :form-conf="formConf"
                  @activeItem="activeFormItem"
                  @copyItem="drawingItemCopy"
                  @deleteItem="drawingItemDelete"
              />
            </draggable>
            <div v-show="!drawingList.length" class="empty-info">
              从左侧拖入或点选组件进行表单设计
            </div>
          </el-form>
        </el-row>
      </el-scrollbar>
    </div>

    <right-panel
        :active-data="activeData"
        :form-conf="formConf"
        :show-field="!!drawingList.length"
        @tag-change="tagChange"
        @fetch-data="fetchData"
    />

    <form-drawer
        :visible.sync="drawerVisible"
        :form-data="formData"
        size="100%"
        :generate-conf="generateConf"
    />
    <json-drawer
        size="60%"
        :visible.sync="jsonDrawerVisible"
        :json-str="JSON.stringify(formData)"
        @refresh="refreshJson"
    />
    <code-type-dialog
        title="选择生成类型"
        :show-file-name="showFileName"
        @confirm="generate"
    />
    <input id="copyNode" type="hidden">


    <el-drawer
        title="预览"
        :visible.sync="drawer"
        direction="rtl"
        size="90vw"
        append-to-body
    >
      <Parser v-if="drawer" :form-conf="formData"/>
    </el-drawer>

  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { debounce } from 'throttle-debounce'
import { saveAs } from 'file-saver'
import Field from "@/components/FormGenerator/models/Field";
import CustomFormData from "@/components/FormGenerator/models/CustomFormData";
import Parser from '@/components/FormGenerator/parser/Parser.vue'
import FormDrawer from '@/components/FormGenerator/components/FormDrawer.vue'
import JsonDrawer from '@/components/FormGenerator/components/JsonDrawer.vue'
import RightPanel from '@/components/FormGenerator/components/RightPanel.vue'
import { inputComponents, selectComponents, layoutComponents } from '@/components/FormGenerator/generator/config'
import { beautifierConf, titleCase, deepClone, isObjectObject } from '@/components/FormGenerator/utils'
import { makeUpHtml, vueTemplate, vueScript, cssStyle } from '@/components/FormGenerator/generator/html'
import { makeUpJs } from '@/components/FormGenerator/generator/js'
import { makeUpCss } from '@/components/FormGenerator/generator/css'
import CodeTypeDialog from '@/components/FormGenerator/components/CodeTypeDialog.vue'
import DraggableItem from '@/components/FormGenerator/components/DraggableItem.vue'
import { saveDrawingList, getIdGlobal, saveIdGlobal } from '@/components/FormGenerator/utils/db'
import loadBeautifier from '@/components/FormGenerator/utils/loadBeautifier'

let beautifier
let oldActiveId
let tempActiveData
const idGlobal = getIdGlobal()

export default {
  components: {
    Parser,
    draggable,
    FormDrawer,
    JsonDrawer,
    RightPanel,
    CodeTypeDialog,
    DraggableItem
  },
  data() {
    return {
      drawer: false,
      dataSource: window.localStorage.getItem('editFormDataSource') || '',
      idGlobal,
      formConf: new CustomFormData(),
      inputComponents,
      selectComponents,
      layoutComponents,
      labelWidth: 100,
      drawingList: [],
      drawingData: {},
      activeId: '',
      drawerVisible: false,
      formData: {},
      dialogVisible: false,
      jsonDrawerVisible: false,
      generateConf: null,
      showFileName: false,
      activeData: new Field(),
      saveDrawingListDebounce: debounce(340, saveDrawingList),
      saveIdGlobalDebounce: debounce(340, saveIdGlobal),
      leftComponents: [
        {
          title: '输入型组件',
          list: inputComponents
        },
        {
          title: '选择型组件',
          list: selectComponents
        },
        {
          title: '布局型组件',
          list: layoutComponents
        }
      ]
    }
  },
  computed: {
  },
  watch: {
    // eslint-disable-next-line func-names
    'activeData.__config__.label': function (val, oldVal) {
      if (
          this.activeData.placeholder === undefined
          || !this.activeData.__config__.tag
          || oldActiveId !== this.activeId
      ) {
        return
      }
      this.activeData.placeholder = this.activeData.placeholder.replace(oldVal, '') + val
    },
    activeId: {
      handler(val) {
        oldActiveId = val
      },
      immediate: true
    },
    drawingList: {
      handler(val) {
        if (!val) return
        this.saveDrawingListDebounce(val)
        if (val.length === 0) this.idGlobal = 100
      },
      deep: true
    },
    idGlobal: {
      handler(val) {
        this.saveIdGlobalDebounce(val)
      },
      immediate: true
    }
  },
  created() {
    this.initData('')
  },
  mounted() {
    loadBeautifier(btf => {
      beautifier = btf
    })
  },
  methods: {
    initData() {
      this.$axios({
        url: `/mock-data/formData${this.dataSource ? '-' + this.dataSource : ''}.json`
      }).then(res => {
        console.log('res.data:', res.data)
        const data = res.data
        const fields = data.fields
        delete data.fields
        this.formConf = new CustomFormData(data)
        this.drawingList = fields && fields.map(_ => new Field(_)) || []
        this.drawingList[0] && this.activeFormItem(this.drawingList[0])
        // 打印数据：
        this.AssembleFormData()
      })
    },
    handleChangeDataSource() {
      this.initData()
      window.localStorage.setItem('editFormDataSource', this.dataSource)
    },

    setObjectValueReduce(obj, strKeys, data) {
      const arr = strKeys.split('.')
      arr.reduce((pre, item, i) => {
        if (arr.length === i + 1) {
          pre[item] = data
        } else if (!isObjectObject(pre[item])) {
          pre[item] = {}
        }
        return pre[item]
      }, obj)
    },
    setRespData(component, resp) {
      console.log('setRespData:', {
        component,
        resp
      })
      const { dataPath, renderKey, dataConsumer } = component.__config__
      if (!dataPath || !dataConsumer) return
      const respData = dataPath.split('.').reduce((pre, item) => pre[item], resp)

      // 将请求回来的数据，赋值到指定属性。
      // 以el-tabel为例，根据Element文档，应该将数据赋值给el-tabel的data属性，所以dataConsumer的值应为'data';
      // 此时赋值代码可写成 component[dataConsumer] = respData；
      // 但为支持更深层级的赋值（如：dataConsumer的值为'options.data'）,使用setObjectValueReduce
      this.setObjectValueReduce(component, dataConsumer, respData)
      const i = this.drawingList.findIndex(item => item.__config__.renderKey === renderKey)
      if (i > -1) this.$set(this.drawingList, i, component)
    },
    fetchData(component) {
      const { dataType, method, url } = component.__config__
      if (dataType === 'dynamic' && method && url) {
        this.setLoading(component, true)
        this.$axios({
          method,
          url
        }).then(resp => {
          this.setLoading(component, false)
          this.setRespData(component, resp.data)
        })
      }
    },
    setLoading(component, val) {
      const { directives } = component
      if (Array.isArray(directives)) {
        const t = directives.find(d => d.name === 'loading')
        if (t) t.value = val
      }
    },
    activeFormItem(currentItem) {
      this.activeData = currentItem
      this.activeId = this.activeData.__config__.formId
      console.log('activeFormItem>activeData:', JSON.parse(JSON.stringify(this.activeData)))
    },
    onEnd(obj) {
      if (obj.from !== obj.to) {
        this.fetchData(tempActiveData)
        this.activeData = tempActiveData
        this.activeId = this.idGlobal
      }
    },
    addComponent(item) {
      const clone = this.cloneComponent(item)
      this.fetchData(clone)
      this.drawingList.push(clone)
      this.activeFormItem(clone)
    },
    cloneComponent(origin) {
      const clone = deepClone(origin)
      const config = clone.__config__
      config.span = this.formConf.span // 生成代码时，会根据span做精简判断
      this.createIdAndKey(clone)
      clone.placeholder !== undefined && (clone.placeholder += config.label)
      tempActiveData = clone
      return tempActiveData
    },
    createIdAndKey(item) {
      const config = item.__config__
      config.formId = ++this.idGlobal
      config.renderKey = `${config.formId}${+new Date()}` // 改变renderKey后可以实现强制更新组件
      if (config.layout === 'colFormItem' && item.functional !== true) {
        item.__vModel__ = `field${this.idGlobal}`
      } else if (config.layout === 'rowFormItem') {
        config.componentName = `row${this.idGlobal}`
        !Array.isArray(config.children) && (config.children = [])
        delete config.label // rowFormItem无需配置label属性
      }
      if (Array.isArray(config.children)) {
        config.children = config.children.map(childItem => this.createIdAndKey(childItem))
      }
      return item
    },
    AssembleFormData() {
      this.formData = {
        fields: deepClone(this.drawingList),
        ...this.formConf
      }
      console.log('AssembleFormData>formData:', JSON.parse(JSON.stringify(this.formData)))
    },
    generate(data) {
      const func = this[`exec${titleCase(this.operationType)}`]
      this.generateConf = data
      console.log('operationType:', this.operationType)
      console.log('generateConf:', this.generateConf)
      func && func(data)
    },
    execRun() {
      this.AssembleFormData()
      this.drawerVisible = true
    },
    execDownload(data) {
      const codeStr = this.generateCode()
      const blob = new Blob([codeStr], { type: 'text/plain;charset=utf-8' })
      saveAs(blob, data.fileName)
    },
    execCopy() {
      document.getElementById('copyNode').click()
    },
    empty() {
      this.$confirm('确定要清空所有组件吗？', '提示', { type: 'warning' }).then(
          () => {
            this.drawingList = []
            this.idGlobal = 100
          }
      )
    },
    drawingItemCopy(item, list) {
      let clone = deepClone(item)
      clone = this.createIdAndKey(clone)
      list.push(clone)
      this.activeFormItem(clone)
    },
    drawingItemDelete(index, list) {
      list.splice(index, 1)
      this.$nextTick(() => {
        const len = this.drawingList.length
        if (len) {
          this.activeFormItem(this.drawingList[len - 1])
        }
      })
    },
    generateCode() {
      const { type } = this.generateConf
      this.AssembleFormData()
      const script = vueScript(makeUpJs(this.formData, type))
      const html = vueTemplate(makeUpHtml(this.formData, type))
      const css = cssStyle(makeUpCss(this.formData))
      return beautifier.html(html + script + css, beautifierConf.html)
    },
    showJson() {
      this.AssembleFormData()
      this.jsonDrawerVisible = true
    },
    download() {
      this.dialogVisible = true
      this.showFileName = true
      this.operationType = 'download'
    },
    run() {
      this.AssembleFormData()

      this.drawer = true
    },
    copy() {
      this.dialogVisible = true
      this.showFileName = false
      this.operationType = 'copy'
    },
    tagChange(newTag) {
      newTag = this.cloneComponent(newTag)
      const config = newTag.__config__
      newTag.__vModel__ = this.activeData.__vModel__
      config.formId = this.activeId
      config.span = this.activeData.__config__.span
      this.activeData.__config__.tag = config.tag
      this.activeData.__config__.tagIcon = config.tagIcon
      this.activeData.__config__.document = config.document
      if (typeof this.activeData.__config__.defaultValue === typeof config.defaultValue) {
        config.defaultValue = this.activeData.__config__.defaultValue
      }
      Object.keys(newTag).forEach(key => {
        if (this.activeData[key] !== undefined) {
          newTag[key] = this.activeData[key]
        }
      })
      this.activeData = newTag
      this.updateDrawingList(newTag, this.drawingList)
    },
    updateDrawingList(newTag, list) {
      const index = list.findIndex(item => item.__config__.formId === this.activeId)
      if (index > -1) {
        list.splice(index, 1, newTag)
      } else {
        list.forEach(item => {
          if (Array.isArray(item.__config__.children)) this.updateDrawingList(newTag, item.__config__.children)
        })
      }
    },
    refreshJson(data) {
      this.drawingList = deepClone(data.fields)
      delete data.fields
      this.formConf = data
    }
  }
}
</script>

<style lang='scss'>
@import '@/components/FormGenerator/styles/home.scss';
</style>
