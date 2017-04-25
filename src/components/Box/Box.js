import React from 'react';
import './Box.css';

let Box = ({col, children, className, style}) => {
  var styles = col ? 'box-col' : 'box-row';
  styles += className ? ' ' + className : '';

  return (
    <div className={styles} style={style}>
      {children}
    </div>
  )
};

export default Box;
