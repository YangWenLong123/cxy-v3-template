<!--
 * @Author: along
 * @Description: 页面入口
 * @Date: 2023-08-30 13:30:26
 * @LastEditors: along
 * @LastEditTime: 2023-09-08 13:37:05
 * @FilePath: /cxy-v3-template/src/views/index.vue
-->
<template>
	<span>{{ $t('common.home') }}</span>

	<el-button type="primary" @click="onChangeLanguage('en')">切换英文</el-button>
	<el-button type="primary" @click="onChangeLanguage('zh')">切换中文</el-button>
</template>

<script lang="ts" setup>
import {useAppStore} from '~/stores';
const {app} = useAppStore();
import {useI18n} from 'vue-i18n';
import api from '~/api';

const i18 = useI18n();

const onChangeLanguage = (language: string) => {
	i18.locale.value = language;

	app.language = language;
	ElMessage.success('更新完成');
};

onMounted(() => {
	api.login({account: '123'});
});
</script>

<style lang="scss" scoped></style>
