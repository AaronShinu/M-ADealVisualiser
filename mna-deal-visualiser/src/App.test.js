import { render, screen } from '@testing-library/react';
import App from './App';

test('renders M&A Deal Visualiser heading', () => {
  render(<App />);
  const heading = screen.getByText(/M&A Deal Visualiser/i);
  expect(heading).toBeInTheDocument();
});
