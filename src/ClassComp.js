import React, {Component} from 'react';

class ClassComp extends Component {
    constructor() {
        super()
        this.state = {
            enabled : true,
        }
        this.handleToggleState = this.handleToggleState.bind(this);
    }

    handleToggleState() {
        console.log('called')
        this.setState( {
            enabled : !this.state.enabled,
            name : 'Camille'
        })
    }

    render() {
        return (
            <div>
                {this.state.enabled && 
                <h1>ClassName Component</h1>}
                <button onClick={this.handleToggleState}>
                    {this.state.enabled ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}

export default ClassComp;