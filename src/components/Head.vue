<template>
	<div class="yinying">
		<el-row class="head" :class="scrollTag?'dingwei':''" v-if="searchTypes==1">
			<el-col :span="5" class="duiqi duiqitop">
				东莞 <i class="el-icon-arrow-down"></i>
			</el-col>
			<el-col :span="16" class="duiqi">
				<div class="serbar"><i class="el-icon-search"></i> 搜索您要的车
				</div>
			</el-col>
			<el-col :span="2" class="duiqi duiqitop">
				<router-link to="/Userinfo" class="el-icon-user-solid icon">
				</router-link>
			</el-col>
		</el-row>
		<el-row class="head2" v-else-if="searchTypes==2">
			<el-col :span="5" class="duiqi duiqitop">
				东莞 <i class="el-icon-arrow-down"></i>
			</el-col>
			<el-col :span="15" class="duiqi">
				<div class="serbar"><i class="el-icon-search"></i> 搜索您要的车
				</div>
			</el-col>
			<el-col :span="2" class="duiqi duiqitop">
				<router-link to="/MyFavorite" class="shouchang">
				</router-link>
			</el-col>
			<el-col :span="2" class="duiqi duiqitop">
				<i class="zhangkai" @click="OnOff"></i>
			</el-col>
		</el-row>
		<div v-else-if="searchTypes==3">
			<mt-header :title="searchName" class="mint-header-color">
			</mt-header>

		</div>
		<div v-else-if="searchTypes==4">
			<mt-header :title="searchName" class="mint-header-color">
				<mt-button slot="right">设置</mt-button>
			</mt-header>
		</div>
		<div v-else-if="searchTypes==5">
			<mt-header :title="searchName" class="mint-header-color">
				<router-link to="/" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>
		<div v-else-if="searchTypes==6">
			<mt-header :title="searchName" class="mint-header-color">
				<router-link to="/UserCenter" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>
		<div v-else-if="searchTypes==7">
			<mt-header :title="searchName" class="mint-header-color">
				<router-link to="/UserCenter" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>
		<div v-else-if="searchTypes==8">
			<mt-header :title="searchName" class="mint-header-color">
				<router-link to="/UserCenter" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
				<mt-button slot="right">编辑</mt-button>
			</mt-header>
		</div>
		<div v-else-if="searchTypes==9">
			<mt-header :title="searchName" class="mint-header-color">
				<router-link to="/UserCenter" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
				<mt-button slot="right">意见反馈</mt-button>
			</mt-header>
		</div>
		<div v-else-if="searchTypes==10">
			<mt-header :title="searchName" class="mint-header-color">
				<router-link to="/UserCenter" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
				<mt-button slot="right">在线客服</mt-button>
			</mt-header>
		</div>
		<div v-else-if="searchTypes==11">
			<mt-header :title="searchName" class="mint-header-color">
				<router-link to="/BuyCars" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>


	</div>
	</div>
</template>

<script>
	export default {
		name: 'Head',
		data() {
			return {
				scrollTag: null,
				searchTypes: null,
				searchName:""
			}
		},
		methods: {
			OnOff() {
				this.$emit("chufa")

			},

		},
		mounted() {
			window.addEventListener('scroll', () => {
					let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
					if (top > 50) {
						this.scrollTag = true;
					} else {
						this.scrollTag = false
					}

				});
		this.searchTypes=this.$route.meta.searchTypes;
		this.searchName=this.$route.meta.searchName;
		}
	}
</script>

<style>
	/* 阴影 */
	.yinying {
		box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
	}

	/* 首页头部搜索 */
	.head {
		width: 100%;
		height: 2.5rem;
		padding-top: 0.4375rem;
		box-sizing: border-box;
		position: fixed;
		z-index: 99;
	}

	.dingwei {
		position: fixed;
		top: 0;
		background-color: #fff;
		box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
	}

	.dingwei .serbar {
		background: #eff2f6;
	}

	.duiqi {
		flex: 1;
		margin: 0 auto;
		text-align: center;
		font-size: 0.875rem;
	}

	.duiqitop {
		margin-top: 0.3125rem;
	}

	.serbar {
		height: 1.875rem;
		font-size: 0.89rem;
		color: #bec5cf;
		text-align: center;
		line-height: 1.875rem;
		background-color: #fff;
		border-radius: 1.15rem;
	}

	.head .icon {
		font-size: 1.375rem;
		color: #5f6670;
		text-decoration: none;
	}

	/* 买车头部搜索 */
	.head2 {
		width: 100%;
		height: 2.75rem;
		padding-top: 0.4375rem;
		box-sizing: border-box;
	}

	.shouchang {
		background-image: url(../assets/favorite.png);
		display: block;
		width: 1.375rem;
		height: 1.375rem;
		background-size: 100%;
		background-repeat: no-repeat;
		margin-left: 0.3125rem;
	}

	.zhangkai {
		background-image: url(../assets/pack-up.png);
		display: block;
		background-repeat: no-repeat;
		width: 1.125rem;
		height: 1.125rem;
		background-size: 100%;
		margin-top: 0.125rem;
	}

	.head2 .serbar {
		background-color: #eff2f6;

	}

	.mint-header-color {
		background-color: #fff;
		color: #303741;
		font-size: 1rem;
	}
</style>
