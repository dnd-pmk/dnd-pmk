/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.controller({
	name : "bs.drop",

	invoke : function(ev){
		tipJS.log(this.loadModel("globalDD",true).dragEl);
		if (null == this.loadModel("globalDD",true).dragEl) {
			return false;
		}
		var dragEl = this.getItem(this.loadModel("globalDD",true).dragEl);
		tipJS.log("shift:"+ev.shiftKey);
		if (ev.shiftKey || $(ev.target).hasClass("tipJS-editArea")) {
			switch(ev.currentTarget.nodeName){
				case "H1":case "H2":case "H3":case "H4":case "H5":case "H6":case "A":
					alert("You can not add H* & A tags here");
					$(ev.target).after($(dragEl));
					break;
				default:
					$(ev.target).append($(dragEl));
			}
			$('.tipJS-editArea').removeAttr("draggable");
		} else {
			$(ev.target).after($(dragEl));
		}
		$(dragEl).attr("draggable","true");
		this.loadModel("globalDD",true).dragEl = null;
	},
	getItem : function(id){
		// id : tipJS-Typography-h1
		// itemInfo[0] : tipJS
		// itemInfo[1] : Typography
		// itemInfo[2] : h1
		var itemInfo = id.split("-");
		return this.loadModel("item"+itemInfo[1]).getItem(id);
	}
});
