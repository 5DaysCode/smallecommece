
import {
    render,
    screen,
    waitForElementToBeRemoved,
  } from '@testing-library/react';
  import CartSummaryForm from '../CartSummaryForm';
  import userEvent from '@testing-library/user-event';


test('Conditions on initiation' , () => {
    render(<CartSummaryForm/>);     
    
      const checkbox = screen.getByRole('checkbox', {
           name: /these conditions and terms/i,
     });
      
      expect(checkbox).not.toBeChecked();
      const  confirmButton = screen.getByRole('button', {name: /proceed to chekout/i});
       expect(confirmButton).toBeDisabled();
});



test('Button should be enabled by checkbox on first click , and disabled on second', () => {
       render(<CartSummaryForm/>);
    
  const checkbox = screen.getByRole('checkbox', {
             name:/these conditions and terms/i,
  }); 
  
  
 const  confirmButton = screen.getByRole('button', {name: /proceed to chekout/i});

   userEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    userEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();

});