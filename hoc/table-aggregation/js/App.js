'use strict';

function descSorted(Component) {
  return class DescSorted extends React.Component {
    sortData(dataArray) {
      if (!dataArray.length) return [];

      return dataArray.slice().sort((leftDate, rightDate) => {
        return ( +new Date(rightDate.date) - +new Date(leftDate.date) );
      });

    }

    render() {
      const data = this.sortData(this.props.list);
      return (
        <Component {...this.props} list={data}/>
      )
    }
  }
}
const DescSortedTable = descSorted(SortTable);


function yearSorted(Component) {
  return class DescSorted extends React.Component {
    sortData(dataArray) {
      if (!dataArray.length) return [];

      return dataArray
        .slice()
        .sort((leftDate, rightDate) => {
          return ( +new Date(rightDate.date) - +new Date(leftDate.date) );
        })
        .reduce((accumulator, curVal) => {
          const currValYear = curVal.date.split('-')[0];

          if (accumulator.length === 0) {
            return [{year: currValYear, amount: curVal.amount}];
          } else {
            if (currValYear === accumulator[accumulator.length - 1].year) {
              accumulator[accumulator.length - 1].amount += curVal.amount;
              return accumulator;
            } else {
              return accumulator.concat({year: currValYear, amount: curVal.amount});
            }
          }
        }, []);
    }

    render() {
      const data = this.sortData(this.props.list);
      return (
        <Component {...this.props} list={data}/>
      )
    }
  }
}
const YearSortedTable = yearSorted(YearTable);


function monthSorted(Component) {
  return class DescSorted extends React.Component {
    sortData(dataArray) {
      if (!dataArray.length) return [];

      return dataArray
        .slice()
        .sort((leftDate, rightDate) => {
          return ( new Date(rightDate.date).getMonth() - new Date(leftDate.date).getMonth() );
        })
        .reduce((accumulator, curVal) => {
          const currValYear = curVal.date.split('-')[1];

          if (accumulator.length === 0) {
            return [{month: currValYear, amount: curVal.amount}];
          } else {
            if (currValYear === accumulator[accumulator.length - 1].month) {
              accumulator[accumulator.length - 1].amount += curVal.amount;
              return accumulator;
            } else {
              return accumulator.concat({month: currValYear, amount: curVal.amount});
            }
          }
        }, [])
        .map( item => {
          item.month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'][parseInt(item.month) - 1];
          return item;
        });
    }

    render() {
      const data = this.sortData(this.props.list);
      console.log(data);
      return (
        <Component {...this.props} list={data}/>
      )
    }
  }
}
const MonthSortedTable = monthSorted(MonthTable);


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
      this.setState(response.data);
    });
  }

  render() {
    return (
      <div id="app">
        <MonthSortedTable list={this.state.list}/>
        <YearSortedTable list={this.state.list}/>
        <DescSortedTable list={this.state.list}/>
      </div>
    );
  }
}