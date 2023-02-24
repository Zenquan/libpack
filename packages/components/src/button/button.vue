<template>
  <button class="btn">测试按钮</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'lib-button',
});
</script>
<style scoped lang="scss">
.btn {
  background: red;
  color: #fff;
}
</style>
