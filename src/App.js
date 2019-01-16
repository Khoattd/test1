import React, {Component} from 'react';
import './css/App.css';
import Chart from './components/chart'

import Map from './Map';
import Table from './components/table';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
        };
    }
    componentDidMount() {
        fetch('https://hidden-waters-43067.herokuapp.com/tasks').then(
        resp => resp.json()
        ).then(repos => {

            this.setState({results: repos});
        }).catch(ex => {
            console.error(ex);
        })
    }
    render() {
        const {results} = this.state;
        return (
            <div className="App">
                <Chart data={results}   />
                <Map response={results}  />
                <Table response = {results} /> 
            </div>
        );
    }
}
export default App;
