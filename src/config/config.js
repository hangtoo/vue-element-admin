const config={
	debug: false //是否为debug模式
};

if(config.debug){
	config.baseurl = "http://localhost:9999/";
} else {

	if(!!window.location.host&&window.location.host!='localhost:8080'){
		config.baseurl = "http://"+window.location.host+"/sunvue-gateway-webapp/";
	}else{
		config.baseurl = "http://wx.sunfintech.com.cn/sunvue-gateway-webapp/";
	}

}

export default
{
	config
}
