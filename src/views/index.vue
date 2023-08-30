<!--
 * @Author: along
 * @Description: 页面入口
 * @Date: 2023-08-30 13:30:26
 * @LastEditors: along
 * @LastEditTime: 2023-08-30 15:17:32
 * @FilePath: /cxy-v3-template/src/views/index.vue
-->
<template>
	<div>
		{{ a }}
	</div>
</template>

<script lang="ts" setup>
defineOptions({
	name: 'index',
});
const a = ref(0);
</script>

<style lang="scss" scoped></style>
