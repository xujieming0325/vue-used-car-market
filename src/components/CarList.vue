<template>
	<div class="lists">
		<!-- 收起 -->
		<div v-if="unfold==1">
			<el-row class="list" v-for="(item,index) in bodys">
				<el-col :span="9">
					<img :src="item.imgurl.smurl" alt="">
				</el-col>
				<el-col :span="14" class="list-r">
					<span class="car-name">{{item.name}}&nbsp;{{item.versions}}</span>
					<span class="car-xx">{{item.DrivingYears}}年/{{item.ActualServiceLife|PriceFormat("万公里")}}</span>
					<div class="list-b">
						<span>{{item.price|PriceFormat('万')}}</span>
						<i class="el-icon-star-on XingXing"></i>
					</div>
				</el-col>
			</el-row>
		</div>
		<!-- 展开 -->
		<div v-else>
			<el-row class="cars">
				<el-col class="car" :span="24" v-for="(item, index1) in bodys">
					<el-card :body-style="{ padding: '0px' }" class="car-box">
						<mt-swipe :auto="0" class="lunbotu">
							<mt-swipe-item v-for="(item2, index2) in item.imgurl.bigurl"><img :src="item2" style="width: 100%;" class="image"></mt-swipe-item>
						</mt-swipe>

						<div class="list-r" style="padding: 14px;">
							<span class="car-name">{{item.name}}&nbsp;{{item.versions}}</span>
							<span class="car-xx">{{item.DrivingYears}}年/{{item.ActualServiceLife|PriceFormat("万公里")}}</span>
							<div class="bottom clearfix car-box-b">
								<span class="car-box-JiaGe">{{item.price|PriceFormat('万')}}</span>
								<i class="el-icon-star-on XingXing"></i>
							</div>
						</div>
					</el-card>
				</el-col>
			</el-row>
		</div>

	</div>
</template>

<script>
	export default {
		name: "CarList",
		comments: {

		},
		data() {
			return {
				
			}
		},
		props: {
			unfold: {
				type: Number,
				default: 1
			},
			bodys:{
				type:Array,

			}
		},
		methods: {
			
		},
		mounted() {

			// if(this.$route.params.CarTypes!=undefined){
			// 	this.DisplayType();
			// }

		}


	}
</script>

<style>
	.lists {
		padding: 0 1.25rem;
		box-sizing: border-box;
	}

	.list {
		border-bottom: 1px solid #eff2f6;
		padding: 15px 0;
		box-sizing: border-box;
	}

	.list img {
		width: 100%;
		border-radius: 4px;
		overflow: hidden;
	}

	.list-r {
		margin-left: 0.75rem;
		display: flex;
		flex-direction: column;
	}

	.car-name {
		font-size: 16px;
		line-height: 16px;
		font-weight: 400;
		color: #252825;
	}

	.car-xx {
		font-size: 12px;
		line-height: 30px;
		color: #8f96a0;
		font-weight: 300;
	}

	.list-b {
		display: flex;
		justify-content: space-between;
	}

	.list-r .list-b span {
		font-size: 16px;
		line-height: 16px;
		color: #f56539;
	}

	.XingXing {
		color: #bec5cf;
	}

	.lists .car:nth-child(odd) {
		margin-right: 0;
	}

	.lunbotu {
		height: 13.875rem;
	}

	/* 123 */
	.cars {
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		box-sizing: border-box;
		margin-bottom: 0.5rem;
	}

	.car {
		margin-bottom: 0.5rem;
		box-sizing: border-box;
	}

	.car:nth-child(odd) {
		margin-right: 0.625rem;
	}

	.car-box {
		position: relative;
	}

	.car-box-name {
		font-size: 1rem;
		color: #303741;
		font-weight: 500;
	}

	.car-box-GuanZhu {
		position: absolute;
		display: inline-block;
		font-size: 0.875rem;
		z-index: 100;
		top: 5rem;
		right: 0.8125rem;
		font-size: .1rem;
		color: #fff;
	}

	.car-box-xh {
		font-size: 0.875rem;
		color: #303741;
		font-weight: 400;
	}

	.car-box-b {
		display: flex;
		justify-content: space-between;
		margin-top: 0.4375rem;
	}

	.car-box-JiaGe {
		color: #ff7147;
	}

	.car-box-b button {
		color: #22ac38;
		background: rgba(34, 172, 56, .1);
		border-radius: .02rem;
		border: 0;
		font-size: 0.7rem;
		padding: 0.257rem;
	}
</style>
