import React , {useState} from 'react';
import './Report.css';
import { Button } from 'carbon-components-react';
import 'carbon-components/css/carbon-components.min.css';
import BackButton from './BackButton';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import EW from './EW';

function Report() {

    const [ getWage, setgetWage] = useState(false);

    if (getWage === true){
        return(
          <Router>
          <Redirect to={{
            pathname: '/Report/EW' , 
          }}
          /><Route 
          path="/Report/EW" component={EW}/></Router>
        );
      }

    return (
        <div>
            <BackButton />
            <header className="Report-header">
                <Button
                onClick={() => setgetWage(true)}>
                    Employee Report
               </Button> 
               &nbsp;
               <Button>
                    Sales Report
               </Button>
            </header>
        </div>
    );
}

export default Report;
