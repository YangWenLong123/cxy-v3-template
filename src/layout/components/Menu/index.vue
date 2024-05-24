<!--
 * @Author: along
 * @Description: 菜单
 * @Date: 2024-03-20 15:04:11
 * @LastEditors: along
 * @LastEditTime: 2024-05-21 14:01:32
 * @FilePath: /cxy-v3-template/src/layout/components/Menu/index.vue
-->
<script lang="ts" setup>
import router from '@/router';
import {useAppStore} from '~/stores';

const css = useCssModule('menu');

const {collapsed} = toRefs(useAppStore());

const onSelectMenu = (key: string, keyPath: string[]) => {
	console.log(key, keyPath);

	router.push({path: key});
};

onMounted(() => {});
</script>

<template>
	<div :class="[css.box]" class="MenuComponents">
		<img
			src="@/assets/images/logo.png"
			:class="[css.logo]"
			:style="{width: !collapsed ? '50px' : '30px'}"
		/>

		<el-menu
			:class="[css.menu]"
			background-color="#282C34"
			text-color="#ffffff"
			:default-active="'/home'"
			:collapsed="collapsed"
			@select="onSelectMenu"
			:style="{width: !collapsed ? '210px' : '60px'}"
		>
			<el-menu-item index="/home">
				<i class="iconfont icon-shouye"></i>
				<span :class="[css.mt]" v-if="!collapsed">首页</span>
			</el-menu-item>
			<el-menu-item index="/condition">
				<i class="iconfont icon-ziyuan"></i>
				<span :class="[css.mt]" v-if="!collapsed">条件分支</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<style lang="scss" module="menu" scoped>
@import url('./index.module');
</style>

<style lang="scss">
.MenuComponents {
	.el-menu {
		border-right: none;
		transition: width 0.2s;
		& > .is-active {
			background-color: #4e88f3;
			color: #fff;
		}

		& > .el-menu-item {
			height: 48px !important;
			border-radius: 4px;
		}
	}
}
</style>
