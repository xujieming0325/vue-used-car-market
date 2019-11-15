<template>
	<div class="my-feedback">
		<Head></Head>
		<div class="my-feedback-box mains">

			<el-radio-group v-model="radio" class="my-feedback-box-1">
				<el-radio v-for="item in radioValu" :key="item" :label="item">{{item}}</el-radio>
			</el-radio-group>

			<div class="my-feedback-box-2">
				<mt-field placeholder="您的建议与反馈是我们前进的动力" type="textarea" rows="10" v-model="complaintBox"></mt-field>
			</div>
			<div class="my-feedback-box-3">
				<div>
					<mt-field  placeholder="请填写您的手机号码" maxlength="11" type="tel" v-model="phone"></mt-field>
				</div>
				<div>
					<mt-button type="primary" class="btn" style="height: 2.5rem;">提交</mt-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Head from "@/components/Head.vue"
	export default {
		name: "MyFeedback",
		components: {
			Head,
		},
		data() {
			return {
				radioValu: ['车况类投诉', '费用类投诉', '过户类投诉', '服务类投诉', '金融分期', '网页功能', '车辆信息错误', '停售改价', '其他'],
				radio: "",
				"complaintBox": '',
				phone: null
			}
		},
		methods: {

		}

	}
</script>

<style>
	.el-radio__input.is-checked .el-radio__inner {
		border-color: #02c386;
		background: #02c386;
	}

	.el-radio__input.is-checked+.el-radio__label {
		color: #02c386;
	}

	.my-feedback-box-1,
	.my-feedback-box-2,
	.my-feedback-box-3 {
		margin-top: 0.625rem;
	}

	.my-feedback-box-1 {
		width: 100%;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;

	}

	.mint-radio-input:checked+.mint-radio-core {
		background-color: #02c386;
		border-color: #02c386;
	}

	.my-feedback-box-1 .el-radio {
		margin: 0.3125rem 0 0 0;
	}
	.my-feedback-box-1 .el-radio:nth-child(odd){
		background-color: #f1f3f6;
	}
	.my-feedback-box-2 {
		height: 10rem;
	}
</style>
