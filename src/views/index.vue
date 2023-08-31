<!--
 * @Author: along
 * @Description: 页面入口
 * @Date: 2023-08-30 13:30:26
 * @LastEditors: along
 * @LastEditTime: 2023-08-31 09:20:10
 * @FilePath: /cxy-v3-template/src/views/index.vue
-->
<template>
	<el-button type="primary">Primary</el-button>
	<el-button type="success">Success</el-button>
	<el-button type="info">Info</el-button>
	<el-button type="warning">Warning</el-button>
	<el-button type="danger">Danger</el-button>
</template>

<script lang="ts" setup>
// import {useLoginStore} from '~/stores';
// const {userInfo} = useLoginStore();
import api from '~/api';

onMounted(() => {
	api.login({account: '123'});
});
</script>

<style lang="scss" scoped></style>
