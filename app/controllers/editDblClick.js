/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.controller({
	name : "bs.editDblClick",

	invoke : function(ev){
		tipJS.log(this.name);
		if (ev.shiftKey && !$(ev.target).hasClass("tipJS-editArea")) {
			$(ev.target).remove();
			return false;
		}
		$this = $(ev.target);
		$this.attr("contenteditable", "true");
		$this.removeAttr("draggable");
		$this.removeClass("modifyTarget");
	}
});
