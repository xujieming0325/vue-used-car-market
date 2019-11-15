<template>
	<div class="box">
		<Head @chufa="OnOff"></Head>
		<el-row class="ShaiXuan">
			<el-col :span="6">
				<div @click="Sizer.IntelligentSorting=!Sizer.IntelligentSorting"><span>智能排序</span>&ensp;<i class="el-icon-caret-bottom icon"></i></div>
			</el-col>
			<mt-popup v-model="Sizer.IntelligentSorting" class="paixu" position="bottom">
				<ul>
					<li v-for="item in PX" :key="item.PXID"><a @click.prevent="PaiXu(item.PXID)" href="">{{item.name}}</a></li>
				</ul>
			</mt-popup>
			<el-col :span="6">
				<div>
					<router-link to="/Brand"><span>品牌</span>&ensp;<i class="el-icon-caret-bottom icon"></i></router-link>
				</div>
			</el-col>
			<el-col :span="6">
				<div @click="Sizer.isPrice=!Sizer.isPrice"><span>价格</span>&ensp;<i class="el-icon-caret-bottom icon"></i></div>
			</el-col>
			<mt-popup v-model="Sizer.isPrice" class="paixu3" position="bottom">
				<el-row :gutter="20">
					<el-col :span="8">
						<div class="grid-content bg-purple" @click="pp='p1'">无限</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content bg-purple" @click="pp='p2'">3万以下</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content bg-purple" @click="pp='p3'">3-5万</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content bg-purple" @click="pp='p4'">5-7万</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content bg-purple" @click="pp='p5'">7-9万</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content bg-purple" @click="pp='p6'">9-12万</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content bg-purple" @click="pp='p7'">12-16万</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content bg-purple" @click="pp='p8'">16-20万</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content bg-purple" @click="pp='p9'">20万以上</div>
					</el-col>
				</el-row>
			</mt-popup>
			<el-col :span="6">
				<div @click=""><span>筛选</span>&ensp;<i class="el-icon-caret-bottom icon"></i></div>
			</el-col>
		</el-row>
		<CarList :unfold="unfold" :bodys="bodys"></CarList>
		<mt-popup v-model="popupVisible" :modal="false" class="tishi" position="top">
			<input v-model="tishiyu" />
		</mt-popup>

	</div>
</template>

