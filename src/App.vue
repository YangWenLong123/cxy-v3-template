<!--
 * @Author: along
 * @Description:
 * @Date: 2023-08-30 13:22:11
 * @LastEditors: along
 * @LastEditTime: 2023-09-08 13:44:39
 * @FilePath: /cxy-v3-template/src/App.vue
-->
<script setup lang="ts">
import {useAppStore} from '~/stores';
const {app} = useAppStore();
import {RouterView} from 'vue-router';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import en from 'element-plus/dist/locale/en.mjs';

const locale = app?.language === 'zh' ? zhCn : en;
</script>

<template>
	<el-config-provider :locale="locale">
		<RouterView></RouterView>
	</el-config-provider>
</template>

<style lang="scss">
@import '~/assets/css/global.scss';
</style>
