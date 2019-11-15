<template>
	<div>
		<Head></Head>
		<img src="https://image1.guazistatic.com/qn190708145756a53adb9837b3e25e7d2551c9e3beeae0.png" alt="">
		<div class="mains">
			<ul>
				<li class="mains-li"><span>卖车地点</span>
					<div><span>东莞</span><i class="el-icon-arrow-right"></i></div>
				</li>
				<li><span>您的车型</span>
					<div><span class="hs">请选择</span><i class="el-icon-arrow-right"></i></div>
				</li>
				<li><span>上牌时间</span>
					<div><span class="hs">请选择</span><i class="el-icon-arrow-right"></i></div>
				</li>
				<li><span>卖车意向</span>
					<div><span class="hs">请选择</span><i class="el-icon-arrow-right"></i></div>
				</li>
				<li><span>行驶里程</span>
					<div><input type="text" style="text-align: right;" maxlength="2" placeholder="请输入"></div>
				</li>
				<li><span>接受手机</span>
					<div><input type="text" style="text-align: right;" maxlength="11" placeholder="请输入"></div>
				</li>
			</ul>
			<div class="mains-b">
				<span>你的爱车每天约贬值0.03%</span>
				<mt-button type="primary" class="btn">开始估价</mt-button>
			</div>
		</div>
	</div>

</template>

<script>
	// @ is an alias to /src
	import Head from "@/components/Head.vue"
		export default {
			name: 'Information',
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

	.btn {
		background: #38b44c;
		font-size: 1rem;
		height: 2.8125rem;
		width: 100%;
		border-radius: 0.125rem;
	}

	.mains {
		padding: 0 1.25rem;
	}

	.mains li {
		align-items: center;
		display: flex;
		justify-content: space-between;
		line-height: 3.5rem;
		font-size: 1rem;
		color: #495056;
		border-bottom: 0.03125rem solid #edeff3;
	}

	.mains li i {
		color: #cacdd0;

	}

	.mains-b {
		margin-top: 3.125rem;
	}

	.mains-b span {
		height: 2.25rem;
		line-height: 2.25rem;
		color: #303741;
		font-weight: 300;
		font-size: 0.8125rem;
		width: 100%;
		text-align: center;
		display: block;
	}
</style>
