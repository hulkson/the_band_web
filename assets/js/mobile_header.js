
// js for menu-btn-mobile

var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;
// console.log(header); --show tên biến trên console devtool xem nhận chưa
// console.log(mobileMenu);

// check menu button if close
mobileMenu.onclick = function() {
  var isClose = header.clientHeight === headerHeight;
  if (isClose) {
    header.style.height = 'auto';
  } else {
    header.style.height = null;
  }
}

// auto disable menu when onclick
var menuItems = document.querySelectorAll('#navbar li a[href*="#"]');
// console.log(menuItems);

for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];
  // console.log(menuItem.nextElementSibling);
  menuItem.onclick = function(event) {
    var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
    
    if (isParentMenu) {
      event.preventDefault();
    }
    else {
      header.style.height = null;
    }
  }
}
