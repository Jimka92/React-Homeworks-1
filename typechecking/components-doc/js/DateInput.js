'use strict';

const DateInput = props => {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input type="text" className="form-control" name={props.name} onChange={props.onChange}
                   value={props.value} required={props.required} placeholder="YYYY-MM-DD"/>
        </div>
    )
};

DateInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

DateInput.defaultProps = {
    value: getFormattedDateToday()
};

function getFormattedDateToday() {
    const date = new Date();
    const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = (date.getDate() + 1) < 10 ? `0${date.getDate() + 1}` : date.getDate() + 1;
    return `${date.getFullYear()}-${month}-${day}`;
}






