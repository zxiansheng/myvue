<template>
  <div class="container">
    <div class="left">
      <div class="form">
        <div class="header">
          <h2 class="animation a1">
            欢迎回来
          </h2>
        </div>
        <ValidationObserver
          ref="form"
        >
          <validation-provider
            rules="a-required|min:6|max:12"
            v-slot="{ errors }"
          >
            <input
              style="width:100%"
              class="form-field animation a3"
              placeholder="登录账号"
              v-model="account"
              name="account"
            >
            <span>{{ errors[0] }}</span>
          </validation-provider>
          <validation-provider
            rules="required|min:6|max:12"
            v-slot="{ errors }"
          >
            <input
              style="width:100%"
              class="form-field animation a3"
              placeholder="用户昵称"
              v-model="nickname"
              name="nickname"
            >
            <span>{{ errors[0] }}</span>
          </validation-provider>
          <validation-provider
            rules="r-pwd|min:8|max:12"
            v-slot="{ errors }"
          >
            <input
              style="width:100%"
              type="password"
              class="form-field animation a4"
              placeholder="密码"
              v-model="password"
            >
            <span>{{ errors[0] }}</span>
          </validation-provider>
        </ValidationObserver>
        <p class="animation a5">
          <a href="/#/register">注册账号</a> |
          <a href="/#/forget">忘记密码</a>
        </p>
        <button
          class="animation a6"
          @click="checkForm"
        >
          登录
        </button>
      </div>
    </div>
    <div class="right" />
  </div>
  <!-- <div class="login">
    <h1>This is an login page</h1>
  </div>
  <div class="tab-div">
    <table>
      <tr>
        <td
          v-for="(value, key) in $route.meta.showActive"
          :key="key"
        >
          <a
            :href="value.url"
          >
            {{ value.name }}
          </a>
        </td>
      </tr>
    </table>
  </div> -->
</template>
<style lang="less" scoped src="../assets/css/login.less"></style>
<script lang="ts" scoped>
import { ValidationProvider, extend, ValidationObserver } from 'vee-validate'
import { required, min, max } from 'vee-validate/dist/rules'

extend('a-required', {
  ...required,
  message: '账号不能为空'
})
extend('required', required)
extend('r-pwd', {
  ...required,
  message: '密码不能为空'
})
extend('min', {
  message: (value, args) => {
    return '您输入的长度不能小于' + args.length
  },
  validate (value, args) {
    return value.length >= args.length
  },
  params: ['length']
})
extend('max', {
  message: (value, args) => {
    return '您输入的长度不能大于' + args.length
  },
  validate (value, args) {
    return value.length < args.length
  },
  params: ['length']
})
export default {
  name: 'LoginForm',
  data (): object {
    return {
      account: '',
      password: '',
      nickname: ''
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver
  },
  methods: {
    checkForm (): void {
      this.$refs.form.validate().then(res => {
        if (res) {
          console.log('aaaaaaaaaaa')
        } else {
          console.log('bbbbbbbbbb', res)
        }
      })
      console.log(111)
    }
  }
}
</script>
