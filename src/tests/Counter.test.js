// import necessary react testing library helpers here
// import the Counter component here
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../components/App';
import Counter from '../components/Counter';
beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent(/0/i);
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const addButton = screen.getByText("+");
    
  fireEvent.click(addButton);
  const countVal = screen.getByText(/1/i);
  expect(countVal).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const subButton = screen.getByText("-");
    
  fireEvent.click(subButton);
  const countVal = screen.getByText(/-1/i);
  expect(countVal).toBeInTheDocument();
});
