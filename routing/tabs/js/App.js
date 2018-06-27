const ReactRouter = window.ReactRouterDOM;
const NavLink = ReactRouter.NavLink;

const linkCreator = (Children, baseClass, baseActiveClass) => props =>
  <Children
    className={baseClass}
    activeClassName={baseActiveClass}
    {...props}
  >
    {props.children}
  </Children>;

const MenuItem = linkCreator(NavLink, 'tabs__item', 'tabs__item-active');

const App = props => {
  return (
    <Router>
      <div className="tabs">
        <nav className="tabs__items">
          <MenuItem exact to="/">Рефераты</MenuItem>
          <MenuItem to="/creator">Криэйтор</MenuItem>
          <MenuItem to="/fortune">Гадалка</MenuItem>
        </nav>
        <div className="tabs__content">
          <Switch>
            <Route path="/fortune" component={Fortune}/>
            <Route path="/creator" component={Creator}/>
            <Route path="/" component={Essay}/>
          </Switch>
        </div>
      </div>
    </Router>
  )
};
