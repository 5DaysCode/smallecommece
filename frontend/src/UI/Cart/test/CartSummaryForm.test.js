
import {
    queryByText,
    render,
    screen,
    waitForElementToBeRemoved,
} from '@testing-library/react';

import CartSummaryForm from '../CartSummaryForm';
import userEvent from '@testing-library/user-event';


test('Conditions on initiation', () => {
    render(<CartSummaryForm />);

    const checkbox = screen.getByRole('checkbox', {
        name: /these conditions and terms/i,
    });

    expect(checkbox).not.toBeChecked();
    const confirmButton = screen.getByRole('button', { name: /proceed to chekout/i });
    expect(confirmButton).toBeDisabled();
});



test('Button should be enabled by checkbox on first click , and disabled on second', () => {
    render(<CartSummaryForm />);

    const checkbox = screen.getByRole('checkbox', {
        name: /these conditions and terms/i,
    });


    const confirmButton = screen.getByRole('button', { name: /proceed to chekout/i });

    userEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    userEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();

});

test('when hoover over popover , then popover responds', async() => {

    render(<CartSummaryForm />);

    // on init popover is hidden
    const NoPopoverZero = screen.queryByText(
        /Your Master Card is gonna be hijacked , dont push any off proceed buttons /i
    );
    expect(NoPopoverZero).not.toBeInTheDocument();


    //on mouseover hover popover activates and pops - up
    const conditionsAndTerms = screen.getByText(/these conditions and terms/i);
    userEvent.hover(conditionsAndTerms);
    
    const popover = screen.getByText( /Your Master Card is gonna be hijacked , dont push any off proceed buttons /i);
    expect(popover).toBeInTheDocument();

    //on mouse out popover disappears 
    userEvent.unhover(conditionsAndTerms);
   await waitForElementToBeRemoved(() => screen.queryByText(/Your Master Card is gonna be hijacked , dont push any off proceed buttons /i));
   
})