function hendleNavItems(navFooter) {
    return navFooter.map(el => ({
      ...el,
      customClass: window.location.pathname.indexOf(el.activeLocation) !== -1 ? 'active' : ' ',
    }));
  }
  
  
  export default function prepareFooter(footer) {
    return {
      ...footer,
      navItems: hendleNavItems(footer.navFooter),
    };
  }
  