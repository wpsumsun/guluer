export default function validate(rules, data) {
  let errors = {}
  rules.forEach(rule => {
    const value = data[rule.key]
    if(rule.required) {
      if (!value && value !==0) {
        errors[rule.key] = { required: '必填' }
        return
      }
    }
    if (rule.pattern) {
      if (typeof rule.pattern !== 'object') {
        rule.pattern = /^.+@.+$/
      }
      if (!rule.pattern.test(value)) {
        hasObject(errors, rule.key)
        errors[rule.key].pattern = '格式不正确'
      }
    }
    if (rule.minLength) {
      if (value.length < rule.minLength) {
        hasObject(errors, rule.key)
        errors[rule.key].minLength = '太短'
      }
    }
  })
  return errors
}

function hasObject(obj, key) {
  if (!obj[key]) {
    obj[key] = {}
  }
}