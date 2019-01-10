<template>
  <div class="guluer-upload">
    <div class="guluer-upload-trigger" @click="onClickUpload">
      <slot></slot>
    </div>
    <input 
      type="file" 
      :name="name" 
      :accept="accept" 
      ref="input"
      @change="handleChange" 
      class="guluer-upload-input">
    <slot name="tips"></slot>
    <ul>
      <li v-for="file in localFileList" :key="file.uid">
        <img width="100px" :src="file.url">{{ file.name }}
        <g-icon name="close" @click="onRemoveFile(file)"></g-icon>  
        <g-icon name="loading" v-if="file.isUploading"></g-icon>
      </li>
    </ul>
    <div ref="prograss"></div>
  </div>
</template>

<script>
  import ajax from './ajax'
  import GIcon from '../icon/icon'
  export default {
    name: 'g-upload',
    components: {
      GIcon
    },
    props: {
      name: {
        type: String,
        default: 'file'
      },
      accept: {
        type: String,
      },
      action: {
        require: true
      },
      method: {
        type: String,
        default: 'POST'
      },
      fileList: {
        type: Array,
        default() {
          return []
        }
      },
      beforeUpload: Function,
      onSuccess: Function
    },
    data() {
      return {
        tempIndex: 1,
        localFileList: [],
      }
    },
    methods: {
      handleChange(e) {
        const file = e.target.files[0]
        file && this.uploadFiles(file)
        this.$refs.input.value = null
      },
      onRemoveFile(file) {
        let anwser = window.confirm('确定要删除吗')
        if (anwser) {
          const localFileList = [...this.fileList]
          const index = localFileList.indexOf(file)
          localFileList.splice(index, 1)
          this.$emit('update:fileList', localFileList)
        }
      },
      onClickUpload() {
        this.$refs.input.click()
      },
      uploadFiles(file) {
        if (!this.beforeUpload) {
          this.post(file)
        }
        const before = this.beforeUpload(file)
        if (before) {
          this.post(file)
        }
      },
      post(file) {
        this.handleStart(file)
        ajax({
          file,
          name: this.name,
          action: this.action,
          onSuccess: e => {
            this.handleSuccess(e, file)
          }
        })
      },
      handleSuccess(res, file) {
        const _file = this.getFile(file)
        if (_file) {
          _file.status = 'finished'
          _file.response = res
          this.onSuccess(res, _file, this.localFileList)
          console.log(this.localFileList)
        }
      },
      getFile(file) {
        const target = this.localFileList.filter(item => item.uid === file.uid)[0]
        return target
      },
      handleStart(file) {
        file.uid = Date.now() + this.tempIndex++;
        const _file = {
            status: 'uploading',
            name: file.name,
            size: file.size,
            percentage: 0,
            uid: file.uid,
            showProgress: true
        };
        this.localFileList.push(_file)
      },
    }
  }
</script>

<style lang="scss" scoped>
  .guluer-upload {
    &-input {
      display: none;
    }
  }
</style>