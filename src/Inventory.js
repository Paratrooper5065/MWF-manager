import React from 'react';
import './Inventory.css'
import { Button } from 'carbon-components-react';
import 'carbon-components/css/carbon-components.min.css';
import BackButton from './BackButton';

function Inventory() {

    return (
        <div>
            <BackButton />
            <header className="Inventory-header">
                <div className="Inventory">
                    <Button>Add </Button> &nbsp;
                    <Button> Edit </Button>
                </div>
                <div className="Inventory">
                    <Button>View </Button> &nbsp;
                    <Button> Delete  </Button>
                </div>
            </header>
        </div>
    );
}

export default Inventory;
