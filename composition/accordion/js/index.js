'use strict';

function AccordeonSection(props) {
  return(
    <section onClick={(e) => {e.currentTarget.classList.toggle('open')}} className={props.open? 'section open' : 'section'}>
      <button>toggle</button>
      <h3 className="sectionhead">{props.title}</h3>
      <div className="articlewrap">
        <div className="article">
          {props.children}
        </div>
      </div>
    </section>
  );
}

function Accordeon(props){
  return(
    <main className="main">
      <h2 className="title">{props.title}</h2>
      {props.children}
    </main>
  );
}

