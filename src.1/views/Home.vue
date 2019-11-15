<template>
	<div class="home">
		<el-row>
			<AddBlog :huoqu="huoqu"></AddBlog>
			<ListBlog :contents="contents" :dele="dele"></ListBlog>
		</el-row>
	</div>
</template>

<script>
	// @ is an alias to /src
	import AddBlog from '@/components/AddBlog.vue'
	import ListBlog from '@/components/ListBlog.vue'
	export default {
		name: 'home',
		components: {
			AddBlog,
			ListBlog
		},
		data() {
			return {
				contents: [{
					name: '王小虎',
					content: '上海市普陀区金沙江路 1518 弄'
				}, {
					name: '王小虎',
					content: '上海市普陀区金沙江路 1517 弄'
				}]
			}
		},
		methods:{
			huoqu(body){
				this.contents.unshift(body);
			},
			dele(index){
				this.contents.splice(index,1);
			}
		}
		
	}
</script>

<style>

</style>
