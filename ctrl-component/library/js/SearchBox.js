const handleChange = (event, filterBooks) =>
  Object.prototype.toString.call(filterBooks) === '[object Function]' ?
    filterBooks(event.currentTarget.value) :
    null;


const SearchBox = ({value, filterBooks}) => {
  return (
    <input
      type="text"
      placeholder="Поиск по названию или автору"
      value={value}
      onChange={e => handleChange(e, filterBooks)}
    />
  );
};