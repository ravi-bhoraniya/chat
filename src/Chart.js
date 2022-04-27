import react, { useState, useEfect } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

function Chart(props) {

      const data = Array.isArray(props.data) == true && props.data.length > 0 ? props.data : [{ title: 'All', value: 100, color: '#e1e1e1' }];
      const style = props.style ? props.style : { width: 150 };

      return (
            <>
                  <PieChart data={data} style={style} />
            </>
      );

}

export default Chart;