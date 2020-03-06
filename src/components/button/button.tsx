import * as React from 'react';
import './button';

class Button extends React.Component<IProps, {}> {
    constructor(props: {}) {
        super(props);
    }
    render() {
        return(
            <div>
                <button className={this.props.bClass || 'primary'}>{this.props.text}</button>
            </div>
        );
    }
}

interface IProps {
    id ?: string;
    text ?: string;
    bClass ?: string;
}


export default Button;
