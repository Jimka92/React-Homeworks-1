'use strict';

const VIEW_LIST = "view_list";
const VIEW_MODULE = "view_module";

class App extends React.Component {
  constructor(props){
    super(props);

    if (!localStorage.getItem('cards_layout')) {
      localStorage.setItem('cards_layout', VIEW_MODULE);
    }
    this.state = {
      'cards_layout': localStorage.getItem('cards_layout')
    };
  }


  switchState(){
    if (localStorage.getItem('cards_layout') === VIEW_LIST) {
      localStorage.setItem('cards_layout', VIEW_MODULE);
      this.setState({
        'cards_layout': VIEW_MODULE
      });
      return VIEW_MODULE;
    } else {
      localStorage.setItem('cards_layout', VIEW_LIST);
      this.setState({
        'cards_layout': VIEW_LIST
      });
      return VIEW_LIST;
    }
  }


  render() {
    return (
      <div>
        <div className="toolbar">
          <IconSwitch
            icon={this.state.cards_layout}
            onSwitch={() => {
              this.switchState();
              console.log("сменился тип вывода");
            }} />
        </div>
        {this.renderLayout(this.state.cards_layout === VIEW_MODULE)}
      </div>
    );
  }


  renderLayout(cardView) {
    if (cardView) {
      return (
        <CardsView
          layout={this.props.layout}
          cards={this.getShopItems(this.props.products, cardView)} />
      );
    }
    return (<ListView items={this.getShopItems(this.props.products, cardView)} />);
  }


  getShopItems(products, cardView) {
    return products.map(product => {
      let cardProps = {
        title: product.name,
        caption: product.color,
        img: product.img,
        price: `$${product.price}`
      };
      if (cardView) {
        return (
          <ShopCard {...cardProps}/>
        );
      }
      return (<ShopItem {...cardProps}/>)
    });
  }
}
