function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
  return a - b;
}

class App extends React.Component {
	constructor(props){
		super(props);

		// рекомендуется делать так
		//https://reactjs.org/docs/react-component.html#componentwillmount
		this.state = {
      data: [],
      series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
      labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
      colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
    };
	}

	componentDidMount() {
		this.populateArray();
		setInterval(this.populateArray.bind(this), 2000);
	}

	populateArray() {
		const	series = 5;
		const serieLength = 5;

    let data = new Array(series).fill(new Array(serieLength).fill(0));
    data = data.map(serie => serie.map(item => getRandomInt(0, 20)));

		this.setState({ data });
	}

	render() {
		const { data, colors, labels, series } = this.state;
		const max = data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);

		return (
			<section>
				<Chart
					state={this.state}
				/>

				<Chart
					state={this.state}
					type="stacked"
					sum
				/>

				<Chart
					state={this.state}
					type="layered"
				/>

				<Chart
					state={this.state}
					horizontal
				/>

        <div className="Legend">
    			{ labels.map((label, labelIndex) => {
    				return (
    				<div>
    					<span className="Legend--color" style={{ backgroundColor: colors[labelIndex % colors.length]  }} />
    					<span className="Legend--label">{ label }</span>
    				</div>
    				);
    			}) }
    		</div>
			</section>
		);
	}
}

function Chart({state, type, sum, horizontal}){
  const { data, colors} = state;

  /*
  * Что то мне совсем не нравится такая реализация, но я не придумал ничего другого..*/
  let labels = null;
	if (horizontal) {
		labels = state.series;
	} else {
    labels = state.labels;
	}

	let param = null;
	if(!sum) {
		param = data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);
	}

	return(
		<div className={horizontal ? "Charts horizontal" : "Charts"}>
      { data.map((serie, serieIndex) => {
        const sortedSerie = serie.slice(0);
        sortedSerie.sort(compareNumbers);

        if(sum){
          param = serie.reduce((carry, current) => carry + current, 0);
				}

        return (
					<div className={"Charts--serie ".concat(type)}
							 key={ serieIndex }
							 style={{ height: horizontal ? 'auto' : 250 }}
					>
						<label>{ labels[serieIndex] }</label>
            { serie.map((item, itemIndex) => {
              const color = colors[itemIndex];
							const size = item / param * 100;

              const style = {
                backgroundColor: color,
                opacity: sum ? 1 : (item / param + .05),
                zIndex: item
              };

              if (horizontal){
              	style.width = size + '%'
							} else if (type === "layered") {
                style.height = size + '%';
                style.right = ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%';
							} else {
                style.height = size + '%';
							}

              return (
								<div
									className={"Charts--item ".concat(type)}
									style={ style }
									key={ itemIndex }
								>
									<b style={{ color: color }}>{ item }</b>
								</div>
              );
            }) }
					</div>
        );
      }) }
		</div>
	);
}
