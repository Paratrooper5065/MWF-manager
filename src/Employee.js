import React from 'react';
import './Employee.css';
import { Button } from 'carbon-components-react';
import 'carbon-components/css/carbon-components.min.css';
import BackButton from './BackButton';

function Employee() {

    return (
        <div>
            <BackButton />
            <header className="Employee-header">
                <div className="Employee">
                    <Button
                    >Add </Button> &nbsp;
                    <Button> Edit </Button>
                </div>
                <div className="Employee">
                    <Button>View </Button> &nbsp;
                    <Button> Delete  </Button>
                </div>
            </header>
        </div>
    );
}

export default Employee;
