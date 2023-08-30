<!--
 * @Author: along
 * @Description: 
 * @Date: 2023-08-30 13:22:11
 * @LastEditors: along
 * @LastEditTime: 2023-08-30 13:29:52
 * @FilePath: /vue3/src/App.vue
-->
<script setup lang="ts">
import {RouterView} from 'vue-router';
</script>

<template>
	<keep-alive>
		<RouterView />
	</keep-alive>
</template>

<style lang="scss" scoped></style>
