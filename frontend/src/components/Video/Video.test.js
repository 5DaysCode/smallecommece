import {render, screen , fireEvent}  from "@testing-library/react";
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';

import Video from './Video';


test('button have a right initial and end text' , () => {

 render(<Video />);
  const wrapper = shallow(<Video/>);
  const colorButton = screen.getByRole('button');  
  expect(colorButton.textContent).toBe('Discover popular products');
  //click button
  fireEvent.click(colorButton);
   
  //expect the button text to be changed
  expect(colorButton.textContent).toBe('Sorry this function is not implemented');
  
 });



