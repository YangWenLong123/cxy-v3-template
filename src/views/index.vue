<!--
 * @Author: along
 * @Description: 页面入口
 * @Date: 2023-08-30 13:30:26
 * @LastEditors: along
 * @LastEditTime: 2024-03-20 15:04:35
 * @FilePath: /cxy-v3-template/src/views/index.vue
-->
<script lang="ts" setup>
import {useAppStore} from '~/stores';
const {app} = useAppStore();
import {useI18n} from 'vue-i18n';
import api from '~/api';
import Layout from '~/layout/index.vue';

onMounted(() => {});
</script>

<template>
	<Layout />
</template>

<style lang="scss" scoped></style>
