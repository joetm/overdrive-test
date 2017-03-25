import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Overdrive from 'react-overdrive';

class App extends Component {
	constructor() {
		super();
		this.state = {
			loading: true
		};
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({loading: false});
		}, 2000);
	}
    render() {
	    return (
	      <div className="App">
	        <div className="App-header">
				{this.state.loading && <Overdrive id="content"><img src={logo} className="App-logo" alt="logo" /></Overdrive>}
				{!this.state.loading && <Overdrive id="content">
					<h2>React-Overdrive Test</h2>
				</Overdrive>}
	        </div>
	      </div>
	    );
    }
}

export default App;
