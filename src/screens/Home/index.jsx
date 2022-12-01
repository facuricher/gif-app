import { useState } from 'react';

import { AddCategory, GifsList } from '../../components';

export function Home() {

  const [ categories, setCategories ] = useState(['Rick and Morty']);

  const addCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  
 return(
  <>
      <h1>Find your favorite gifs</h1>
      <AddCategory 
        onNewCateory={ addCategory }
      />
      {
        categories.map( category => (
          <GifsList
            key={ category }
            category={ category } 
        />
        ))
      }
    </>
 )
}