/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.model({
	__name:"bs.bindAction",
	
	__init:function(){
		this.bindActions();
	},
	bindActions: function() {
		this.bindEditArea();
		this.bindItems();
	},
	/*
	 * BootStrap 요소들에 바인드
	 */
	bindItems : function() {
		// BootStrap 요소들
		$(".tipJS-items").attr({
			"draggable" : "true"
			//"contenteditable" : true
			//,"draggable" : true
		});
		
		$('ul').on("dragstart", ".tipJS-items", tipJS.action().bs.dragStart);
	},
	/*
	 * 에디터 영역에 바인드
	 */
	bindEditArea : function() {
		// 에디터 영역
		$('.tipJS-editArea').attr({
			"draggable" : "true"
			//"contenteditable" : true
			//,"draggable" : true
		});
		
		$('.editContainer')
		.delegate("*", "mouseover", tipJS.action().bs.editMouseOver)
		.delegate("*", "mouseout", tipJS.action().bs.editMouseOut)
		.delegate("*", "dblclick", tipJS.action().bs.editDblClick)
		.delegate("*", "drop", tipJS.action().bs.drop)
		.delegate("*", "dragenter", tipJS.action().bs.dragEnter)
		.delegate("*", "blur", function(ev){
			ev.stopPropagation();
			$(this).attr({
				"draggable" : true
			});
			$(this).removeAttr("contenteditable");
			$(this).removeClass("modifyTarget");
		})
		.delegate("*", "dragover", function(ev){
			$(this).addClass("modifyTarget");
			tipJS.action("bs.dragOver", ev);
		}).delegate("*", "dragstart", function(ev){
			//tipJS.action("bs.dragStart", ev);
		}).delegate("*", "dragleave", function(ev){
			$(this).removeClass("modifyTarget");
		});
		
	}
});
