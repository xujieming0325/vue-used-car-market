<template>
	<div class="my-service">
		<Head></Head>

		<div class="my-service-top">
			<span>自助服务</span>
			<div class="my-service-top-serve">
				<div><img src="../assets/iPhone.png" alt="">
					<span>屏蔽打扰</span></div>
				<div><img src="../assets/invoice.png" alt="">
					<span>开发票</span></div>
			</div>

		</div>
		<div class="my-service-botoom">
			<span>常见问题</span>
			<div class="my-service-botoom-scroll">
				<mt-navbar v-model="selected">
					<mt-tab-item v-for="(n,ind) in changJianWenTi.tabrTitle" :id="ind+1+''">{{n}}</mt-tab-item>
				</mt-navbar>
			</div>
			<!-- tab-container -->
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<mt-cell v-for="n in changJianWenTi.tabrValue1" :title="n" />
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<mt-cell v-for="n in changJianWenTi.tabrValue2" :title="n" />
				</mt-tab-container-item>
				<mt-tab-container-item id="3">
					<mt-cell v-for="n in changJianWenTi.tabrValue3" :title="n" />
				</mt-tab-container-item>
				<mt-tab-container-item id="4">
					<mt-cell v-for="n in changJianWenTi.tabrValue4" :title="n" />
				</mt-tab-container-item>
				<mt-tab-container-item id="5">
					<mt-cell v-for="n in changJianWenTi.tabrValue5" :title="n" />
				</mt-tab-container-item>
				<mt-tab-container-item id="6">
					<mt-cell v-for="n in changJianWenTi.tabrValue6" :title="n" />
				</mt-tab-container-item>
				<mt-tab-container-item id="7">
					<mt-cell v-for="n in changJianWenTi.tabrValue7" :title="n" />
				</mt-tab-container-item>
				<mt-tab-container-item id="8">
					<mt-cell v-for="n in changJianWenTi.tabrValue8" :title="n" />
				</mt-tab-container-item>
				<mt-tab-container-item id="9">
					<mt-cell v-for="n in changJianWenTi.tabrValue9" :title="n" />
				</mt-tab-container-item>

			</mt-tab-container>
			<div class="my-service-botoom-kefu">
				<mt-button type="primary" class="btn" style="height: 2.5rem;">电话客服</mt-button>
				<mt-button type="primary" class="btn" style="height: 2.5rem;">在线客服</mt-button>
			</div>
		</div>

	</div>
</template>

<script>
	import Head from "@/components/Head.vue"
	export default {
		name: "MyService",
		components: {
			Head,
		},
		data() {
			return {
				selected: "1",
				changJianWenTi: {
					tabrTitle: ["猜你想问", "卖车流程", "车辆过户", "售后服务", "分期买车", "卖车流程", "上门评估", "车辆变更", "保卖车源"],
					tabrValue1: ["价格还能优惠吗", "有过户费吗", "车主为什么卖车", "如何联系车主", "看车收费吗"],
					tabrValue2: ["在哪看车", "如何买车", "看车需要哪些材料", "有服务费吗", "为什么要交保证金"],
					tabrValue3: ["有过户费吗", "提供代理过路费吗", "如何过户", "过户需要哪些材料", "过户还没办完吗"],
					tabrValue4: ["售后电话", "如何办理退款", "如何退车", "如何申请售后保障服务", "售后保障有什么条件"],
					tabrValue5: ["分期利息是多少", "要装GPS吗", "GPS费用是多少", "如何分期买车", "分期需要什么材料"],
					tabrValue6: ["如何卖车", "何时拿到卖车车款", "卖车有什么费用", "如何查看卖车进度", "多久能卖出去"],
					tabrValue7: ["我的车能卖多少钱", "如何进行评估改约"],
					tabrValue8: ["如何修改车价格", "如何修改车信息"],
					tabrValue9: ["如何保卖", "什么是保卖服务", "保卖有什么条件", "严选直卖店地址", "什么是严选车"]
				}

			}
		},
		methods: {

		}

	}
</script>

<style>
	.my-service-top-serve {
		width: 100%;
		display: flex;
		margin-top: 0.625rem;

	}

	.my-service-top {
		padding: 0.9375rem 1.25rem;
		box-sizing: border-box;
		border-bottom: 0.375rem solid #f5f7fa;
	}

	.my-service-botoom {
		padding: 0.9375rem 1.25rem;
		box-sizing: border-box;
	}

	.my-service-top-serve div img {
		width: 15%;
	}

	.my-service-top-serve div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.my-service-botoom-scroll {
		overflow-x: scroll;
	}

	.my-service-botoom-scroll .mint-navbar {
		overflow-x: scroll;
		overflow-y: hidden;
		width: 200%;
	}
	.my-service-botoom .mint-tab-container-item{
		min-height: 15rem;
	}
	.my-service-top-serve div span,.my-service-botoom .mint-cell-text,.my-service-botoom .mint-tab-item-label{
		font-size: 0.8125rem;
	}

	.my-service-botoom-kefu {
		margin-top: 1.25rem;
		display: flex;
		justify-content: space-evenly;
	}

	.my-service-botoom-kefu button {
		width: 30%;
	}
</style>
