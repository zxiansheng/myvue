<template>
  <div class="container">
    <div class="left">
      <div class="header">
        <h2 class="animation a1">
          欢迎回来
        </h2>
        <h4 class="animation a2">
          使用电邮及密码登入你的帐户
        </h4>
      </div>
      <div class="form">
        <input
          type="email"
          class="form-field animation a3"
          placeholder="邮箱账号"
        >
        <input
          type="password"
          class="form-field animation a4"
          placeholder="密码"
        >
        <p class="animation a5">
          <a href="#">忘记密码</a>
        </p>
        <button class="animation a6">
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
