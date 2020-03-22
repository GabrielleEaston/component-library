import React from "react";
import Picture1 from '../../Images/product.png'
import HoverPicture from '../../Images/product-1.png'
const Thumbnail = props => (
  <>
    <img className='mainImage' src={Picture1} />
    <img className='hoverImage' src={HoverPicture} />
  </>
);
export default Thumbnail;