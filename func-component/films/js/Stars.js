'use strict';
function Stars({count}) {
  if(!count || count < 1 || count > 5) return null;
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(
      <li key={i}><Star/></li>
    );
  }
  return (
      <ul className="card-body-stars u-clearfix">
          {stars}
      </ul>
  );
}
