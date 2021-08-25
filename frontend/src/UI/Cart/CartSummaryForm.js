
import React , {useState} from  'react';
import Form from  'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import  OverlayTrigger  from 'react-bootstrap/OverlayTrigger';



export default function CartSummaryForm() {
   
    const [cChecked , setcChecked] = useState(false);

    
    const popover = (
        <Popover id="termsandconditions-popover">
            Your Master Card is gonna be hijacked , dont push any off proceed buttons Ö) ... 
        </Popover>
      );  
    
    const checkboxLabel = (
        <span>
             I acknowledge to 
             <OverlayTrigger placement="right" overlay={popover}>
                   <span style={{color: 'blue'}}>these conditions and terms</span>
             </OverlayTrigger>
        </span>

     )
    
    return( 
    <>
       <Form>
            <Form.Group controlId="conditions-and-terms">
                <Form.Check 
                  type="checkbox"
                  checked = {cChecked}
                  onChange={(e) => setcChecked(e.target.checked)}
                  label={checkboxLabel}
                
                />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!cChecked}>
                Proceed to chekout
            </Button>
       </Form>    
    </>

    );     



}


