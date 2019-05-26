module.exports = function(){

	var client = "./app";
	var server = "./docs";


	var config  = {
		cssIN : client + "/dev/styles/styles.css",
		cssOUT: client + "/assets/styles",

		htmlFile : client + "/*.html",
		
		imagesIN: client + "/assets/images/**/*",
		imagesOUT: server + "/assets/images",

		watchCSS :  client + "/dev/styles/**/*.css",
		watchHTML :  client + "/*.html",
		watchJS :  client + "/dev/scripts/**/*.js",

		compileCss: client + "/assets/styles/*.css"

	}

	return config;
}