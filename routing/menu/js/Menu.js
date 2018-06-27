const ReactRouter = window.ReactRouterDOM;
const NavLink = ReactRouter.NavLink;

const linkCreator = (Children, baseClass, baseActiveClass) => props =>
  <Children className={baseClass} activeClassName={baseActiveClass} {...props}>{props.children}</Children>;

const MenuItem = linkCreator(NavLink, 'menu__item', 'menu__item-active');




const Menu = props => {
  return (
    <nav className="menu">
      <MenuItem exact to="/">Главная</MenuItem>
      <MenuItem to="/drift">Дрифт-такси</MenuItem>
      <MenuItem to="/timeattack">Time Attack</MenuItem>
      <MenuItem to="/forza">Forza Karting</MenuItem>
    </nav>
  )
};