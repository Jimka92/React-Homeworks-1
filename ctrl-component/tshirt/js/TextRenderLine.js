const TextRenderLine = ({value, onChange}) => {

  const handleChange = (cb, val) => {
    if (Object.prototype.toString.call(cb) !== '[object Function]')
      return;

    val = val.toLowerCase();
    val = val.replace(/[^a-z\s]/g, '');
    cb(val);
  };


  return (
    <div className="type-text">
			<textarea
        name="text"
        id="font-text"
        cols="30"
        rows="2"
        placeholder="Введите текст для футболки"
        value={value}
        onChange={(e) => handleChange(onChange, e.currentTarget.value)}
      >
			</textarea>
    </div>
  );
};
