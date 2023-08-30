<!--
 * @Author: along
 * @Description: 页面入口
 * @Date: 2023-08-30 13:30:26
 * @LastEditors: along
 * @LastEditTime: 2023-08-30 17:26:30
 * @FilePath: /cxy-v3-template/src/views/index.vue
-->
<template>
	<div>
		{{ a }}13
		<div>23</div>
		<button @click="save()">存储</button>
	</div>

	<a-button type="primary" loading>Loading</a-button>

	<a-input v-model:value="value" placeholder="Basic usage" />
</template>

<script lang="ts" setup>
import {useLoginStore} from '~/stores';

const {userInfo} = useLoginStore();

const a = ref(0);
const value = ref('');

const save = () => {
	userInfo.login = true;
};

onMounted(() => {
	console.log('env', __APP_ENV__);
});
</script>

<style lang="scss" scoped></style>
