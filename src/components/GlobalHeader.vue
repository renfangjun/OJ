<template>
  <div id="globalHeader">
    <a-row class="grid-demo" style="margin-bottom: 16px" align="center">
      <a-col flex="150px">
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-bar">
            <img class="logo" src="../assets/oj-logo.svg" />
            <div class="title">鱼OJ</div>
          </div>
        </a-menu-item>
      </a-col>
      <a-col flex="auto">
        <a-menu
          mode="horizontal"
          :selected-keys="selectedKeys"
          @menu-item-click="doMenuClick"
        >
          <a-menu-item v-for="item in routes" :key="item.path"
            >{{ item.name }}
          </a-menu-item>
        </a-menu>
      </a-col>
      <a-col flex="50px">
        <a-avatar
          :style="{
            marginRight: '24px',
            verticalAlign: 'middle',
            backgroundColor: '#14a9f8',
          }"
        >
          {{ store.state.user?.loginUser?.userName ?? "未登录" }}
        </a-avatar>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { routes } from "@/router/routes";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

setTimeout(() => {
  store.dispatch("user/getLoginUser", { userName: "方俊", role: "admin" });
}, 3000);
console.log(store.state.user.loginUser.username);
//默认主页
const selectedKeys = ref(["/"]);
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});

const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
</script>

<style scoped>
.title-bar {
  margin-left: 20px;
  display: flex;
  align-items: center;
}

.title {
  margin-left: 19px;
  color: black;
}

.logo {
  height: 40px;
}
</style>
