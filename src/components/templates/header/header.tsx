import * as React from 'react';

interface Iprops {
    pageTitle: string;
}

class Header extends React.Component<Iprops, {}> {
    render() {
        return(
            <div className="header">
                <ul className="links">
                    <li >
                        <a className="link" href="">Home</a>
                    </li>
                    <li>
                        <a className="link" href="">About</a>
                    </li>
                    <li>
                        <a className="link" href="">Contact</a>
                    </li>

                    <li className="title">
                       <b> {this.props.pageTitle}</b>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;
