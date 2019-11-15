<template>
	<div class="box">
		<Head :searchTypes="searchTypes"></Head>
		<div class="banner">
			<mt-swipe :auto="4000">
				<mt-swipe-item><img src="https://image1.guazistatic.com/qn191009101917c546970984195611067c4d04dc24f046.jpg?imageView2/2" alt=""></mt-swipe-item>
				<mt-swipe-item><img src="https://image1.guazistatic.com/qn190916165555d2622fc2869c06f80d5d27712845b2dc.jpg?imageView2/2" alt=""></mt-swipe-item>
				<mt-swipe-item><img src="https://image1.guazistatic.com/qn1904122055431f64670fa1ce7de55b9d2558a7e29432.png?imageView2/2" alt=""></mt-swipe-item>
			</mt-swipe>
			</swipe>
		</div>
		<div class="main">
			<div class="mains">
				<div class="main-t">
					<div class="host">
						<h4>热门二手车</h4>
						<router-link to="/BuyCars">
							更多 <i class="el-icon-arrow-right"></i>
						</router-link>

					</div>
					<el-row :gutter="20" class="hosttext">
						<el-col :span="6">
							<div class="grid-content bg-purple" @click="getPtah($router,'p2')">
								3万以下</div>
						</el-col>
						<el-col :span="6">
							<div class="grid-content bg-purple" @click="getPtah($router,'p3')">3-5万</div>
						</el-col>
						<el-col :span="6">
							<div class="grid-content bg-purple" @click="getPtah($router,'p4')">5-7万</div>
						</el-col>
						<el-col :span="6">
							<div class="grid-content bg-purple" @click="getPtah($router,'p5')">7-9万</div>
						</el-col>
					</el-row>
					<HostCar></HostCar>
				</div>
			</div>
			<div class="mains">
				<div class="recomm">
					<div class="host" style="border-bottom:0;">
						<h4>为您推荐</h4>
						<router-link to="/BuyCars">
							更多 <i class="el-icon-arrow-right"></i>
						</router-link>
					</div>
				</div>
			</div>
			<CarListTJ :bodys="bodys">
			</CarListTJ>
		</div>

	</div>
</template>

