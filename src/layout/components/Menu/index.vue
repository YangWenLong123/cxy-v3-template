<!--
 * @Author: along
 * @Description:
 * @Date: 2024-03-20 15:04:11
 * @LastEditors: along
 * @LastEditTime: 2024-03-27 17:55:23
 * @FilePath: /cxy-v3-template/src/layout/components/Menu/index.vue
-->
<script lang="ts" setup>
const css = useCssModule('menu');

const handleOpen = (key: string, keyPath: string[]) => {
	console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
	console.log(key, keyPath);
};

onMounted(() => {});
</script>

<template>
	<div :class="[css.box]">menu</div>
</template>

<style lang="scss" module="menu" scoped>
@import url('./index.module');
</style>
