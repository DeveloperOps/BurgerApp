import React from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

function App() {
  return (
    <Layout>
      <div>
        <BurgerBuilder/>
      </div>
    </Layout>
  );
}

export default App;
