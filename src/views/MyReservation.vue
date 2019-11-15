<template>
	<div class="my-reservation">
		<Head></Head>
		<el-row class="my-reservation-bottom" style="text-align: center; color: #303741;">
			<el-col :span="12">
				<router-link to="/JiJiangKanChe">即将看车</router-link>
			</el-col>
			<el-col :span="12">
				<router-link to="/KanCheLiShi">看车历史</router-link>
			</el-col>
		</el-row>
		<router-view></router-view>
	</div>
</template>

<script>
	import Head from "@/components/Head.vue"

	export default {
		name: "MyReservation",
		components: {
			Head
		},
		data() {
			return {
			}
		},
		methods: {

		}
	}
</script>

<style>
	.my-reservation{
	}
	.my-reservation-bottom .router-link-exact-active,.router-link-active{
		color: #38b44c;
	}
	.my-reservation-bottom a {
		line-height: 1.25rem;
		font-size: 0.8125rem;
	}
</style>
