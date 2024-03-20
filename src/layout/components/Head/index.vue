<!--
 * @Author: along
 * @Description:
 * @Date: 2024-03-20 15:05:03
 * @LastEditors: along
 * @LastEditTime: 2024-03-20 15:12:56
 * @FilePath: /cxy-v3-template/src/layout/components/Head/index.vue
-->
<script lang="ts" setup>
const css = useCssModule('head');

onMounted(() => {});
</script>

<template>
	<div :class="[css.box]">head</div>
</template>

<style lang="scss" module="head" scoped>
@import url('./index.module.css');
</style>
