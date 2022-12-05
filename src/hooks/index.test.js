import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "."

describe('test in hooks useFetchGifs', () => {
  test('should return the initial state', () => {

    const { result } = renderHook( () => useFetchGifs('developer'));
    const { images, isLoading } = result.current;

    expect( images.length ).toBe(0);
    expect( isLoading ).toBeTruthy();
  });

  test('should return an array of images and isLoading false', async() => {
    
    const { result } = renderHook( () => useFetchGifs('developer'));

    await waitFor(
      // callback de una intruccion que regrese un valor booleano 
      () => expect( result.current.images.length ).toBeGreaterThan(0),
    );

    const { images, isLoading } = result.current;
    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();
  })
});
