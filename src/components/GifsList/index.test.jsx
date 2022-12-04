import { render, screen } from '@testing-library/react';
import { GifsList } from '.';
import { useFetchGifs } from '../../hooks/index';

jest.mock('../../hooks/index');

describe('test in <GifsList />', () => {

  const category = 'developer';
 test('should show loading and category at startup', () => {

  useFetchGifs.mockReturnValue({
    images: [],
    isLoading: true
  });

  render( <GifsList category={category} />);
  expect( screen.getByText('Loading...')).toBeInTheDocument();
  expect( screen.getByText( category )).toBeInTheDocument();
 });

 test('the items should be shown with the gifs', () => {
  const gifs = [
    {
      id: '124',
      title: 'hola',
      url: 'https://hola.com/hola.jpng',
    },
    {
      id: '125',
      title: 'mundo',
      url: 'https://mundo.com/mundo.jpng',
    },
  ]
  useFetchGifs.mockReturnValue({
    images: gifs,
    isLoading: false
  });

  render( <GifsList category={category} />);
  expect( screen.getAllByRole('img').length).toBe(2);

 });
});
