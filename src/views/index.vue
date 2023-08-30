<!--
 * @Author: along
 * @Description: 页面入口
 * @Date: 2023-08-30 13:30:26
 * @LastEditors: along
 * @LastEditTime: 2023-08-30 14:37:42
 * @FilePath: /vue3/src/views/index.vue
-->
<template>
	<div>
		{{ a }}
	</div>
</template>

<script lang="ts" setup>
const a = ref(0);
const state = reactive({
	b: 2,
});
</script>

<style lang="scss" scoped></style>
