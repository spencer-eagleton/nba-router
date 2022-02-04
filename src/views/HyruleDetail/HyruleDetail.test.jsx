import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { monsterData } from '../../utils/mockData';
import HyruleDetail from './HyruleDetail';
import { MemoryRouter, Route } from 'react-router-dom';

const server = setupServer(
  rest.get(
    'https://botw-compendium.herokuapp.com/api/v2/entry',
    (req, res, ctx) => {
      return res(ctx.json(monsterData));
    }
  )
);

beforeAll(() => server.listen());

afterAll(() => server.close());

test.only('renders monster detail', async () => {
  render(
    <MemoryRouter initialEntries={['/entry/156']}>
      <Route path="/entry/:entry">
        <HyruleDetail />
      </Route>
    </MemoryRouter>
  );

  const monsterName = await screen.findByText(
    /cursed bokoblin/i,
    {},
    { timeout: 3000 }
  );
  screen.debug();

  expect(monsterName).toBeInTheDocument();
});
