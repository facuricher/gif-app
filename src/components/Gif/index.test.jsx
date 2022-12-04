import { render, screen } from "@testing-library/react"
import { GifsItem } from "."


describe('test GifsItem', () => {

  const title = 'Patricio';
  const url = 'https://bob-esponja.com/patricio.jpng';

  test('must match the snapshot', () => {
   const { container } = render(<GifsItem title={ title } url={ url } />);
   expect( container ).toMatchSnapshot();
  })

  test('must show the image and the indicated url', () => {
    render(<GifsItem title={ title } url={ url }/>);
    const { src, alt } = screen.getByRole('img');
    expect( src ).toBe( url );
    expect( alt ).toBe( title );
   })

   test('that the title exists', () => {
    render(<GifsItem title={ title } url={ url }/>);

    expect( screen.getByText( title )).toBeTruthy();
   })
})
