<template>
	<div class="user-center">
		<div class="mains-t">

			<el-row class="mains-t-box">
				<el-col :span="18"><img src="../assets/HeadPortrait.png">
					<span style="font-size: 14px;">您好！18929777754</span></el-col>
				<el-col :span="6" style="margin-top: 34px;">
					<mt-button type="default">切换账号</mt-button>
				</el-col>
			</el-row>

		</div>
		<div class="mains-box">
			<el-row class="list">
				<el-col :span="8">
					<router-link to="/MyOrder"><img src="../assets/my-order.png" alt=""><span>我的订单</span></router-link>
				</el-col>
				<el-col :span="8">
					<router-link to="/MyReservation"><img src="../assets/my-reservation.png" alt=""><span>我的预约</span></router-link>
				</el-col>
				<el-col :span="8">
					<router-link to="/MyCookies"><img src="../assets/my-cookies.png" alt=""><span>我的浏览</span></router-link>
				</el-col>
			</el-row>
			<el-row class="list">
				<el-col :span="8">
					<router-link to="/MyFavorite"><img src="../assets/favorite.png" alt=""><span>我的收藏</span></router-link>
				</el-col>
				<el-col :span="8">
					<router-link to="/MyService"><img src="../assets/my-service.png" alt=""><span>我的客服</span></router-link>
				</el-col>
				<el-col :span="8">
					<router-link to="/MyFeedback"><img src="../assets/feedback.png" alt=""><span>意见反馈</span></router-link>
				</el-col>
			</el-row>
		</div>

	</div>
</template>

<script>
	// @ is an alias to /src

	export default {
		name: 'UserCenter',
		components: {

		},
		data() {
			return {
				LoggingStatus: false
			}
		},
		methods: {

		}

	}
</script>

<style>
	.user-center .mains-t {
		width: 100%;
		height: 100px;
		box-sizing: border-box;
		padding: 23px 1.25rem;
	}

	.user-center .mains-t img {
		width: 3.125rem;
		height: 3.125rem;
	}

	.user-center .mains-t-box div:nth-child(2) button {
		color: #9ea2a6;
		font-size: 12px;
		height: 1.3125rem;
		line-height: 1.3125rem;
		border-radius: 0.6875rem;
		text-align: center;
		width: 4.625rem;

	}

	.user-center .mains-box .list {
		font-size: 14px;
		text-align: center;
		border-bottom: 0px;
	}

	.user-center .mains-box .list div {
		display: flex;
		flex-direction: column;

	}

	.user-center span {
		color: #495056;
		line-height: 1.875rem;
	}

	.user-center .mains-box .list img {
		width: 30px;
		height: 30px;
		display: block;
		margin: 0 auto;
	}

	.user-center .mains-box {
		border-top: 6px solid #f5f7fa;
	}
</style>
