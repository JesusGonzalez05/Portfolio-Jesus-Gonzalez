import React from 'react';
import './index.css';
import 'bulma/css/bulma.min.css';

// We import our Welcome component from our components folder so that we can eventually return it.
import Nav from './components/Nav/index';

// Inside our App component, we have a return method that contains all the JSX we want to render to the screen.
// In this example, we have a parent `div` that references the Welcome component that we imported at the top.
function App() {
  return (
    <div className='index main' >
      <Nav />
    </div>
  );
}
export default App;