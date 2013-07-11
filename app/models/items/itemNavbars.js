/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.model({
	__name:"bs.itemNavbars",
	__extend : ["bs.itemAbs"],
	
	items : {
		"tipJS-Navbars-Navbar" : '\
<div class="navbar">\
  <div class="navbar-inner">\
    <div class="container" style="width: auto;">\
      <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">\
        <span class="icon-bar"></span>\
        <span class="icon-bar"></span>\
        <span class="icon-bar"></span>\
      </a>\
      <a class="brand" href="#">Project name</a>\
      <div class="nav-collapse">\
				<ul class="nav">\
          <li class="active"><a href="#">Home</a></li>\
          <li class="dropdown">\
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>\
            <ul class="dropdown-menu">\
              <li><a href="#">Action</a></li>\
              <li><a href="#">Something else here</a></li>\
              <li class="divider"></li>\
              <li><a href="#">Separated link</a></li>\
            </ul>\
          </li>\
        </ul>\
      	<form class="navbar-search pull-left" action="">\
          <input type="text" class="search-query span2 tipJS-width140" placeholder="Search">\
        </form>\
      	<ul class="nav pull-right">\
      		<li><a href="#">Link</a></li>\
				</ul>\
      </div>\
    </div>\
  </div>\
</div>',
		"tipJS-Navbars-NavbarInverse" : '\
<div class="navbar navbar-inverse">\
  <div class="navbar-inner">\
    <div class="container" style="width: auto;">\
      <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">\
        <span class="icon-bar"></span>\
        <span class="icon-bar"></span>\
        <span class="icon-bar"></span>\
      </a>\
      <a class="brand" href="#">Project name</a>\
      <div class="nav-collapse">\
				<ul class="nav">\
          <li class="active"><a href="#">Home</a></li>\
          <li class="dropdown">\
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>\
            <ul class="dropdown-menu">\
              <li><a href="#">Action</a></li>\
              <li><a href="#">Something else here</a></li>\
              <li class="divider"></li>\
              <li><a href="#">Separated link</a></li>\
            </ul>\
          </li>\
        </ul>\
      	<form class="navbar-search pull-left" action="">\
          <input type="text" class="search-query span2 tipJS-width140" placeholder="Search">\
        </form>\
      	<ul class="nav pull-right">\
      		<li><a href="#">Link</a></li>\
				</ul>\
      </div>\
    </div>\
  </div>\
</div>'
	}
});
