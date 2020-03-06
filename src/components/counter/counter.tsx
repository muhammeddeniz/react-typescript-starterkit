import * as React from 'react';

// tslint:disable-next-line: interface-over-type-literal
type myState = {
    count: number,
};

class Counter extends React.Component<{}, myState> {

    componentWillMount() {
        this.setState({
            count : 0,
        });
    }

    increment = () => {

        this.setState({
            count : this.state.count + 1,
        });
    }

    decrement = () => {
        this.setState({
            count : this.state.count - 1,
        });
    }

    render() {
        return(
            <div>
                <h1>count :  {this.state.count}</h1>
                <button onClick={this.increment} >Arttır</button>
                <button onClick={this.decrement} >Azalt</button>
            </div>
        );
    }
}

export default Counter;
