function Calendar({date}) {
    const weekDay = getLocalWeekDay[date.getDay()];
    const month = getLocalMonth[date.getMonth()];


    //Сгенерируем шапку календаря и систему колонок для таблицы
    const colGroup = [];
    for (let i = 0; i < 7; i++){
        if (i > 4){
            colGroup.push(<col className="ui-datepicker-week-end"/>);
        } else {
            colGroup.push(<col/>);
        }
    }

    const dayTitles = [];
    for (let i = 1; i <= 7; i++){
        const num = i === 7 ? 0 : i;
        const day = getLocalWeekDay[num];
        dayTitles.push(<th scope="col" title={day.full}>{day.short}</th>);
    }


    //Получим первый день, который должен отображаться на карточке календаря (верхняя левая ячейка)
    const firstDayInLayout = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    firstDayInLayout.setDate(1);
    while (firstDayInLayout.getDay() !== 1) {
        firstDayInLayout.setDate(firstDayInLayout.getDate() - 1);
    }

    //Получим последний день, который должен отображаться на карточке календаря (нижняя правая ячейка)
    const lastDayInLayout = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    while (lastDayInLayout.getDay() !== 0) {
        lastDayInLayout.setDate(lastDayInLayout.getDate() + 1);
    }

    //Заполним days нужной разметкой
    const days = [];
    let weekDays = [];
    let counter = 0;
    while (firstDayInLayout.getTime() <= lastDayInLayout.getTime()){
        if ( counter % 7 === 0 ) {
            if (weekDays.length) {
                days.push(
                    <tr>
                        {weekDays}
                    </tr>
                );
                weekDays = [];
            }
        }

        weekDays.push(<td>{firstDayInLayout.getDate()}</td>);

        if ( firstDayInLayout.getMonth() !== date.getMonth() ) {
             weekDays[weekDays.length - 1].props.className = 'ui-datepicker-other-month';
        }
        if ( firstDayInLayout.getMonth() === date.getMonth() && firstDayInLayout.getDate() === date.getDate()) {
            weekDays[weekDays.length - 1].props.className = 'ui-datepicker-today';
        }

        counter++;
        firstDayInLayout.setDate(firstDayInLayout.getDate() + 1);
    }

    return(
       <div className="ui-datepicker">
           <div className="ui-datepicker-material-header">
               <div className="ui-datepicker-material-day">{weekDay.full}</div>
               <div className="ui-datepicker-material-date">
                   <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
                   <div className="ui-datepicker-material-month">{month.special}</div>
                   <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
               </div>
           </div>
           <div className="ui-datepicker-header">
               <div className="ui-datepicker-title">
                   <span className="ui-datepicker-month">{month.default}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
               </div>
           </div>
           <table className="ui-datepicker-calendar">
               <colgroup>
                   {colGroup}
               </colgroup>
               <thead>
               <tr>
                   {dayTitles}
               </tr>
               </thead>
               <tbody>
                  {days}
               </tbody>
           </table>
       </div>
   );
}

const getLocalWeekDay = [
    {
        short: 'Вс',
        full: 'Воскресенье'
    },
    {
        short: 'Пн',
        full: 'Понедельник',
    },
    {
        short: 'Вт',
        full: 'Вторник',
    },
    {
        short: 'Ср',
        full: 'Среда',
    },
    {
        short: 'Чт',
        full: 'Четверг',
    },
    {
        short: 'Пт',
        full: 'Пятница',
    },
    {
        short: 'Сб',
        full: 'Суббота',
    }
];

const getLocalMonth = [
    {
        default: 'Январь',
        special: 'Января'
    },
    {
        default: 'Февраль',
        special: 'Февраля'
    },
    {
        default: 'Март',
        special: 'Марта'
    },
    {
        default: 'Апрель',
        special: 'Апреля'
    },
    {
        default: 'Май',
        special: 'Мая'
    },
    {
        default: 'Июнь',
        special: 'Июня'
    },
    {
        default: 'Июль',
        special: 'Июля'
    },
    {
        default: 'Август',
        special: 'Августа'
    },
    {
        default: 'Сентябрь',
        special: 'Сентября'
    },
    {
        default: 'Октябрь',
        special: 'Октября'
    },
    {
        default: 'Ноябрь',
        special: 'Ноября'
    },
    {
        default: 'Декабрь',
        special: 'Декабря'
    },
];