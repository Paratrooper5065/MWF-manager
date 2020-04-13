import React  from 'react';
import { Button } from 'carbon-components-react';
import 'carbon-components/css/carbon-components.min.css';
import { useHistory } from 'react-router-dom'


function BackButton() {
    const history = useHistory();
    
    function handleClick(){
        history.push("")
        history.go("");
    }

      
    return (
            <Button
            size="small"
            onClick={handleClick}
            > Back </Button>
    );
}

export default BackButton;