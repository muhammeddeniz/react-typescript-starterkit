import * as React from 'react';
import './cardStyle';

interface Iprops {
    name?: string;
    content?: string;
    date?: string;
}

// tslint:disable-next-line: class-name
interface myState {
    stateDelete: string;
}

const Card: React.FC<Iprops> = ({
    name,
    content,
    date = '12.03.233'
}: Iprops,
{
    stateDelete = 'false'
}: myState) => {
    return (
        <div className="card">
            <p className="name">{name}</p>
            <p className="content">{content}</p>
            <p className="date">{date}</p>
            {/* use State => {stateDelete} */}
        </div>
    );
};

export default Card;
