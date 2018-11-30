import React from 'react';

const Category = (props) => {
  return (
    <div>
      <div>{props.category.name}</div>
    </div>
  );
};

export default Category;