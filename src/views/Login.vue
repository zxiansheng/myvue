<template>
  <div>
    <div class="login">
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
    </div>
  </div>
</template>
<style scoped lang="less">
table {
  display:inline-block
}
.tab-div {
  text-align:center
}
</style>
