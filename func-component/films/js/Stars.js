'use strict';

function wrt(d) {
    console.log(d);
}

function Stars({count}) {
  if(!count || count < 1 || count > 5) return;
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(<Star/>);
  }
  return (
      <ul className="card-body-stars u-clearfix">
          {stars}
      </ul>
  );
}
