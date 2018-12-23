class Validator {
  constructor() {}

  validate(rules, data) {
    let errors = {}
    rules.forEach(rule => {
      const value = data[rule.key]
      if(rule.required) {
        let error = this.required(value)
        if (error) {
          hasObject(errors, rule.key)
          errors[rule.key].required = '必填'
          return
        }
      }
      let validateKeys = Object.keys(rule).filter(key => key !== 'required' && key !== 'key')
      validateKeys.forEach(validateKey => {
        if (this[validateKey]) {
          let error = this[validateKey](value, rule[validateKey])
          if (error) {
            hasObject(errors, rule.key)
            errors[rule.key][validateKey] = error
          }
        } else {
          throw `${validateKey}校验函数不存在`
        }
      })
    })
    return errors
  }

  required (value) {
    if (!value && value !==0) {
      return '必填'
    }
  }

  pattern(value, pattern) {
    if (typeof pattern !== 'object') {
      pattern = /^.+@.+$/
    }
    if (!pattern.test(value)) {
      return '格式不正确'
    }
  }

  minLength(value, minLength) {
    if (value.length < minLength) {
      return '太短'
    }
  }
  maxLength(value, maxLength) {
    if (value.length > maxLength) {
      return '太长'
    }
  }

}

function hasObject(obj, key) {
  if (!obj[key]) {
    obj[key] = {}
  }
}

export default Validator