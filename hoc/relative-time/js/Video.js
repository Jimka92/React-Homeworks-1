'use strict';

function prettifyTime(Component) {
  return class extends React.Component {

    compareDateToNow(date) {
      return Math.ceil((+new Date - +new Date(date)) / (1000 * 60));
    }


    prettify(date) {
      const compared = this.compareDateToNow(date);
      if (compared >= 60 * 24 * 365) {
        //прошло больше года
        return `${Math.floor(compared / (60 * 24 * 365))} лет назад`;
      } else if (compared >= 60 * 24 * 31) {
        //прошло больше месяца
        return `${Math.floor(compared / (60 * 24 * 31))} месяцев назад`;
      } else if (compared >= 60 * 24 * 7) {
        //прошло больше недели
        return `${Math.floor(compared / (60 * 24 * 7))} недель назад`;
      } else if (compared >= 60 * 24) {
        //прошло больше суток
        return `${Math.floor(compared / (60 * 24))} дней назад`;
      } else if (compared >= 60) {
        //прошло больше часа
        return `${Math.floor(compared / 60)} часов назад`;
      }
      if (compared < 60) {
        //прошло меньше часа
        return `${Math.floor(compared)} минут назад`;
      }
    }


    render() {
      const date = this.prettify(this.props.date);
      return <Component {...this.props} date={date}/>
    }
  }
}

const DateTimePretty = prettifyTime(DateTime);
const Video = props => {
  return (
    <div className="video">
      <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <DateTimePretty date={props.date}/>
    </div>
  )
};