<script>
	// @ is an alias to /src
	import Head from '@/components/Head.vue'
	import CarListTJ from '@/components/CarListTJ.vue'
	import HostCar from '@/components/HostCar.vue'
	export default {
		name: 'Home',
		components: {
			Head,
			CarListTJ,
			HostCar
		},
		data() {
			return {
				// 搜索框类型
				searchTypes: 1,
				hostCar: [{
					name: "大众",
					urlId: '1207'
				}, {
					name: "日产",
					urlId: '1202'
				}, {
					name: "本田",
					urlId: '1196'
				}, {
					name: "丰田",
					urlId: '1195'
				}, {
					name: "奔驰",
					urlId: '1197'
				}, {
					name: "宝马",
					urlId: '1198'
				}, {
					name: "奥迪",
					urlId: '1199'
				}, {
					name: "雪佛兰",
					urlId: '1307'
				}, {
					name: "现代",
					urlId: '1208'
				}, {
					name: "福特",
					urlId: '1205'
				}, {
					name: "别克",
					urlId: '1206'
				}, {
					name: "保时捷",
					urlId: '1224'
				}],
				bodys: [{
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
				AutoLogos: [{
						sort: 'A',
						box: [{
								name: '奥迪',
								urlId: '1199'
							},
							{
								name: '阿尔法·罗密欧',
								urlId: '1217'
							},
							{
								name: 'AC Schnitzer',
								urlId: '103803'
							},
							{
								name: '阿斯顿·马丁',
								urlId: '1218'
							},
							{
								name: 'Alpina',
								urlId: '103764'
							},
							{
								name: '安驰',
								urlId: '1219'
							},
							{
								name: 'ARCFOX',
								urlId: '103841'
							}
						],
					},
					{
						sort: 'B',
						box: [{
								name: '本田',
								urlId: '1196'
							},
							{
								name: '奔驰',
								urlId: '1197'
							},
							{
								name: '别克',
								urlId: '1206'
							},
							{
								name: '宝马',
								urlId: '1198'
							},
							{
								name: '阿斯顿·马丁',
								urlId: '1218'
							},
							{
								name: '宝骏',
								urlId: '2272'
							},
							{
								name: '标致',
								urlId: '1226'
							},
							{
								name: '比亚迪',
								urlId: '1212'
							},
							{
								name: '奔腾',
								urlId: '1225'
							},
							{
								name: '北京',
								urlId: '2270'
							},
							{
								name: '北汽绅宝',
								urlId: '103783'
							},
							{
								name: '北汽幻速',
								urlId: '103780'
							},
							{
								name: '保时捷',
								urlId: '1224'
							},
							{
								name: '北汽威旺',
								urlId: '103779'
							},
							{
								name: '宝沃汽车',
								urlId: '103798'
							},
							{
								name: '比速汽车',
								urlId: '103807'
							},
							{
								name: '北汽',
								urlId: '1223'
							},
							{
								name: '北汽道达',
								urlId: '103852'
							},
							{
								name: '巴博斯',
								urlId: '102721'
							},
							{
								name: '北汽新能源',
								urlId: '103826'
							},
							{
								name: '宾利',
								urlId: '1222'
							}
						]
					},
					{
						sort: 'C',
						box: [{
								name: '长安',
								urlId: '1227'
							},
							{
								name: '传祺',
								urlId: '103772'
							},
							{
								name: '长安商用',
								urlId: '103787'
							},
							{
								name: '长城',
								urlId: '1228'
							},
							{
								name: '川汽野马',
								urlId: '2266'
							},
							{
								name: '长安欧尚',
								urlId: '103840'
							},
							{
								name: '昌河',
								urlId: '1229'
							},
							{
								name: '长安跨越',
								urlId: '103812'
							},
							{
								name: '成功汽车',
								urlId: '103799'
							}
						]
					},
					{
						sort: 'D',
						box: [{
								name: '大众',
								urlId: '1207'
							},
							{
								name: '东风风行',
								urlId: '1239'
							},
							{
								name: '东南',
								urlId: '1234'
							},
							{
								name: '东风风神',
								urlId: '2262'
							},
							{
								name: '东风风光',
								urlId: '103870'
							},
							{
								name: '道奇',
								urlId: '1235'
							},
							{
								name: 'DS',
								urlId: '103765'
							},
							{
								name: '东风',
								urlId: '1230'
							},
							{
								name: '东风风度',
								urlId: '103769'
							},
							{
								name: '大乘汽车',
								urlId: '103864'
							},
							{
								name: '东风小康',
								urlId: '102712'
							},
							{
								name: '大发',
								urlId: '1233'
							},
							{
								name: '电咖汽车',
								urlId: '103847'
							},
							{
								name: '大迪',
								urlId: '1231'
							},
							{
								name: '大宇',
								urlId: '1232'
							}
						]
					},
					{
						sort: 'F',
						box: [{
								name: '丰田',
								urlId: '1195'
							},
							{
								name: '福特',
								urlId: '1205'
							},
							{
								name: '菲亚特',
								urlId: '1240'
							},
							{
								name: '福田',
								urlId: '1215'
							},
							{
								name: '福迪',
								urlId: '1236'
							},
							{
								name: '福汽启腾',
								urlId: '102709'
							},
							{
								name: '法拉利',
								urlId: '1237'
							},
							{
								name: '富奇',
								urlId: '1238'
							}
						]
					},
					{
						sort: 'G',
						box: [{
								name: '观致',
								urlId: '102708'
							},
							{
								name: '广汽吉奥',
								urlId: '1260'
							},
							{
								name: '国金汽车',
								urlId: '103850'
							},
							{
								name: '光冈',
								urlId: '1241'
							},
							{
								name: 'GMC',
								urlId: '1242'
							},
							{
								name: '广汽集团',
								urlId: '103860'
							}
						]
					},
					{
						sort: 'H',
						box: [{
								name: '哈弗',
								urlId: '103778'
							},
							{
								name: '海马',
								urlId: '1252'
							},
							{
								name: '汉腾',
								urlId: '103797'
							},
							{
								name: '红旗',
								urlId: '1255'
							},
							{
								name: '华泰',
								urlId: '1256'
							},
							{
								name: '华颂',
								urlId: '103795'
							},
							{
								name: '黄海',
								urlId: '102471'
							},
							{
								name: '海格',
								urlId: '103782'
							},
							{
								name: '汇众',
								urlId: '1259'
							},
							{
								name: '恒天',
								urlId: '102707'
							},
							{
								name: '华凯',
								urlId: '103808'
							},
							{
								name: '黑豹',
								urlId: '1247'
							},
							{
								name: '华泰新能源',
								urlId: '103823'
							},
							{
								name: '华普',
								urlId: '1254'
							},
							{
								name: '悍马',
								urlId: '1253'
							},
							{
								name: '哈飞',
								urlId: '1248'
							},
							{
								name: '华晨鑫源',
								urlId: '103842'
							}
						]
					},
					{
						sort: 'J',
						box: [{
								name: '吉利',
								urlId: '1200'
							},
							{
								name: '江淮',
								urlId: '1264'
							},
							{
								name: 'Jeep',
								urlId: '1216'
							},
							{
								name: '捷豹',
								urlId: '1262'
							},
							{
								name: '江铃',
								urlId: '1265'
							},
							{
								name: '金杯',
								urlId: '1261'
							},
							{
								name: '君马汽车',
								urlId: '103851'
							},
							{
								name: '金龙',
								urlId: '103805'
							},
							{
								name: '捷途',
								urlId: '103871'
							},
							{
								name: '金旅',
								urlId: '103804'
							},
							{
								name: '九龙',
								urlId: '2265'
							},
							{
								name: '江铃集团轻汽',
								urlId: '103824'
							},
							{
								name: '江铃集团新能源',
								urlId: '103825'
							},
							{
								name: '江南',
								urlId: '103781'
							}
						]
					},
					{
						sort: 'K',
						box: [{
								name: '凯迪拉克',
								urlId: '1268'
							},
							{
								name: '凯翼',
								urlId: '103775'
							},
							{
								name: '克莱斯勒',
								urlId: '1269'
							},
							{
								name: '开瑞',
								urlId: '2258'
							},
							{
								name: '卡升',
								urlId: '103830'
							},
							{
								name: '卡尔森',
								urlId: '102706'
							},
							{
								name: '康迪',
								urlId: '103827'
							},
							{
								name: '卡威',
								urlId: '102705'
							},
							{
								name: '凯马',
								urlId: '103809'
							}
						]
					},
					{
						sort: 'L',
						box: [{
								name: '路虎',
								urlId: '1276'
							},
							{
								name: '雷克萨斯',
								urlId: '1278'
							},
							{
								name: '铃木',
								urlId: '1209'
							},
							{
								name: '陆风',
								urlId: '1273'
							},
							{
								name: '猎豹',
								urlId: '1270'
							},
							{
								name: '雷诺',
								urlId: '1279'
							},
							{
								name: '林肯',
								urlId: '1277'
							},
							{
								name: '领克',
								urlId: '103849'
							},
							{
								name: '力帆',
								urlId: '1274'
							},
							{
								name: '理念',
								urlId: '2269'
							},
							{
								name: '路特斯',
								urlId: '102469'
							},
							{
								name: '拉达汽车',
								urlId: '103845'
							},
							{
								name: '劳斯莱斯',
								urlId: '1281'
							},
							{
								name: 'Lorinser',
								urlId: '103834'
							},
							{
								name: '兰博基尼',
								urlId: '1271'
							},
							{
								name: '劳伦士',
								urlId: '103776'
							}
						]
					},
					{
						sort: 'M',
						box: [{
								name: '马自达',
								urlId: '1211'
							},
							{
								name: 'MINI',
								urlId: '1284'
							},
							{
								name: 'MG',
								urlId: '103788'
							},
							{
								name: '玛莎拉蒂',
								urlId: '1285'
							},
							{
								name: '摩根',
								urlId: '103818'
							},
							{
								name: '迈巴赫',
								urlId: '1282'
							},
							{
								name: '迈凯伦',
								urlId: '102716'
							},
							{
								name: '美亚',
								urlId: '1286'
							}
						]
					},
					{
						sort: 'N',
						box: [{
								name: '纳智捷',
								urlId: '2271'
							},
							{
								name: '南骏',
								urlId: '103814'
							},
							{
								name: '南京金龙',
								urlId: '103806'
							}
						]
					},
					{
						sort: 'O',
						box: [{
								name: '讴歌',
								urlId: '1289'
							},
							{
								name: '欧宝',
								urlId: '1288'
							},
							{
								name: '欧朗',
								urlId: '102481'
							}
						]
					},
					{
						sort: 'Q',
						box: [{
								name: '起亚',
								urlId: '1292'
							},
							{
								name: '奇瑞',
								urlId: '1201'
							},
							{
								name: '启辰',
								urlId: '102478'
							},
							{
								name: '乔治·巴顿',
								urlId: '103846'
							},
							{
								name: '前途',
								urlId: '103821'
							},
							{
								name: '青年莲花',
								urlId: '1275'
							},
							{
								name: '庆铃',
								urlId: '1291'
							}
						]
					},
					{
						sort: 'R',
						box: [{
								name: '日产',
								urlId: '1202'
							},
							{
								name: '荣威',
								urlId: '1293'
							},
							{
								name: '瑞麒',
								urlId: '2260'
							},
							{
								name: '瑞驰新能源',
								urlId: '103838'
							}
						]
					},
					{
						sort: 'S',
						box: [{
								name: '斯柯达',
								urlId: '1297'
							},
							{
								name: 'Smart',
								urlId: '102476'
							},
							{
								name: '三菱',
								urlId: '1204'
							},
							{
								name: '斯巴鲁',
								urlId: '1294'
							},
							{
								name: '上汽大通',
								urlId: '2273'
							},
							{
								name: '斯威',
								urlId: '103802'
							},
							{
								name: '双龙',
								urlId: '1299'
							},
							{
								name: '思铭',
								urlId: '102474'
							},
							{
								name: 'SPRINGO',
								urlId: '103767'
							},
							{
								name: '赛麟',
								urlId: '103801'
							},
							{
								name: '双环',
								urlId: '1296'
							},
							{
								name: '萨博',
								urlId: '1214'
							},
							{
								name: '陕汽通家',
								urlId: '102700'
							},
							{
								name: '时代',
								urlId: '103810'
							}
						]
					},
					{
						sort: 'T',
						box: [{
								name: '特斯拉',
								urlId: '102715'
							},
							{
								name: '唐骏汽车',
								urlId: '103816'
							},
							{
								name: '泰卡特',
								urlId: '103836'
							},
							{
								name: '天马',
								urlId: '1300'
							},
							{
								name: '腾势',
								urlId: '102717'
							},
							{
								name: '通用',
								urlId: '2257'
							}
						]
					},
					{
						sort: 'W',
						box: [{
								name: '五菱',
								urlId: '1305'
							},
							{
								name: '沃尔沃',
								urlId: '1203'
							},
							{
								name: 'WEY',
								urlId: '103829'
							},
							{
								name: '五十铃',
								urlId: '1304'
							},
							{
								name: '威麟',
								urlId: '2264'
							},
							{
								name: '威兹曼',
								urlId: '102714'
							},
							{
								name: '蔚来',
								urlId: '103822'
							},
							{
								name: '威马汽车',
								urlId: '103854'
							}
						]
					},
					{
						sort: 'X',
						box: [{
								name: '现代',
								urlId: '1208'
							},
							{
								name: '雪佛兰',
								urlId: '1307'
							},
							{
								name: '雪铁龙',
								urlId: '1213'
							},
							{
								name: '西雅特',
								urlId: '2255'
							},
							{
								name: '夏利',
								urlId: '102465'
							},
							{
								name: '新凯',
								urlId: '1308'
							},
							{
								name: '新雅途',
								urlId: '1309'
							},
							{
								name: '星途',
								urlId: '103875'
							},
							{
								name: '西安奥拓',
								urlId: '103785'
							}
						]
					},
					{
						sort: 'Y',
						box: [{
								name: '英菲尼迪',
								urlId: '1310'
							},
							{
								name: '一汽',
								urlId: '1210'
							},
							{
								name: '依维柯',
								urlId: '1311'
							},
							{
								name: '英致',
								urlId: '103784'
							},
							{
								name: '云度',
								urlId: '103843'
							},
							{
								name: '永源',
								urlId: '2261'
							},
							{
								name: '御捷',
								urlId: '103831'
							},
							{
								name: '扬子',
								urlId: '1313'
							},
							{
								name: '宇通客车',
								urlId: '103839'
							},
							{
								name: '云雀',
								urlId: '1244'
							}
						]
					},
					{
						sort: 'Z',
						box: [{
								name: '众泰',
								urlId: '1318'
							},
							{
								name: '中华',
								urlId: '1315'
							},
							{
								name: '中兴',
								urlId: '1319'
							},
							{
								name: '中欧',
								urlId: '103770'
							},
							{
								name: '中顺',
								urlId: '103771'
							},
							{
								name: '之诺',
								urlId: '103820'
							},
							{
								name: '知豆',
								urlId: '103796'
							}
						]
					}
				],

			}
		},
		methods: {


		},
		mounted() {

		}
	}
</script>

<style>
	.box {
		margin-bottom: 30px;
	}

	.banner {
		width: 100%;
		height: 170px;

	}

	.banner img {
		width: 100%;
	}

	.host {
		display: flex;
		width: 100%;
		justify-content: space-between;
		line-height: 2.1875rem;
	}

	.host h4 {
		font-weight: 500;
		font-size: 0.9375rem;
	}

	.mains {
		padding: 0.625rem 1.25rem;
		box-sizing: border-box;
	}

	.main .mains:nth-child(1) {
		border-bottom: 6px solid #f5f7fa;
	}

	.host a {
		text-decoration: none;
		color: #8f96a0;
		font-size: 0.75rem;
	}

	.hosttext {
		line-height: 35px;
		font-size: 14px;
		color: #303741;
		font-weight: 400;
		text-align: center;
	}
</style>
