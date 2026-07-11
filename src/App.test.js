import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the pack browser on the home route', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByRole('heading', { name: /sample packs/i })).toBeInTheDocument();
});

test('opens a pack from its route', () => {
  render(
    <MemoryRouter initialEntries={['/pack/gabriel']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByRole('heading', { name: /gabriel's pack/i })).toBeInTheDocument();
});
