<!--
 * @Author: along
 * @Description: 页面入口
 * @Date: 2023-08-30 13:30:26
 * @LastEditors: along
 * @LastEditTime: 2023-08-30 18:30:08
 * @FilePath: /cxy-v3-template/src/views/index.vue
-->
<template>
	<a-button type="primary" loading>Loading</a-button>
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
