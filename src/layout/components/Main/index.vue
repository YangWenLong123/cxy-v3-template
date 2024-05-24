<!--
 * @Author: along
 * @Description:
 * @Date: 2024-03-20 15:04:52
 * @LastEditors: along
 * @LastEditTime: 2024-05-21 17:19:44
 * @FilePath: /cxy-v3-template/src/layout/components/Main/index.vue
-->
<script lang="ts" setup>
const css = useCssModule('main');

onMounted(() => {});
</script>

<template>
	<div :class="[css.box]">
		<div :class="[css.boxMain]">
			<slot />
		</div>
	</div>
</template>

<style lang="scss" module="main" scoped>
@import url('./index.module.css');
</style>
