<!--
 * @Author: 秦少卫
 * @Date: 2022-09-03 19:16:55
 * @LastEditors: June
 * @LastEditTime: 2024-11-24 09:36:57
 * @Description: 导入模板
-->

<template>
  <div>
    <!-- 搜索组件 -->
    <div class="search-box">
      <el-dropdown
        @command="createType"
        placement="bottom-start"
        style="margin-right: 10px"
        transfer
      >
        <el-button type="primary" :icon="Plus"></el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="file">
              {{ $t('editor.insert.template') }}
            </el-dropdown-item>
            <el-dropdown-item command="fileType">{{
              $t('editor.insert.folder')
            }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <el-input
        class="input"
        :placeholder="$t('common.placeholder.input')"
        v-model="filters.name.$contains"
        search
        :disabled="pageLoading"
        @keyup.enter="startGetList"
      />
    </div>

    <!-- 面包屑导航 -->
    <el-breadcrumb>
      <el-breadcrumb-item
        @click="toFile(item.parentId, i)"
        :key="item.id"
        v-for="(item, i) in filePath"
      >
        {{ item.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 列表 -->
    <div style="height: calc(100vh - 160px)" id="myFileTemplBox">
      <el-scrollbar
        key="myFileTemplBox"
        v-if="showScroll"
        :on-reach-bottom="nextPage"
        :height="scrollHeight"
      >
        <!-- 列表 -->
        <div v-for="info in pageData" :key="info.name" class="item">
          <!-- 文件夹样式 -->
          <fileType
            v-if="info.type === 'fileType'"
            :itemId="info.id"
            :name="info.name"
            @select="() => joinFileTyper(info.id, info.name)"
            @change="startGetList"
          ></fileType>

          <file
            v-else
            :src="info.src"
            :json="info.json"
            :previewSrc="info.previewSrc"
            :itemId="info.id"
            :name="info.name"
            @change="startGetList"
          ></file>
        </div>
        <el-divider plain v-if="isDownBottom">{{
          $t('common.nomore')
        }}</el-divider>
      </el-scrollbar>
    </div>

    <!-- 创建设计 -->
    <ModalSzie
      :title="$t('editor.importFiles.createDesign.title')"
      ref="modalSizeRef"
      @set="customSizeCreate"
    />
  </div>
</template>

<script setup name="ImportTmpl">
import { Plus } from '@element-plus/icons-vue'
// 组件
import fileType from './components/fileType.vue'
import file from './components/file.vue'
import ModalSzie from '@/components/ModalSize.vue'

// API
import { getTmplList, getFileTypeTree } from '@/api/user'
// 素材与分页
import useMaterial from '@/hooks/useMaterial'
import usePageList, {
  getMaterialInfoUrl,
  getMaterialPreviewUrl
} from '@/hooks/usePageList'
// 路由
import { useRoute } from 'vue-router'
const route = useRoute()

// 用户素材API操作
const { createdFileType, createTmpl } = useMaterial()

// 检索条件
const filters = reactive({
  name: {
    $contains: ''
  },
  parentId: {
    $eq: '',
    filterEmpty: false
  }
})

const sort = ['type:desc']

// 分页格式化
const formatData = (data) => {
  return data.map((item) => {
    return {
      id: item.id,
      name: item.attributes.name,
      type: item.attributes.type || 'file',
      desc: item.attributes.desc,
      json: item.attributes.json,
      src: getMaterialInfoUrl(item.attributes.img),
      previewSrc: getMaterialPreviewUrl(item.attributes.img)
    }
  })
}
// 通用分页
const {
  pageData,
  showScroll,
  scrollHeight,
  isDownBottom,
  pageLoading,
  startPage,
  startGetList,
  nextPage
} = usePageList({
  el: '#myFileTemplBox',
  apiClient: getTmplList,
  filters,
  sort,
  fields: ['name', 'parentId', 'type', 'externalId'],
  formatData
})

onMounted(async () => {
  await getFileTypeTreeData()
  startPage()
})

const fileTypeName = ref('')
const modalSizeRef = ref(null)
// 新建文件
const createType = (type) => {
  if (type === 'fileType') {
    fileTypeName.value = ''
    ElMessageBox.confirm('新建文件夹', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      message: () => {
        return h(ElInput, {
          ...ElInput.$el,
          ...ElInput.$attrs,
          size: 'large',
          modelValue: fileTypeName.value,
          autofocus: true,
          style: {
            margin: '10px 0',
            width: '400px'
          },
          placeholder: '请输入文件夹名称',
          'onUpdate:modelValue': ($event) => {
            fileTypeName.value = $event
          }
        })
      }
    }).then(async () => {
      if (fileTypeName.value === '') {
        ElMessage.warning('文件夹名称不能为空')
        return
      }
      await createdFileType(fileTypeName.value, filters.parentId.$eq)
      startGetList()
    })
  } else {
    modalSizeRef.value.showSetSize()
  }
}
const customSizeCreate = async (w, h) => {
  await createTmpl(w, h, filters.parentId.$eq)
  startGetList()
}

const filePath = ref([
  {
    name: '全部',
    parentId: ''
  }
])

const getFileTypeTreeData = async () => {
  if (route?.query?.id) {
    const res = await getFileTypeTree({
      id: route.query.id
    })
    filePath.value = res.data.data
    const last = res.data.data[res.data.data.length - 1]
    filters.parentId.$eq = last.parentId
  }
}
// 进入文件夹
const joinFileTyper = (id, name) => {
  filters.parentId.$eq = String(id)
  filePath.value.push({
    name: name,
    parentId: id
  })
  startGetList()
}

// 面包屑跳转文件夹
const toFile = (id, i) => {
  const isLast = i === filePath.value.length - 1
  if (!isLast) {
    filters.parentId.$eq = id
    filePath.value = filePath.value.slice(0, i + 1)
    startGetList()
  }
}
</script>

<style scoped lang="scss">
.search-box {
  padding-bottom: 10px;
  display: flex;
}

:deep(.el-scrollbar__view) {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-right: 10px;
}
.item {
  margin-bottom: 10px;
}
</style>
