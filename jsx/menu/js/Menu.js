const Menu = function ({items, opened}) {

    const listItems = items.map( (item, index) => {
        return (
            <li key={index}><a href={"#" + item.href}>{item.title}</a></li>
        )
    } );

    if(opened){
        return(
            <div className="menu menu-open">
                <div className="menu-toggle"><span></span></div>
                <nav>
                    <ul>
                        {listItems}
                    </ul>
                </nav>
            </div>
        )
    } else {
        return(
            <div className="menu">
                <div className="menu-toggle"><span></span></div>
            </div>
        )
    }

};