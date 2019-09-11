import React, {
  useEffect,
  useContext
} from 'react';
import CurrentContext from './CurrentContext';
import CompanyContext from './CompanyContext';

const Table = () => {
  const [companyState, setCompanyState] = useContext(CompanyContext);
  const [currentState, setCurrentState] = useContext(CurrentContext);

  async function requestData() {
    try {
      const data = await fetch('./api/data.json');
      const parsedData = await data.json();
      return parsedData;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    requestData().then(data => {
      setCurrentState(data[0].response.data[0]);
      setCompanyState(data[0].response);
    })
  }, [setCurrentState, setCompanyState]);

  return (
    <table className="App__table">
      <thead>
        <tr>
          <th>Number</th>
          <th>Date</th>
          <th>CBRSD</th>
          <th>DepthDecile</th>
          <th>EL</th>
          <th>FitchLongTermRating</th>
          <th>LGD</th>
          <th>LGDContributionCount</th>
          <th>PD</th>
          <th>PDContributionCount</th>
          <th>PDMedianProxyBps</th>
          <th>PDSkew</th>
          <th>Rating</th>
          <th>SP</th>
        </tr>
      </thead>
      <tbody>
        {
          companyState.data.map((record, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{record.date}</td>
              <td>{record.CBRSD}</td>
              <td>{record.DepthDecile ||  '-'}</td>
              <td>{record.EL}</td>
              <td>{record.FitchLongTermRating || '-'}</td>
              <td>{record.LGD}</td>
              <td>{record.LGDContributionCount}</td>
              <td>{record.PD}</td>
              <td>{record.PDContributionCount}</td>
              <td>{record.PDMedianProxyBps}</td>
              <td>{record.PDSkew || '-'}</td>
              <td>{record.Rating}</td>
              <td>{record.SP}</td>
            </tr>
            )
          )
        }
      </tbody>
    </table>
  );
};

export default Table;
