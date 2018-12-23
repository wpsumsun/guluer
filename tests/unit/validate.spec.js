import chai, { expect } from "chai"
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount } from "@vue/test-utils"
import Validator from '@/validate.js'

chai.use(sinonChai);

describe("validate", () => {

  it('存在', () => {
    expect(Validator).to.exist
  })

  it('required 必填', () => {
    let data = {
      email: ''
    }
    let rules = [
      { key: 'email', required: true }
    ]
    let validator = new Validator()
    let errors = validator.validate(rules, data)
    expect(errors.email.required).to.exist
  })

  it('输入number 0 不显示 required 必填', () => {
    let data = {
      email: 0
    }
    let rules = [
      { key: 'email', required: true }
    ]
    let validator = new Validator()
    let errors = validator.validate(rules, data)
    expect(errors.email).to.not.exist
  })

  it('pattern 格式校验 错误', () => {
    let data = {
      email: 0
    }
    let rules = [
      { key: 'email', pattern: /^.+@.+$/ }
    ]
    let validator = new Validator()
    let errors = validator.validate(rules, data)
    expect(errors.email.pattern).to.exist
  })

  it('pattern 格式校验 正确', () => {
    let data = {
      email: '1@1'
    }
    let rules = [
      { key: 'email', pattern: /^.+@.+$/ }
    ]
    let validator = new Validator()
    let errors = validator.validate(rules, data)
    expect(errors.email).to.not.exist
  })

  it('pattern 不是正则', () => {
    let data = {
      email: '1@1'
    }
    let rules = [
      { key: 'email', pattern: 'email' }
    ]
    let validator = new Validator()
    let errors = validator.validate(rules, data)
    expect(errors.email).to.not.exist
  })

  it('required && pattern', () => {
    let data = {
      email: ''
    }
    let rules = [
      { key: 'email', pattern: 'email', required: true }
    ]
    let validator = new Validator()
    let errors = validator.validate(rules, data)
    expect(errors.email.required).to.exist
    !expect(errors.email.pattern).to.not.exist
  })
  it('minLength', () => {
    let data = {
      email: '123'
    }
    let rules = [
      { key: 'email', pattern: 'email', required: true, minLength: 6 }
    ]
    let validator = new Validator()
    let errors = validator.validate(rules, data)
    expect(errors.email.minLength).to.exist
    expect(errors.email.pattern).to.exist
  })

  it('maxLength', () => {
    let data = {
      email: '123123123123'
    }
    let rules = [
      { key: 'email', pattern: 'email', required: true, maxLength: 10 }
    ]
    let validator = new Validator()
    let errors = validator.validate(rules, data)
    expect(errors.email.maxLength).to.exist
  })

  it('自定义 key', () => {
    let data = {
      email: '123123123123'
    }
    let rules = [
      { key: 'email', pattern: 'email', required: true, maxLength: 10, hasNumber: true }
    ]
    // validate.hasNumber = function()
    let fn = () => {
      let validator = new Validator()
      validator.validate(rules, data)
    }
    expect(fn).to.throw('hasNumber校验函数不存在')
  })

  it('自定义 key&&检验函数', () => {
    let data = {
      email: 'asdf'
    }
    let errors
    let rules = [
      { key: 'email', pattern: 'email', required: true, maxLength: 10, hasNumber: true }
    ]
    let validator = new Validator()
    validator.hasNumber = (value) => {
      if (!/\d/.test(value)) {
        return '必须含有数字'
      }
    }
    errors = validator.validate(rules, data)
    expect(errors.email.hasNumber).to.exist
  })

  it('两个validarot之间互不影响', () => {
    let data = {
      email: 'asdf'
    }
    let errors
    let rules = [
      { key: 'email', pattern: 'email', required: true, maxLength: 10, hasNumber: true }
    ]
    let validator1 = new Validator()
    let validator2 = new Validator()
    validator1.hasNumber = (value) => {
      if (!/\d/.test(value)) {
        return '必须含有数字'
      }
    }
    let fn = () => {
      errors = validator.validate(rules, data)
    }
    expect(() => {
      errors = validator1.validate(rules, data)
    }).to.not.throw()
    expect(() => {
      errors = validator2.validate(rules, data)
    }).to.throw()
  })

})
