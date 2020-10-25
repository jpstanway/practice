import { useState } from 'react';
import './App.css';

import Page1 from './components/Page1';
import AsyncComponent from './components/AsyncComponent';

function App() {
  const [route, setRoute] = useState('page1');

  const onRouteChange = (route) => {
    setRoute(route);
  };

  const renderRoutes = () => {
    if (route === 'page1') {
      return <Page1 onRouteChange={onRouteChange} />;
    } else if (route === 'page2') {
      const AsyncPage2 = AsyncComponent(() => import('./components/Page2'));
      return <AsyncPage2 onRouteChange={onRouteChange} />;
    } else if (route === 'page3') {
      const AsyncPage3 = AsyncComponent(() => import('./components/Page3'));
      return <AsyncPage3 onRouteChange={onRouteChange} />;
    }
  };

  return (
    <>
    {renderRoutes()}
    </>
  );
}

export default App;
