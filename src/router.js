import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BuyCars from './views/BuyCars.vue'
import SellCar from './views/SellCar.vue'
import Information from './views/Information.vue'
import UserCenter from './views/UserCenter.vue'
import Login from './views/Login.vue'
import MyOrder from './views/MyOrder.vue'
import MyReservation from './views/MyReservation.vue'
import MyCookies from './views/MyCookies.vue'
import MyFavorite from './views/MyFavorite.vue'
import MyService from './views/MyService.vue'
import MyFeedback from './views/MyFeedback.vue'
import JiJiangKanChe from './second-level/JiJiangKanChe.vue'
import KanCheLiShi from './second-level/KanCheLiShi.vue'
import Brand from './views/Brand.vue'
Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'home',
			component: Home,
			meta: {
				showFooter: true,
				searchTypes: 1,
			}
		},
		{
			path: '/BuyCars',
			name: 'BuyCars',
			component: BuyCars,
			meta: {
				showFooter: true,
				searchTypes: 2,
			}

		},
		{
			path: '/SellCar',
			name: 'SellCar',
			component: SellCar,
			meta: {
				showFooter: true,
				searchName: "卖车估价",
				searchTypes: 3,
			}
		},
		{
			path: '/Information',
			name: 'Information',
			component: Information,
			meta: {
				showFooter: true,
				searchName: "消息中心",
				searchTypes: 4,
				emptyTypes: true
			}
		},
		{
			path: '/UserCenter',
			name: 'UserCenter',
			component: UserCenter,
			meta: {
				showFooter: true
			}
		},
		{
			path: '/Login',
			name: 'Login',
			component: Login,
			meta: {
				showFooter: false,
				searchName: "登录与注册",
				searchTypes: 5,
			}
		},
		{
			path: '/MyOrder',
			name: 'MyOrder',
			component: MyOrder,
			meta: {
				showFooter: false,
				searchName: "我的订单",
				searchTypes: 6,
				emptyTypes: false
			}

		},
		{
			path: '/MyReservation',
			name: 'MyReservation',
			component: MyReservation,
			redirect: "/JiJiangKanChe",
			children: [{
					path: '/JiJiangKanChe',
					name: 'JiJiangKanChe',
					component: JiJiangKanChe,
					meta: {
						showFooter: false,
						searchName: "我的预约",
						searchTypes: 7,
						emptyTypes: false
					}
				},
				{
					path: '/KanCheLiShi',
					name: 'KanCheLiShi',
					component: KanCheLiShi,
					meta: {
						showFooter: false,
						searchName: "我的预约",
						searchTypes: 7,
						emptyTypes: false
					}
				}
			]
		},
		{
			path: '/MyCookies',
			name: 'MyCookies',
			component: MyCookies,
			meta: {
				showFooter: false,
				searchName: "我的浏览",
				searchTypes: 8,
				emptyTypes: false
			}
		},
		{
			path: '/MyFavorite',
			name: 'MyFavorite',
			component: MyFavorite,
			meta: {
				showFooter: false,
				searchName: "我的收藏",
				searchTypes: 8,
				emptyTypes: false
			}
		},
		{
			path: '/MyService',
			name: 'MyService',
			component: MyService,
			meta: {
				showFooter: false,
				searchName: "我的客服",
				searchTypes: 9
			}
		},
		{
			path: '/MyFeedback',
			name: 'MyFeedback',
			component: MyFeedback,
			meta: {
				showFooter: false,
				searchName: "意见反馈",
				searchTypes: 10
			}
		},
		{
			path: '/Brand',
			name: 'Brand',
			component: Brand,
			meta: {
				showFooter: false,
				searchName: "选择品牌",
				searchTypes: 11
			}
		}
	]
})
