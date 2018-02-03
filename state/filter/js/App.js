'use strict';

// const App = props => (
//   <div>
//     <Toolbar
//       filters={props.filters}
//       selected={'All'}
//       onSelectFilter={(filter) => console.log(filter)} />
//     <Portfolio projects={props.projects} />
//   </div>
// );

function wrt(d) {
  console.log(d);
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'activeFilter': 'all'
    }
  }

  sort(projects, category) {
    if (category.toLowerCase() === 'all')
      return projects;

    return projects.filter(function (el) {
      return el.category === category;
    })
  }

  render() {
    const {filters, projects} = this.props;
    return (
      <div>
        <Toolbar
          filters={filters}
          selected={this.state.activeFilter}
          onSelectFilter={(filter) => {
            this.setState({
              'activeFilter': filter
            });
            console.log(filter);
          }}/>
        <Portfolio projects={this.sort(projects, this.state.activeFilter)}/>
      </div>
    );
  }
}
