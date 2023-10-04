import React from 'react';

const GridContainer = ({ children }) => {
  return (
    <div className="grid-container">
      {children}
    </div>
  );
};

GridContainer.defaultProps = {
  className: 'grid-container',
};

export default GridContainer;