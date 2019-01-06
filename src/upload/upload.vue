<template>
  <div class="guluer-upload">
    <div class="guluer-upload-trigger" @click="onClickUpload">
      <slot></slot>
    </div>
    <input type="file" :name="name" :accept="accept" ref="upload" class="guluer-upload-input">
    <slot name="tips"></slot>
    <ul>
      <li v-for="(file, fileIndex) in fileList" :key="fileIndex">
        <img width="100px" :src="file.url">{{ file.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'g-upload',
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
      parseResponse: {
        type: Function,
        require: true
      },
      fileList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      onClickUpload() {
        const upload = this.$refs.upload
        upload.click()
        upload.addEventListener('change', () => {
          const file = upload.files[0]
          file && this.updateFile(file)
        })
      },
      updateFile(file) {
        const { name, size } = file
        this.$refs.upload.value = null
        const formData = new FormData()
        formData.append(this.name, file)
        const xhr = new XMLHttpRequest()
        xhr.open(this.method, this.action)
        xhr.onload = () => {
          if(xhr.status == 200){
            const url = this.parseResponse(xhr.response)
            this.fileList.push({ name, url, size })
          }
        }
        xhr.send(formData)
      }
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