import React from 'react';
import classNames from 'classnames'


const Button = (props) => {
  const {children, outline, className, click} = props
  return (
    <button
      className={classNames('button', className, {
        'button--outline': outline,
      })}
      onClick={() => click ? click() : false}
    >
      {children}
    </button>
  )
}
export default Button
