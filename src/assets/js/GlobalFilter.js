var PriceFormat=function(num,unit){
	var n = num;
	n = Math.round((n /10000) * 100) / 100;
	n = n + unit;
	return n;
}


export {PriceFormat}