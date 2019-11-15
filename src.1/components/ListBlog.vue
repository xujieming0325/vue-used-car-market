<template>
	<div>
		<el-col :span="16">
			<div class="grid-content bg-purple-light">
				评论回复：
				<div >
					<ul>
						<li v-for="(item,index) in contents" :key="index">
							<span>
								{{item.name}}说：
							</span>
							<span>
								{{item.content}}
							</span>
							<el-button type="primary" @click="deles(index)">删除</el-button>
						</li>
					</ul>
					<p v-if="contents.length===0">暂无评论</p>
				</div>
			</div>
		</el-col>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			contents:{
				type:Array,
				required: true
			} ,
			dele:Function
			
		},
		methods:{
			deles(index){
			
			this.dele(index);
			}
		}
	}
</script>

<style scoped="scoped">
	li {
		list-style: none;
		margin: 10px 0;
	}
</style>
