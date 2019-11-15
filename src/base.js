exports.install = function(Vue, options) {
	Vue.prototype.DisplayType = function(bodys, pp) {
		switch (pp) {
			case "p1":
				break;
			case "p2":
				bodys = bodys.filter(item => {
					return (item["price"] < 30000)
				})
				break;
			case "p3":
				bodys = bodys.filter(item => {
					return ((item["price"] >= 30000) && (item["price"] < 50000))
				})
				break;
			case "p4":
				bodys = bodys.filter(item => {
					return ((item["price"] >= 50000) && (item["price"] < 70000))
				})
				break;
			case "p5":
				bodys = bodys.filter(item => {
					return ((item["price"] >= 70000) && (item["price"] < 90000))
				})
				break;
			case "p6":
				bodys = bodys.filter(item => {
					return ((item["price"] >= 90000) && (item["price"] < 120000))
				})
				break;
			case "p7":
				bodys = bodys.filter(item => {
					return ((item["price"] >= 120000) && (item["price"] < 160000))
				})
				break;
			case "p8":
				bodys = bodys.filter(item => {
					return ((item["price"] >= 160000) && (item["price"] < 200000))
				})
				break;
			case "p9":
				bodys = bodys.filter(item => {
					return ((item["price"] >= 200000))
				})
				break;
			default:
				bodys = bodys.filter(item => {
					return ((item["urlId"] == pp))
				})
				break;
		}
		return bodys;
	};
	Vue.prototype.pjurl = function(urlId) {
		return "https://image.guazistatic.com/files/brand/" + urlId + ".png"
	};
	Vue.prototype.getPtah = function(thi, pp) {
			thi.push({
				name: 'BuyCars',
				params: {
					pp: pp
				}
			})
	};
	Vue.prototype.jiaZai=function(){
		this.$indicator.open('加载中...');
		setTimeout(() => {
			this.$indicator.close();
		}, 500)
		
	}
	

};
