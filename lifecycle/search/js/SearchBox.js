function getCoords(elem) {
  const box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fixed: false};
  }

  render() {
    return <SearchBoxView fixed={this.state.fixed}/>
  }

  componentDidMount() {
    this.searchBox = document.querySelector('.search-box');
    this.searchBoxInitialTop = getCoords(this.searchBox).top;

    window.addEventListener('scroll',
      () => this.setPosition(this.isFixed(this.searchBoxInitialTop))
    );
  }

  isFixed(searchBoxInitialTop) {
    return pageYOffset >= searchBoxInitialTop;
  }

  /**
   * @param {boolean} fixed
   */
  setPosition(fixed) {
    this.setState({fixed});
  }
}
