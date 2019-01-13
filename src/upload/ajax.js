function getError(action, option, xhr) {
  let msg;
  if (xhr.response) {
    msg = `${xhr.response.error || xhr.response}`
  } else if (xhr.responseText) {
    msg = `${xhr.responseText}`
  } else {
    msg = `fail to post ${action} ${xhr.status}`
  }

  const err = new Error(msg)
  err.status = xhr.status
  err.method = 'post'
  err.url = action
  return err
}

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
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(action, option, xhr), getBody(xhr));
    }
    option.onSuccess(getBody(xhr))
    // if (Math.random() < 1) {
    //   return option.onError(getError(action, option, xhr), getBody(xhr));
    // }
    // option.onSuccess(getBody(xhr))
  }
  xhr.send(formData)
}