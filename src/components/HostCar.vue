<template>
	<el-row :gutter="20" class="hosttext">
		<el-col :span="6" v-for="item in hostCar">
			<div class="grid-content bg-purple logopb" @click="getPtah($router,item.urlId)">
				<img :src="pjurl(item.urlId)" />
				{{item.name}}
			</div>
		</el-col>
	</el-row>
</template>

<script>
	export default {
		name: "HostCar",
		data() {
			return {
				hostCar: [{
					name: "大众",
					urlId: '1207'
				}, {
					name: "日产",
					urlId: '1202'
				}, {
					name: "本田",
					urlId: '1196'
				}, {
					name: "丰田",
					urlId: '1195'
				}, {
					name: "奔驰",
					urlId: '1197'
				}, {
					name: "宝马",
					urlId: '1198'
				}, {
					name: "奥迪",
					urlId: '1199'
				}, {
					name: "雪佛兰",
					urlId: '1307'
				}, {
					name: "现代",
					urlId: '1208'
				}, {
					name: "福特",
					urlId: '1205'
				}, {
					name: "别克",
					urlId: '1206'
				}, {
					name: "保时捷",
					urlId: '1224'
				}],
			}
		},
		methods: {

		},

	}
</script>

<style>
	.logopb {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 5px 0 2px 0;
	}

	.logopb img {
		width: 2.125rem;
		height: 2.125rem;
	}
</style>
