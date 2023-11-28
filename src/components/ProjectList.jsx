import React from 'react';
import list from '../list';
import '../App.css';

function ProjectList({ selected }) {
  return (
    <ul className="container__project project">
      {list.filter((item) => item.category === selected ? item : selected === "All" ? item : false).map((el, i) => (
        <li key={i} className="project__card">
          <img src={el.img} alt={el.category} />
        </li>
      ))}
    </ul>
  )
}

export default ProjectList;
