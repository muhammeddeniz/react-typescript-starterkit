import * as React from 'react';

interface IProps {
    name?: string;
}


const Icon: React.FC<IProps> = ({
    name = 'home'
}) => {

     return(
        <>
        {/* tslint:disable-next-line: prefer-template */}
        <i className={'glyphicon glyphicon-' + name} />
        </>
    );
};

export default Icon;
