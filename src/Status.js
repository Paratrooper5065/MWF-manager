import React from 'react';
import './Status.css';
import { Button } from 'carbon-components-react';
import 'carbon-components/css/carbon-components.min.css';
import BackButton from './BackButton';
function Status() {

    return (
        <div>
            <BackButton />
            <header className="Status-header">
                <div >
                    <Button>Table Status </Button> &nbsp;
                    <Button> Kitchen Status </Button>
                </div>
            </header>
        </div>
    );
}

export default Status;
