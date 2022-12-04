import PropTypes from 'prop-types';

import { useFetchGifs } from '../../hooks';

import { GifsItem } from '../Gif/index';


export function GifsList({ category }) {

 const { images, isLoading } = useFetchGifs( category );
  
 return(
  <>
    <h3>{ category }</h3>
    {
      isLoading  && ( <h2>Loading...</h2> )
    }
    <div className='card-grid'>
      {
        images.map( (image) => (
          <GifsItem
            key={image.id}
            {...image}
          />
        ))
      }
    </div>
  </>
 )
}

GifsList.prototype = {
  category: PropTypes.string.isRequired,
};
