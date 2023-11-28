import React from 'react';
import '../App.css';

function Toolbar({ filters, selected, onSelectFilter }) {
    return (
      <ul className="container__toolbar toolbar">
        {filters.map((item) => (
          <li key={item} onClick={() => onSelectFilter(item)}
          className={item === selected ? "toolbar__item-select" : "toolbar__item"}>
            {item}
          </li>
        ))}
      </ul>
    )
}

export default Toolbar;
