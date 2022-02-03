import { render, screen } from '@testing-library/react';

import HyruleList from './HyruleList';
import { MemoryRouter, Route } from 'react-router-dom';

test('renders monsters', async () => {
  render(
    <MemoryRouter initialEntries={['/category/monsters']}>
      <Route path="/category/:category">
        <HyruleList />
      </Route>
    </MemoryRouter>
  );

  const monsterName = await screen.findByText(
    /waterblight ganon/i,
    {},
    { timeout: 3000 }
  );
  screen.debug();

  expect(monsterName).toBeInTheDocument();
});
