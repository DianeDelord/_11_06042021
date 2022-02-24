import { useState } from 'react';
import arrowLeft from "../visuels/arrow_left.svg";
import arrowRight from "../visuels/arrow_right.svg";

const Gallery = ({ pictures }) => {
  const [img, setImg] = useState(pictures[0]);
  const [imgIndex, setImgIndex] = useState(0);

  function handleClick(click) {
    let index = imgIndex + click;

    if (imgIndex + click > pictures.length - 1) {
      index = 0;
    }
    if (imgIndex + click < 0) {
      index = pictures.length - 1;
    }
    setImg(pictures[index]);
    setImgIndex(index);
  }

  return (
    <div className='gallery' >
      <img src={img} alt='rental picture' className='gallery__img' />
      {pictures.length > 1 && (
        <div>
          <button type='button' className='gallery__arrow left' onClick={() => handleClick(-1)}>
          <img src={arrowLeft} alt="previous slide" />
          </button>
          <button type='button' className='gallery__arrow right' onClick={() => handleClick(1)}>
          <img src={arrowRight} alt="next slide" />
          </button>
          <span className='gallery__count'>
            {imgIndex + 1}/{pictures.length}
          </span>
        </div>
      )}
    </div>)
};

export default Gallery;