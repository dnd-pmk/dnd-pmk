/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.define({
	name:"bs",
	controllers:[
		"init.js",
		"dragStart.js",
		"dragEnter.js",
		"dragOver.js",
		"drop.js",
		"editDblClick.js",
		"editMouseOut.js",
		"editMouseOver.js"
	],
	models:[
		"globalDD.js",
		"bindAction.js",
		"items/itemAbs.js",
		"items/itemButtons.js",
		"items/itemLayouts.js",
		"items/itemNavbars.js",
		"items/itemTypography.js"
	],
	views:[
		
	],
	onLoad:function(){
		tipJS.log("bs.onLoad()");
		tipJS.action("bs.init");
	},
	beforeController:function(param){
		// 컨트롤러 공통처리
		switch(this.controllerName){
			case "bs.dragStart" :
			case "bs.dragEnter" :
			case "bs.dragOver" :
			case "bs.drop" :
			case "bs.editDblClick" :
			case "bs.editMouseOver" :
			case "bs.editMouseOut" :
				tipJS.debug("###stopPropagation")
				param.stopPropagation();
				//param.preventDefault();
				break;
		}
	}
});

