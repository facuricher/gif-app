import { render, screen } from "@testing-library/react"
import { Home } from "."

describe('test in <Home />', () => {
  test('must match snapshot', () => {
    const { container } =  render( <Home />);
    expect( container ).toMatchSnapshot();
  });
});
