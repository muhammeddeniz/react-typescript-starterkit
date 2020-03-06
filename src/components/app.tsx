import * as React from 'react';
import { Button } from './button/index';
import { Card } from './card/index';
import { Counter } from './counter/index';
import { List } from './list/index';
import { Footer } from './templates/footer/index';
import { Header } from './templates/header/index';

export default class App extends React.Component<any, any> {
     temp = 'Functional  ödsaö lkjdslkaj dkjasl kdjlaksjdlkjslakjdslkjlkasj dslkja skjdlk ajlkdjlkasjdklsa jkldsjlksadkl s sadkljaksdl jklasksd jlas jkasdjklcomponents are my most favourite thing in React. They are simple, purely functional and super easy to reason about. The following shows an example of a functional component with some typed properties.';



    render() {
        return(
            <div>
                <Header pageTitle="Deneme Sayfasi" />
                <Footer />
            </div>
        );
    }
}
