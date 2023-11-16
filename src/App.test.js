import { render, screen } from '@testing-library/react';
import App from './App';

// Test if the app shows a loading message
test('Renders loading', () => {
  render(<App />);
  const loading = screen.getByText(/Loading.../i);
  expect(loading).toBeInTheDocument();
});

// Test if the app shows a list of invoices
test('Renders invoices', async () => {
  render(<App />);
  const invoices = await screen.findByText(/Selecciona una factura/i);
  expect(invoices).toBeInTheDocument();
});