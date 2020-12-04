import React from 'react'
import User from './User'
import Input from './Input'
import Followers from './Followers'

import axios from 'axios'
import { render } from '@testing-library/react'

class App extends React.Component {
    state = {
        user: null,
        query: '',
        followers: [],
        error: null
    }

    componentDidMount() {
        const baseUrl = 

    }

}

inputHandler = e => this.setState({})

submitHandler = e => {

}

clickHandler = id => {

}

render() {
    if (this.state.user) {
        return (
            <div className= 'App'>
                <header className= 'App-header'>
                    <Input error= {this.state.error} submit= {this.submitHandler} value= {this.state.query} change={this.inputHandler} />
                    <User main={true} user= {this.state.user}/>
                    <Followers click= {this.clickHandler} followers= {this.state.followers} />
                </header>
            </div>
        )
    } else if (this.state.error) {
        return <h1>{this.state.error}</h1>
    } else {
        return <h1>Loading...</h1>
    }
}



export default App;
