import React from 'react'
import CardOverview from '../../common/CardOverview';
import steps from '../../assets/steps.png';
import sleep from '../../assets/sleep.png';
import heart from '../../assets/heart.png';
import water from '../../assets/water.png';
import PiChart from '../../common/PiChart';
import BasicTabs from '../../common/BasicTabs';


function PatientDashboard() {
  const cardData = [
    { title: 'Steps', count: 9500, userThreshold: 10000, icon: steps },
    { title: 'Calories', count: 1200, userThreshold: 2500, icon: heart },
    { title: 'Sleep', count: 2, userThreshold: 10, icon: sleep },
    { title: 'Water Intake', count: 45, userThreshold: 60, icon: water },
  ];

  return (
    <React.Fragment>
        <h3>Patient Dashboard</h3>
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', minHeight: '500px', gap: '24px' }}>
      <div style={{ flex: 8, display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'flex-start' }}>
        {cardData.map((item) => (
          <CardOverview key={item.title} {...item} />
        ))}
      </div>
      <div style={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
        <PiChart data={[
          { name: 'Steps', value: 400, fill: '#0088FE' },
          { name: 'Sleep', value: 300, fill: '#00C49F' },
          { name: 'Calories', value: 300, fill: '#FFBB28' },
          { name: 'Heart Rate', value: 200, fill: '#FF8042' },
        ]} />
      </div>
    </div>
    <BasicTabs />
    </React.Fragment>
  );
}

export default PatientDashboard