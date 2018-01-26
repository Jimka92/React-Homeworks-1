'use strict';

function wrt(d) {
    console.log(d);
}

const baseurl = 'https://neto-api.herokuapp.com/etsy';

function Listing(props) {
    if (!props.items || !Array.isArray(props.items) || !props.items.length) return;

    const items = props.items.map(function (item) {
        let currencyFormat;
        if (item.currency_code === 'USD'){
            currencyFormat = '$' + item.price;
        } else if (item.currency_code === 'EUR'){
            currencyFormat = '€' + item.price;
        } else {
            currencyFormat = item.price + ' ' + item.currency_code;
        }

        let quantityClass;
        if (item.quantity <= 10){
            quantityClass = 'level-low';
        } else if (item.quantity <= 20){
            quantityClass = 'level-medium';
        } else {
            quantityClass = 'level-high';
        }
        return(
            <div key={item.listing_id} className="item">
                <div className="item-image">
                    <a href={item.url}>
                        <img src={item.MainImage.url_570xN}/>
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">
                        {item.title.length > 50 ? item.title.substr(0, 50) + '...' : item.title}
                        </p>
                    <p className="item-price">{currencyFormat}</p>
                    <p className={'item-quantity ' + quantityClass}>{item.quantity}</p>
                </div>
            </div>
        );
    });
    return(
        <div className="item-list">
            {items}
        </div>
    );
}

fetch(baseurl, {
    method: 'GET'
})
    .then( res => res.json() )
    .then( data => {
        ReactDOM.render(
            <Listing items={data}/>,
            document.querySelector('#root')
        );
    });

