const FontSelector = ({fonts, selected, onSelect}) => {

  const handleChange = (cb, font) =>
    Object.prototype.toString.call(cb) === '[object Function]' ?
      cb(font) :
      null;

  return (
    <div className="font-picker">
      {
        fonts.map(function (font, index) {
          return (
            <div className="grid center font-item">
              <input
                type="radio"
                name="font"
                value={"abc" + (index + 1)}
                id={"abc" + (index + 1)}
                onChange={() => handleChange(onSelect, font)}
                checked={font === selected}
              />
              <label
                htmlFor={"abc" + (index + 1)}
                className={"grid-" + (index + 1)}
              >
                <PictureFont
                  text='abc'
                  path={font.path}
                />
              </label>
            </div>
          )
        })
      }
    </div>
  )
};