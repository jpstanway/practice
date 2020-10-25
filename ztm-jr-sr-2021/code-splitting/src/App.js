import React, { useState, Suspense } from 'react';
import './App.css';

import Page1 from './components/Page1';
//import AsyncComponent from './components/AsyncComponent';
const Page2Lazy = React.lazy(() => import('./Components/Page2'));
const Page3Lazy = React.lazy(() => import('./Components/Page3'));

function App() {
  const [route, setRoute] = useState('page1');

  const onRouteChange = (route) => {
    setRoute(route);
  };

  const renderRoutes = () => {
    // Async component method
    // if (route === 'page1') {
    //   return <Page1 onRouteChange={onRouteChange} />;
    // } else if (route === 'page2') {
    //   const AsyncPage2 = AsyncComponent(() => import('./components/Page2'));
    //   return <AsyncPage2 onRouteChange={onRouteChange} />;
    // } else if (route === 'page3') {
    //   const AsyncPage3 = AsyncComponent(() => import('./components/Page3'));
    //   return <AsyncPage3 onRouteChange={onRouteChange} />;
    // }

    // React lazy component
    if (route === 'page1') {
      return <Page1 onRouteChange={onRouteChange} />;
    } else if (route === 'page2') {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Page2Lazy onRouteChange={onRouteChange} />
        </Suspense>
      );
    } else if (route === 'page3') {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Page3Lazy onRouteChange={onRouteChange} />
        </Suspense>
      );
    }
  };

  return (
    <>
    {renderRoutes()}
    </>
  );
}

export default App;
