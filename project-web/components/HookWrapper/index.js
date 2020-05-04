import { Fragment } from 'react';

function HookWrapper  ({ children })  {
  console.log('Hookwrapper');
  
  return (
    <Fragment>
      {children}
    </Fragment>
  );

}

export default HookWrapper;
