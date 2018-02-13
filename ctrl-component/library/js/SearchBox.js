const SearchBox = ({value, filterBooks}) => {
    return (
        <input
            type="text"
            placeholder="Поиск по названию или автору"
            value={value}
            onChange={(e) => {
                console.log(e.currentTarget.value);
                if (typeof filterBooks !== 'function')
                    return;
                filterBooks(e.currentTarget.value);
            }}
        />
    );
};