<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh" :wrap="false">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer"
        ><a
          href="https://github.com/renfangjun?tab=repositories"
          target="_blank"
          >程序员方俊</a
        ></a-layout-footer
      >
    </a-layout>
  </div>
</template>

<style scoped>
#basicLayout {
}

#basicLayout .header {
  box-shadow: #eee 1px 1px 5px;
}

#basicLayout .content {
  background: linear-gradient(to right, #f6d365, #fda085);
  padding: 20px;
}

#basicLayout .footer {
  background: grey;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>
