import React, { Component } from "react";
import shortid from "shortid";

import NullView from "./views/NullView";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadedComponents: [],
      components: []
    };
  }

  addView = async viewName => {
    // Don't load more than once.
    if (this.state.loadedComponents.includes(viewName)) return;

    console.log(`Loading ${viewName} view...`);
    
    import(`./views/${viewName}.js`)
      .then(Component => {
        console.log("Component.default", Component.default, this.props.data);

        this.setState({
          loadedComponents: this.state.loadedComponents.concat(viewName),
          components: this.state.components.concat(
            <Component.default
              key={shortid.generate()}
              data={this.props.data}
            />
          )
        });
      })
      .catch(error => {
        console.log(`${viewName} is not loaded...`);

        this.setState({
          loadedComponents: this.state.loadedComponents.concat(viewName),
          components: this.state.components.concat(
            <NullView key={shortid.generate()} />
          )
        });
      });
  };

  handleShowTableChange = async event => {
    await this.addView("TableView");
  };

  handleShowGraphChange = async event => {
    await this.addView("GraphView");
  };

  handleNullGraphChange = async event => {
    await this.addView("NullView");
  };

  render() {
    const { components } = this.state;

    return (
      <div className="App">
        <div className="buttons">
          <div>
            <button id="table" onClick={this.handleShowTableChange}>
              Show Table
            </button>
          </div>
          <div>
            <button id="graph" onClick={this.handleShowGraphChange}>
              Show Graph
            </button>
          </div>
          <div>
            <button id="null" onClick={this.handleNullGraphChange}>
              Not yet implemented...
            </button>
          </div>
        </div>
        <div className="views">
          {components.length === 0 ? (
            <div>Nothing to display...</div>
          ) : (
            components
          )}
        </div>
      </div>
    );
  }
}

export default App;
