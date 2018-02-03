'use strict';

/*много вариантов решения. например
* 0. Создать обертку для Item и библиотеку цветов. Вероятно, они всегда одинаковыми будут, но в случае изменения логики выбора цвета - будем менять компонент ColoredItem
* 1. создать компонент Catalog
* 2. создать функцию getCatalogContent. Практически то же самое. что лучше?
*/

const colorLib = {
  'unisex': 'black',
  'male': 'blue',
  'female': 'orange'
};

const ColoredItem = ({item}) => {
  return(
    <Item color={colorLib[item.type]} item={item}/>
  )
};

const Catalog = ({items}) => {
  return (
    <main>
      {items.map(item => {
        return <ColoredItem item={item}/>
      })}
    </main>
  )
};

//пример функции
// const getCatalogContent = (items) => {
//   return items.map(item => {
//     return <ColoredItem item={item}/>
//   });
// };

const App = ({items}) => (
  <Catalog items={items}/>

  //пример использования 2го варианта
  // <main>
  // {getCatalogContent(items)}
  // </main>
);
