import BaseComponent from './base_component'

class NavBar extends BaseComponent{
    hoverMenu(menuName) {
      return this.root.contains('a', menuName).trigger('mouseover');
    }
  }
  
  export default NavBar;