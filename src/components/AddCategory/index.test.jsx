import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "."

describe('test in AddCategory', () => {
  test('should change the value of the input', () => {
    const inputValue = 'developer';
    render(<AddCategory onNewCateory={jest.fn()} />);
    const input = screen.getByRole('textbox');

    fireEvent.input( input, {target: {value: inputValue}} );
    expect( input.value ).toBe('developer');
  });

  test('should call onNewCategory if the input has a value', () => {
    const inputValue = 'developer';
    const onNewCateory = jest.fn();
    render(<AddCategory onNewCateory={onNewCateory} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    
    fireEvent.input( input, {target: {value: inputValue}} );
    fireEvent.submit( form );

    expect( input.value ).toBe('');
    expect( onNewCateory ).toHaveBeenCalledWith( inputValue );
  })

  test('should not call onNewCategory if the input box is empty', () => {
    const onNewCateory = jest.fn();
    render(<AddCategory onNewCateory={onNewCateory} />);

    const form = screen.getByRole('form');
    
    fireEvent.submit( form );

    //la funcion no fue llamada 
    expect( onNewCateory ).toHaveBeenCalledTimes(0);
   // tambien podemos usar la negacion expect( onNewCateory ).not.toHaveBeenCalled();
  })
});
