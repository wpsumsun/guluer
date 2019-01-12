function getBody(xhr) {
  const text = xhr.responseText || xhr.response;
  if (!text) {
      return text;
  }

  try {
      return JSON.parse(text);
  } catch (e) {
      return text;
  }
}

export default function ajax(option) {
  const { action, name, file, onSuccess } = option
  const formData = new FormData()
  formData.append(name, file)
  const xhr = new XMLHttpRequest()
  xhr.open('post', action)
  xhr.upload.onprogress = function progress(e) {
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    option.onProgress(e)
  };
  xhr.onload = () => {
    if(xhr.status == 200){
      option.onSuccess(getBody(xhr));
    }
  }
  xhr.send(formData)
}