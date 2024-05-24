<!--
 * @Author: along
 * @Description:
 * @Date: 2024-03-20 15:05:03
 * @LastEditors: along
 * @LastEditTime: 2024-05-21 17:32:18
 * @FilePath: /cxy-v3-template/src/layout/components/Head/index.vue
-->
<script lang="ts" setup>
import {useAppStore} from '~/stores';
import {useRoute} from 'vue-router';

const css = useCssModule('head');
const {toggleCollapsed} = useAppStore();
const {collapsed} = toRefs(useAppStore());
const fullscreen = ref<boolean>(false);

const route = useRoute();

const toggleCollapsedMethods = () => {
	toggleCollapsed();
};

const onScrenn = () => {
	let element = document.documentElement;
	if (fullscreen.value) {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
	} else {
		if (element.requestFullscreen) {
			element.requestFullscreen();
		} else if (element.webkitRequestFullScreen) {
			element.webkitRequestFullScreen();
		} else if (element.mozRequestFullScreen) {
			element.mozRequestFullScreen();
		} else if (element.msRequestFullscreen) {
			element.msRequestFullscreen();
		}
	}
	fullscreen.value = !fullscreen.value;
};

const pageName = computed(() => route.meta.title);

onMounted(() => {});
</script>

<template>
	<div :class="[css.box]">
		<div :class="[css.head]">
			<div :class="[css.flex]">
				<i
					:class="[css.icon]"
					class="iconfont icon-zhedie1"
					v-if="!collapsed"
					@click="toggleCollapsedMethods"
				></i>
				<i
					:class="[css.icon]"
					class="iconfont icon-zhedie2"
					v-else
					@click="toggleCollapsedMethods"
				></i>

				<div :class="[css.title]">{{ pageName }}</div>
			</div>

			<div :class="[css.flex]">
				<i
					class="iconfont icon-quanpingxianshi"
					:class="[css.size18]"
					v-if="!fullscreen"
					@click="onScrenn()"
				></i>
				<i
					class="iconfont icon-quanpingsuoxiao"
					:class="[css.size18]"
					v-else
					@click="onScrenn()"
				></i>
				<i
					class="iconfont icon-xiaoxizhongxin"
					:class="[css.notice, css.size22]"
				></i>
				<img src="@/assets/images/avatar.webp" :class="[css.avatar]" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" module="head" scoped>
@import url('./index.module.css');
</style>
