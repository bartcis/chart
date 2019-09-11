import React, { useState } from 'react';
import './App.scss';
import CurrentContext from './CurrentContext';
import CompanyContext from './CompanyContext';

import Chart from './Chart';
import Table from './Table';
import Info from './Info';

function App() {
  const currentHook = useState({
    date: 4,
  });
  const companyHook = useState({
    data: [
      {
        CBRSD: 0.314383562,
        DepthDecile: null,
        EL: 1.44666728,
        FitchLongTermRating: null,
        LGD: 59.5434,
        LGDContributionCount: "26",
        PD: 1,
        PDContributionCount: "116",
        PDMedianProxyBps: 3.03,
        PDSkew: null,
        Rating: "aaa",
        SP: "AAA",
        date: 20190329
      }
    ],
    entity: {}
  });

  return (
    <CompanyContext.Provider value={companyHook}>
      <CurrentContext.Provider value={currentHook}>
        <div className="App">
          <h1 className="App__title">CB Dev Test</h1>
          <section className="App__chart">
            <Chart />
            <Info className="App__info"/>
          </section>
          <Table className="App__table"/>
        </div>
      </CurrentContext.Provider>
    </CompanyContext.Provider>
  );
}

export default App;
