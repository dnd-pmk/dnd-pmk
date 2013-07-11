/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.controller({
	name : "bs.dragStart",

	invoke : function(ev){
		tipJS.log(this.name);
		
		this.loadModel("globalDD",true).dragEl = ev.target.id;
		console.log(this.loadModel("globalDD",true).dragEl);
		//tipJS.debug($(ev.target).html());
		ev.originalEvent.dataTransfer.effectAllowed = "copy";
	}
});
