import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the start button', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const startButton = screen.getByRole('button', { name: /start/i });
  expect(startButton).toBeInTheDocument();
});
