<template>
  <div class="container">
    <div class="left">
      <div class="header">
        <h2 class="animation a1">
          欢迎回来
        </h2>
      </div>
      <div class="form">
        <input
          class="form-field animation a3"
          placeholder="登录账号"
          v-model="account"
          name="account"
        >
        <input
          type="password"
          class="form-field animation a4"
          placeholder="密码"
          v-model="password"
        >
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
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li
              v-for="(error,key) in errors"
              :key="key"
            >
              {{ error }}
            </li>
          </ul>
        </p>
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
import Vue from 'vue'
export default {
  name: 'LoginForm',
  data (): object {
    return {
      account: '',
      password: '',
      errors: {}
    }
  },
  methods: {
    checkForm (): void {
      Vue.set(this.$data, 'account', '222')
      console.log(111)
    }
  }
}
</script>
