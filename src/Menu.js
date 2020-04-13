import React from 'react';
import './Menu.css'
import { Button } from 'carbon-components-react';
import 'carbon-components/css/carbon-components.min.css';
import BackButton from './BackButton';

function Menu() {

    return (
        <div>
        <BackButton/>
            <header className="Menu-header">
                <div className="Menu">
                    <Button>Add </Button> &nbsp;
                    <Button> Edit </Button>
                </div>
                <div className="Menu">
                    <Button>View </Button> &nbsp;
                    <Button> Delete  </Button>
                </div>
            </header>
            </div>
    );
}

export default Menu;
