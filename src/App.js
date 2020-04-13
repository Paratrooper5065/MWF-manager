import React, { useState } from 'react';
import Menu from './Menu';
import Employee from './Employee';
import Status from './Status';
import Inventory from './Inventory';
import Survey from './Survey';
import Report from './Report';
import './App.css';
import MWFLogo from './MWF.svg';
import { Button } from 'carbon-components-react';
import 'carbon-components/css/carbon-components.min.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';



function App() {
  /*function handleClick() {
   console.log("HELLO WORLD");
   }*/

   const [ shouldRedirectMenu, setShouldRedirectMenu] = useState(false);
   const [ shouldRedirectEmployee, setShouldRedirectEmployee] = useState(false);
   const [ shouldRedirectStatus, setShouldRedirectStatus] = useState(false);
   const [ shouldRedirectInventory, setShouldRedirectInventory] = useState(false);
   const [ shouldRedirectSurvey, setShouldRedirectSurvey] = useState(false);
   const [ shouldRedirectReport, setShouldRedirectReport] = useState(false);

   if (shouldRedirectMenu === true){
     return(
       <Router>
       <Redirect to={{
         pathname: '/Menu' , 
       }}
       /><Route 
       path="/Menu" component={Menu}/></Router>
     );
   }

   if (shouldRedirectEmployee === true){
    return(
      <Router>
      <Redirect to={{
        pathname: '/Employee' , 
      }}
      /><Route 
      path="/Employee" component={Employee}/></Router>
    );
  }

  if (shouldRedirectStatus === true){
    return(
      <Router>
      <Redirect to={{
        pathname: '/Status' , 
      }}
      /><Route 
      path="/Status" component={Status}/></Router>
    );
  }

  if (shouldRedirectInventory === true){
    return(
      <Router>
      <Redirect to={{
        pathname: '/Inventory' , 
      }}
      /><Route 
      path="/Inventory" component={Inventory}/></Router>
    );
  }

  if (shouldRedirectSurvey === true){
    return(
      <Router>
      <Redirect to={{
        pathname: '/Survey' , 
      }}
      /><Route 
      path="/Survey" component={Survey}/></Router>
    );
  }

  if (shouldRedirectReport === true){
    return(
      <Router>
      <Redirect to={{
        pathname: '/Report' , 
      }}
      /><Route 
      path="/Report" component={Report}/></Router>
    );
  }



  return (
    <Router>
    <div className="Manager">
      <header className="Manage-header">
        <img src={MWFLogo} height="350" width="600" />
        <div className="MainMenu" >
          <Button
            onClick={() => setShouldRedirectMenu(true)}
            >
            Menu
          </Button>
          &nbsp;
          <Button
            onClick={() => setShouldRedirectEmployee(true)}
            >
            Employee
          </Button>
          </div>
          <div className="MainMenu">
          <Button
            onClick={() => setShouldRedirectStatus(true)}>
            Status
          </Button>
          &nbsp;
          <Button
            onClick={() => setShouldRedirectInventory(true)}>
            Inventory
          </Button>
          </div>
          <div className="MainMenu">
          <Button
            onClick={() => setShouldRedirectSurvey(true)}>
            Survey
          </Button>
          &nbsp;
          <Button
            onClick={() => setShouldRedirectReport(true)}>
             Report
          </Button>
          </div>
       

      </header>
    </div>
    </Router>
  );
}

export default App;
