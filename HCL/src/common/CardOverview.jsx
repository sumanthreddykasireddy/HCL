import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import steps from '../assets/steps.png';

const getBarColor = (percent) => {
  if (percent < 33) return '#e53935'; // red
  if (percent < 66) return '#FFD700'; // gold
  return '#43a047'; // green
};

const BorderLinearProgress = styled(LinearProgress)(({ theme, barcolor }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: barcolor,
    ...theme.applyStyles('dark', {
      backgroundColor: barcolor,
    }),
  },
}));

function CardOverview(props) {
  const count = props.count || 0;
  const userThreshold = props.userThreshold || 10000;
  const percent = Math.min(100, Math.round((count / userThreshold) * 100));
  const barcolor = getBarColor(percent);
  return (
    <Card sx={{ maxWidth: 400, margin: '24px auto', boxShadow: 3 }}>
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: 1, textAlign: 'left' }}>
            <p style={{ margin: 0, fontWeight: 600, textAlign: 'left' }}>{props.title}</p>
            <p style={{ margin: 0, textAlign: 'left' }}>Current: {count}</p>
            <p style={{ margin: 0, textAlign: 'left' }}>Goal: {userThreshold}</p>
            <BorderLinearProgress variant="determinate" value={percent} barcolor={barcolor} sx={{ width: '90%', marginTop: 4 }} />
          </div>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: '#CDDC39',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 16,
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}
          >
            <img src={props.icon} alt={props.title} style={{ width: 40, height: 40 }} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CardOverview