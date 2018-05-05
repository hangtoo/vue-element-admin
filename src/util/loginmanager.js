import {
	cookie
} from 'cookie_js'

//https://www.npmjs.com/package/cookie_js cookie.js doc
var LoginManager = {};

var USER_NAME_KEY = 'username';
var USER_AVATAR_KEY = 'useravatar';


function checkLogin() {
	return new Promise(function(resolve, reject) {
		if (cookie.get(USER_NAME_KEY)) {
			resolve({
				name: cookie.get(USER_NAME_KEY),
				avatar: cookie.get(USER_AVATAR_KEY)
			});
		} else {
			goLogin();
			reject();
		}
	});
}

function logout(){
	cookie.remove(USER_NAME_KEY,USER_AVATAR_KEY);
	goLogin();
}

function login(){

}

function goLogin(){
	window.appRouter.push({path: '/user/login'});
}

LoginManager.checkLogin = checkLogin;
LoginManager.logout = logout;
LoginManager.login = login;

export {
	LoginManager
};