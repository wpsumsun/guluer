import chai, { expect } from "chai"
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount } from "@vue/test-utils"
import validate from '@/validate.js'

chai.use(sinonChai);

describe("validate", () => {

  it('存在', () => {
    expect(validate).to.exist
  })

  it('required 必填', () => {
    let data = {
      email: ''
    }
    let rules = [
      { key: 'email', required: true }
    ]
    let errors = validate(rules, data)
    expect(errors.email.required).to.exist
  })

  it('输入number 0 不显示 required 必填', () => {
    let data = {
      email: 0
    }
    let rules = [
      { key: 'email', required: true }
    ]
    let errors = validate(rules, data)
    expect(errors.email).to.not.exist
  })

  it('pattern 格式校验 错误', () => {
    let data = {
      email: 0
    }
    let rules = [
      { key: 'email', pattern: /^.+@.+$/ }
    ]
    let errors = validate(rules, data)
    expect(errors.email.pattern).to.exist
  })

  it('pattern 格式校验 正确', () => {
    let data = {
      email: '1@1'
    }
    let rules = [
      { key: 'email', pattern: /^.+@.+$/ }
    ]
    let errors = validate(rules, data)
    expect(errors.email).to.not.exist
  })

  it('pattern 不是正则', () => {
    let data = {
      email: '1@1'
    }
    let rules = [
      { key: 'email', pattern: 'email' }
    ]
    let errors = validate(rules, data)
    expect(errors.email).to.not.exist
  })

  it('required && pattern', () => {
    let data = {
      email: ''
    }
    let rules = [
      { key: 'email', pattern: 'email', required: true }
    ]
    let errors = validate(rules, data)
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
    let errors = validate(rules, data)
    console.log(errors);
    expect(errors.email.minLength).to.exist
    expect(errors.email.pattern).to.exist
  })

})
