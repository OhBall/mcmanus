import React from 'react';

export default ({name, price, description}) => {
  const descriptionElement = description ? <h4>{description}</h4> : null 
  return (
    <div className="menu-item">
      <div className="name-price">
        <h3>{name}</h3>
        <h4>{price}</h4>
      </div>
      {descriptionElement}
    </div>
  );
}