import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { monsterData } from '../../utils/mockData';
import HyruleDetail from './HyruleDetail';
import { MemoryRouter, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Home from '../Home/Home';

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

test('renders cursed bokoblin detail', async () => {
  render(
    <MemoryRouter initialEntries={['/entry/156']}>
      <Route path="/entry/:entry">
        <HyruleDetail />
      </Route>
    </MemoryRouter>
  );

  const detailHeader = await screen.findByText(
    /hyrule detail/i,
    {},
    { timeout: 3000 }
  );
  expect(detailHeader).toBeInTheDocument();

  const monsterName = await screen.findByText(
    /cursed bokoblin/i,
    {},
    { timeout: 3000 }
  );

  expect(monsterName).toBeInTheDocument();
});

test('renders hyrule detail header', async () => {
  render(
    <MemoryRouter initialEntries={['/entry/156']}>
      <Route path="/entry/:entry">
        <HyruleDetail />
      </Route>
    </MemoryRouter>
  );

  const detailHeader = await screen.findByText(
    /hyrule detail/i,
    {},
    { timeout: 3000 }
  );
  expect(detailHeader).toBeInTheDocument();
});

test('back to home button appears, and then takes user to home view', async () => {
  render(
    <MemoryRouter initialEntries={['/entry/156']}>
      <Route path="/entry">
        <HyruleDetail />
      </Route>
    </MemoryRouter>
  );

  const bthButton = await screen.findByRole('button', {}, { timeout: 3000 });
  expect(bthButton).toBeInTheDocument();

  userEvent.click(bthButton);

  render(
    <MemoryRouter initialEntries={['/']}>
      <Route path="/">
        <Home />
      </Route>
    </MemoryRouter>
  );
  const homeTxt = await screen.findByText(/home/i);
  expect(homeTxt).toBeInTheDocument();
});
