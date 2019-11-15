<template>
	<div>
		<el-col :span="8">
			<div class="grid-content bg-purple">
				<label>用户名：
					<el-input placeholder="请输入内容" v-model="name" clearable>
					</el-input></label>
				<label>评论内容：
					<el-input placeholder="请输入内容" type="textarea" v-model="content" clearable>
					</el-input></label>
				<el-button type="primary" @click="tijiao">提交</el-button>
			</div>
		</el-col>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: "许洁铭",
				content: "zxclkasd"
			}
		},
		props:{
			huoqu:Function
		},
		methods: {
			tijiao() {
				var name = this.name.trim();
				var content = this.content.trim();
				if (name == "" || content == "") {
					alert("内容不能为空！")
					return
				}
				const body = {
					name,
					content
				}
				this.huoqu(body)
			}
		}
	}
</script>

<style>

</style>
