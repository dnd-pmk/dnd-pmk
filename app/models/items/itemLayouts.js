/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.model({
	__name:"bs.itemLayouts",
	__extend : ["bs.itemAbs"],
	
	items : {
		"tipJS-Layouts-Fixed" : '\
<div class="tipJS-height300 tipJS-container">\
</div>\
',
		"tipJS-Layouts-Fluid" : '\
<div class="container-fluid">\
	<div class="row-fluid">\
		<div class="span2">\
		</div>\
		<div class="span10">\
		</div>\
	</div>\
</div>\
',
		"tipJS-Typography-h3" : "<H3 draggable='true'>h3. Heading 3</H3>"
	}
});
