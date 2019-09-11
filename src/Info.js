import React, { useContext } from 'react';

import CurrentContext from './CurrentContext';
import CompanyContext from './CompanyContext';

const Info = () => {
  const [companyState] = useContext(CompanyContext);
  const [currentState] = useContext(CurrentContext);

  return (
    <aside className="App__info__table">
      <div>
        <b>
          <p>Name:</p>
          <p>Id:</p>
          <p>Industry:</p>
          <p>Country:</p>
          <p>Region:</p>
          <p>PD:</p>
          <p>PDMedianProxyBps:</p>
          <p>Rating:</p>
          <p>PDContributionCount:</p>
          <p>SP:</p>
        </b>
      </div>
      <div>
        <p>{companyState.entity.name}</p>
        <p>{companyState.entity.id}</p>
        <p>{companyState.entity.industry}</p>
        <p>{companyState.entity.country}</p>
        <p>{companyState.entity.region}</p>
        <p>{currentState.PD}</p>
        <p>{currentState.PDMedianProxyBps}</p>
        <p>{currentState.Rating}</p>
        <p>{currentState.PDContributionCount}</p>
        <p>{currentState.SP}</p>
      </div>
    </aside>
  );
};

export default Info;
