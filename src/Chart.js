import React, {
  useContext
} from 'react';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory';

import CurrentContext from './CurrentContext';
import CompanyContext from './CompanyContext';

const Chart = () => {
  const [companyState] = useContext(CompanyContext);
  const [currentState, setCurrentState] = useContext(CurrentContext);

  return (
    <VictoryChart
      theme={VictoryTheme.material}
    >
      <VictoryBar
        style={{ data: { fill: "#c43a31" } }}
        alignment="start"
        data={companyState.data}
        y="PD"
        events={[{
          target: "data",
          eventHandlers: {
            onMouseOver: () => {
              return [{
                mutation: ({datum}) => {
                  setCurrentState(datum);
                }
              }];
            }
          }
        }]}
      />
    </VictoryChart>
  );
};

export default Chart;
