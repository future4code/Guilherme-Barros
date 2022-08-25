import React from 'react'
import { Cell, Legend, Pie, PieChart } from 'recharts'

export const Graphic = ({data}) => {

  function gerar_cor_hexadecimal()
  {
    return '#' + parseInt((Math.random() * 0xFFFFFF))
      .toString(16)
      .padStart(6, '0');
  }
  

  return (
  
  <PieChart width={400} height={280} >

<Pie
          data={data}
          cx={130}
          cy={130}
          innerRadius={50}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="participation"
        label
        >
          {data.map((entry, index) => {
            let color=gerar_cor_hexadecimal();
            return <Cell key={`cell-${index}`} fill={color} />
          })}
        </Pie>
        <Legend layout='vertical' align="right" 
        height={220} verticalAlign='middle' 
        iconSize={20} iconType='square'
      />
  </PieChart>
  )
}
