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
	 * BootStrap ��ҵ鿡 ���ε�
	 */
	bindItems : function() {
		// BootStrap ��ҵ�
		$(".tipJS-items").attr({
			"draggable" : "true"
			//"contenteditable" : true
			//,"draggable" : true
		});
		
		$('ul').on("dragstart", ".tipJS-items", tipJS.action().bs.dragStart);
	},
	/*
	 * ������ ������ ���ε�
	 */
	bindEditArea : function() {
		// ������ ����
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
