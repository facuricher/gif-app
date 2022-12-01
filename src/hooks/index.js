import { useEffect, useState } from 'react';

import { getGifs } from '../services/getGifs';

export function useFetchGifs( category ) {
  
  const [ images, setImages ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
 
  useEffect(() => {
    getGifs(category)
      .then( newImages => setImages(newImages) );
      setIsLoading(false);
  }, []);

  return {
    images,
    isLoading
  }
}
