import React from 'react';
import classNames from 'classnames';

interface Props {
    className?: string;
}

const Container:React.FC<React.PropsWithChildren<Props>> = ({className, children}) => {
  return (
    <div className={classNames('container', className)}>{children}</div>
  )
}

export default Container;