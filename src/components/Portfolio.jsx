import React from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import '../App.css';

const filters = ["All", "Websites", "Flayers", "Business Cards"];

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "All",
    };
  }

  render() {
    return (
      <div className="container">
        <Toolbar
          filters={filters}
          selected={this.state.selected}
          onSelectFilter={(event) => this.setState({ selected: event })}
        />
        <ProjectList selected={this.state.selected} />
      </div>
    )
  }
}

export default Portfolio;
