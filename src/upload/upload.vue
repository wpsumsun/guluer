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
        <g-icon name="loading" v-if="file.status === 'uploading'"></g-icon>
        {{ file.prograss }}
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
      onSuccess: {
        type: Function,
        default() {
          return {}
        }
      },
      onProgress: {
        type: Function,
        default() {
          return {}
        }
      },
      onError: {
        type: Function,
        default() {
          return {}
        }
      },
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
        const index = this.localFileList.indexOf(file)
        this.localFileList.splice(index, 1)
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
          },
          onProgress: e => {
            this.handleProgress(e, file)
          },
          onError: (error, res) => {
            this.handleError(error, res, file)
          }
        })
      },
      handleProgress(e, file) {
        const _file = this.getFile(file)
        _file.percentage = e.percent || 0
      },
      handleError(error, res, file) {
        const _file = this.getFile(file)
        const fileList = this.localFileList
        _file.status = 'fail'
        fileList.splice(fileList.indexOf(_file), 1);
        this.onError(error, res, file);
      },
      handleSuccess(res, file) {
        const _file = this.getFile(file)
        if (_file) {
          _file.status = 'success'
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
        _file.url = URL.createObjectURL(file)
        this.localFileList.push(_file)
      },
    },
    watch: {
      fileList: {
        immediate: true,
        handler() {
          this.localFileList = this.fileList.map(item => {
            item.status = 'success'
            item.uid = Date.now() + this.tempIndex++
            item.percentage = 100
            return item
          })
        }
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