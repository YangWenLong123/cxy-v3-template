<!--
 * @Author: along
 * @Description: 布局
 * @Date: 2024-03-20 15:01:47
 * @LastEditors: along
 * @LastEditTime: 2024-03-20 15:16:56
 * @FilePath: /cxy-v3-template/src/layout/index.vue
-->

<script lang="ts" setup>
import MenuPage from './components/Menu/index.vue';
import HeadPage from './components/Head/index.vue';
import MainPage from './components/Main/index.vue';

const css = useCssModule('index');

onMounted(() => {});
</script>

<template>
	<div :class="[css.box]">
		<MenuPage />
		<div :class="[css.layout]">
			<HeadPage />
			<MainPage />
		</div>
	</div>
</template>

<style lang="scss" module="index" scoped>
@import url('./index.module.css');
</style>