<script>
	// @ is an alias to /src
	import Head from '@/components/Head.vue'
	import CarList from '@/components/CarList.vue'
	export default {
		name: 'BuyCars',
		components: {
			Head,
			CarList
		},
		data() {
			return {
				Sizer: {
					IntelligentSorting: false,
					isPrice: false
				},
				bodys: undefined,
				unfold: 1,
				pp: "",
				popupVisible: false,
				tishiyu: "暂无相关车型",
				PXstatus: "PX1",
				PX: [{
						name: "智能排序",
						PXID: "PX1"
					}, {
						name: "最新上架",
						PXID: "PX2"
					},
					{
						name: "价格最低",
						PXID: "PX3"
					},
					{
						name: "价格最高",
						PXID: "PX4"
					},
					{
						name: "车龄最短",
						PXID: "PX5"
					},
					{
						name: "里程最少",
						PXID: "PX6"
					}
				],
				body: [{
						id: 1,
						// 名字
						name: '丰田花冠',
						//车的类ID
						urlId: '1195',
						time: 1547129098,
						// 车型号
						versions: '2011款 1.6L 自动经典版',
						// 车驾龄
						DrivingYears: "2014",
						// 行驶里程
						ActualServiceLife: "52000",
						// 图片
						imgurl: {
							smurl: 'https://image1.guazistatic.com/qn19100813285541c031687cc125ba261e0239ce411d99.jpg?imageView2/1/w/240/h/160/q/99',
							bigurl: [
								'https://image1.guazistatic.com/qn190920200635a1c737ee87e37d32b8fdde2ea759d418.jpg?imageView2/1/w/750/h/500/q/88',
								"https://image1.guazistatic.com/qn190920200635c18c8dd4399fd53afc3b2dc733ec6385.jpg?imageView2/1/w/750/h/500/q/88",
								'https://image1.guazistatic.com/qn190920200635c18c8dd4399fd53afc3b2dc733ec6385.jpg?imageView2/1/w/750/h/500/q/88'
							]
						},
						// 价格
						price: '45000',
						// 关注数
						subscription: 8
					}, {
						id: 2,
						name: '日产阳光',
						urlId: '1202',
						time: 1550239498,
						versions: '2011款 1.5XE CVT舒适版',
						DrivingYears: "2015",
						ActualServiceLife: "2000",
						imgurl: {
							smurl: 'https://car-image.guazistatic.com/evaluates-bucket/evacbdd4b05-51fd-4454-a2f8-4b3bd885c498.jpg?width=240&height=160',
							bigurl: [
								'https://image.guazistatic.com/gz01191010/05/53/d69739fcae621eae1f6a22e924bfc611.jpg@base@tag=imgScale&w=750&h=500&c=1&m=2&q=88',
								"https://image.guazistatic.com/gz01191010/05/53/a7db0ce35391ae2523a87f833d213817.jpg@base@tag=imgScale&w=750&h=500&c=1&m=2&q=88",
								'https://image.guazistatic.com/gz01191010/05/53/a501d2578bf146f126caa2cd30857961.jpg@base@tag=imgScale&w=750&h=500&c=1&m=2&q=88'
							]
						},
						price: '30000',
						subscription: 8
					},
					{
						id: 3,
						name: '马自达3',
						urlId: '1211',
						time: 1518703498,
						versions: '2010款 1.6L 自动经典精英型',
						DrivingYears: "2015",
						ActualServiceLife: "52000",
						imgurl: {
							smurl: 'https://car-image.guazistatic.com/evaluates-bucket/eva48bc944b-76a4-4a36-a251-cee89192931a.jpg?width=240&height=160',
							bigurl: [
								'https://image.guazistatic.com/gz01191006/07/05/b56ecfd653fa4c3425410eca0843905c.jpg@base@tag=imgScale&w=750&h=500&c=1&m=2&q=88',
								"https://image.guazistatic.com/gz01191006/07/05/647ee0c1705f2a47213414dfd967b7ce.jpg@base@tag=imgScale&w=750&h=500&c=1&m=2&q=88",
								'https://image.guazistatic.com/gz01191006/07/05/732feac885f8ab48f73839cd1a4681d1.jpg@base@tag=imgScale&w=750&h=500&c=1&m=2&q=88'
							]
						},
						price: '23000',
						subscription: 9
					},
					{
						id: 4,
						name: '大众宝来',
						urlId: '1207',
						time: 1533737098,
						versions: '2012款 1.6L 自动时尚型',
						DrivingYears: "2015",
						ActualServiceLife: "15000",
						imgurl: {
							smurl: 'https://car-image.guazistatic.com/evaluates-bucket/evaa970cef7-bbd6-4cdd-93da-406fc0dc2ecb.jpg?width=240&height=160',
							bigurl: [
								'https://image.guazistatic.com/gz01190820/14/15/da20157929a7f845062447ad23c47bdb.jpg@base@tag=imgScale&w=750&h=500&c=1&m=2&q=88',
								"https://image.guazistatic.com/gz01190820/14/15/e74f6ebfcc7095405c114bfee49ffc5e.jpg@base@tag=imgScale&w=750&h=500&c=1&m=2&q=88",
								'https://image.guazistatic.com/gz01190820/14/15/b3495a4b9a11b577e103ef3f576a043c.jpg@base@tag=imgScale&w=750&h=500&c=1&m=2&q=88'
							]
						},
						price: '70500',
						subscription: 4
					},
					{
						id: 5,
						name: '传祺GA5',
						urlId: '103772',
						time: 1565273098,
						versions: '2013款 2.0L 自动精英版',
						DrivingYears: "2010",
						ActualServiceLife: "37000",
						imgurl: {
							smurl: 'https://car-image.guazistatic.com/evaluates-bucket/eva86bb6b50-4f98-4d4f-b141-d1829079a888.jpg?width=240&height=160',
							bigurl: [
								'https://image.guazistatic.com/gz01191010/01/01/a26c1fd58eb92233beadd6fe52af127b.jpg@base@tag=imgScale&w=750&h=500&c=1&m=2&q=88',
								"https://image.guazistatic.com/gz01191010/01/01/793a9693d603780055f35885ae964c87.jpg@base@tag=imgScale&w=750&h=500&c=1&m=2&q=88",
								'https://image.guazistatic.com/gz01191010/01/01/ca9e314da1cb28ba236866f05a81ad9d.jpg@base@tag=imgScale&w=750&h=500&c=1&m=2&q=88'
							]
						},
						price: '85500',
						subscription: 9
					},
					{
						id: 6,
						name: '别克英朗',
						urlId: '1206',
						time: 1570543498,
						versions: '2012款 GT 1.6L 自动舒适版',
						DrivingYears: "2013",
						ActualServiceLife: "41000",
						imgurl: {
							smurl: 'https://image1.guazistatic.com/qn191011180754eaa49b0b3e065baa5165a81b1827a36a.jpg?imageView2/1/w/240/h/160/q/99',
							bigurl: [
								'https://image.guazistatic.com/gz01190923/12/27/6c4f38db524f663928e3992b1360fefa.jpg@base@tag=imgScale&w=750&h=500&c=1&m=2&q=88',
								"https://image.guazistatic.com/gz01190923/12/27/6c4f38db524f663928e3992b1360fefa.jpg@base@tag=imgScale&w=750&h=500&c=1&m=2&q=88",
								'https://image.guazistatic.com/gz01190923/12/27/f9f568791d49b378395a4e510ee9839f.jpg@base@tag=imgScale&w=750&h=500&c=1&m=2&q=88'
							]
						},
						price: '7500',
						subscription: 7
					},
					{
						id: 7,
						name: '别克英朗',
						urlId: '1206',
						time: 1557324298,
						versions: '2012款 GT 1.6L 自动舒适版',
						DrivingYears: "2013",
						ActualServiceLife: "41000",
						imgurl: {
							smurl: 'https://image1.guazistatic.com/qn191011180754eaa49b0b3e065baa5165a81b1827a36a.jpg?imageView2/1/w/240/h/160/q/99',
							bigurl: [
								'https://image.guazistatic.com/gz01190923/12/27/6c4f38db524f663928e3992b1360fefa.jpg@base@tag=imgScale&w=750&h=500&c=1&m=2&q=88',
								"https://image.guazistatic.com/gz01190923/12/27/6c4f38db524f663928e3992b1360fefa.jpg@base@tag=imgScale&w=750&h=500&c=1&m=2&q=88",
								'https://image.guazistatic.com/gz01190923/12/27/f9f568791d49b378395a4e510ee9839f.jpg@base@tag=imgScale&w=750&h=500&c=1&m=2&q=88'
							]
						},
						price: '44000',
						subscription: 7
					},
					{
						id: 8,
						name: '奔驰C级',
						urlId: '1197',
						time: 1573660082,
						versions: '2017款 C 180 L 运动版',
						DrivingYears: "2017",
						ActualServiceLife: "35000",
						imgurl: {
							smurl: 'https://image.guazistatic.com/gz01190926/16/51/416c8bf756344f5f29628c672f22ba72.jpg@base@tag=imgScale&w=240&h=160&c=1&m=2&q=88',
							bigurl: [
								'https://image.guazistatic.com/gz01190926/16/51/416c8bf756344f5f29628c672f22ba72.jpg@base@tag=imgScale&w=750&h=500&c=1&m=2&q=88',
								"https://image.guazistatic.com/gz01190926/16/51/b60837ab70dde631661dd1cbe3ce8bbe.jpg@base@tag=imgScale&w=750&h=500&c=1&m=2&q=88",
								'https://image.guazistatic.com/gz01190926/16/51/196b01a72ca1a65ed9a1cf72f1fa40fa.jpg@base@tag=imgScale&w=750&h=500&c=1&m=2&q=88',
								"https://image.guazistatic.com/gz01190926/16/51/9242ae6e09f4414757dae3ff5f0dac65.jpg@base@tag=imgScale&w=750&h=500&c=1&m=2&q=88"
							]
						},
						price: '270000',
						subscription: 10
					}
				],



			}
		},
		methods: {
			//改变浏览的方式
			OnOff() {
				if (this.unfold == 1) {
					this.unfold = 2
				} else {
					this.unfold = 1
				}
			},
			//改变提示语的状态
			tishi() {
				this.popupVisible = true
				setTimeout(() => {
					this.popupVisible = false
				}, 3000)
			},
			PaiXu(PXID) {
				switch (PXID) {
					case "PX1":
						this.bodys.reverse()
						break;
					case "PX2":
						// 时间撮从大到小
						this.bodys.sort(function(a, b) {
							return b.time - a.time;
						});
						break;
					case "PX3":
						// 价格从小到大
						this.bodys.sort(function(a, b) {
							return a.price - b.price;
						});
						break;
					case "PX4":
						// 价格从大到小
						this.bodys.sort(function(a, b) {
							return b.price - a.price;
						});
						break;
					case "PX5":
						// 车龄从小到大
						this.bodys.sort(function(a, b) {
							return b.DrivingYears - a.DrivingYears;
						});
						break;
					case "PX6":
						// 里程从小到大
						this.bodys.sort(function(a, b) {
							return a.ActualServiceLife - b.ActualServiceLife;
						});
						break;
					default:

						break;
				}
				this.Sizer.IntelligentSorting = !this.Sizer.IntelligentSorting
				this.PXstatus = PXID
			}
		},
		watch: {
			pp: function() {
				if (this.pp != undefined) {
					this.bodys = this.body
					this.bodys = this.DisplayType(this.body, this.pp)
					this.tishiyu = this.bodys.length ? `共为您找到${this.bodys.length}辆车` : "暂无相关车源，换个筛选条件试试吧~";
				} else {
					this.tishiyu = `共为您找到${this.bodys.length}辆车`;
				}
				this.tishi()
				this.Sizer.isPrice = false
				this.jiaZai();
			},
			bodys: function() {
				if (this.bodys == "") {
					this.bodys = this.body;
					this.tishi();
				}

			}
		},
		mounted() {
			//拿到传过来的路由值
			this.pp = this.$route.params.pp
			this.bodys = this.body
		}


	}
</script>

<style>
	.icon {
		font-size: 10px;
	}

	.ShaiXuan {
		text-align: center;
	}

	.ShaiXuan span {
		font-size: 12px;
		line-height: 41px;
		color: #333;
	}

	.ShaiXuan .paixu {
		width: 100%;
	}

	.ShaiXuan .paixu li a {
		display: block;
		height: 2.6875rem;
		line-height: 2.6875rem;
		font-size: 0.875rem;
	}

	.ShaiXuan .paixu li a:hover {
		color: #22ac38;
	}

	.ShaiXuan .paixu3 {
		width: 100%;
	}

	.ShaiXuan .paixu3 div {
		height: 3.125rem;
		line-height: 3.125rem;
		font-size: 0.875rem;
	}

	.tishi {
		width: 100%;
		text-align: center;
		background-color: rgba(0, 0, 0, .7);
		backface-visibility: hidden;
		line-height: 2.1875rem;
		color: #fff;
		font-size: 0.875rem;
	}

	.tishi input {
		background: none;
		color: #FFFFFF;
		width: 100%;
		text-align: center;
	}
</style>
