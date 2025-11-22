import React from 'react'
import { Pie, PieChart, Tooltip, Label } from 'recharts';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function PiChart(props) {
  return (
    <Card sx={{ maxWidth: 600, margin: '32px auto', boxShadow: 3 }}>
      <CardContent>
        <PieChart width={300} height={300}>
          <Pie
            data={props.data}
            innerRadius="80%"
            outerRadius="100%"
            cornerRadius="50%"
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          >
            <Label
              value="Summary"
              position="center"
              fontSize={28}
              fontWeight="bold"
              fill="#333"
            />
          </Pie>
          <Tooltip />
        </PieChart>
      </CardContent>
    </Card>
  )
}

export default PiChart