<template>
	<div class="lists">
	<el-row class="cars">
		<el-col class="car" :span="11" v-for="(item, index) in bodys" :key="index">
			<el-card :body-style="{ padding: '0px' }" class="car-box">
				<img :src="item.imgurl.smurl" style="width: 100%;" class="image">
				<span class="car-box-GuanZhu">{{item.subscription}}人关注</span>
				<div style="padding: 14px;">
					<span class="car-box-name">{{item.name}}</span>
					<p class="car-box-xh">{{item.versions}}</p>
					<div class="bottom clearfix car-box-b">
						<span class="car-box-JiaGe">{{item.price|PriceFormat('万')}}</span>
						<button>找相似</button>
					</div>
				</div>
			</el-card>
		</el-col>
	</el-row>
	</div>
</template>

<script>
	export default{
		name:"CarListTJ",
		data(){
			return{
				
			}
		},
		props:["bodys"]
			
		
	}
</script>

<style>
</style>
