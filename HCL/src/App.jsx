import { useState } from 'react'
import './App.css'
import PiChart from './common/PiChart'
import CardOverview from './common/CardOverview'
import BasicTabs from './common/BasicTabs'
import CustomTable from './common/CustomTable'
import PatientDashboard from './components/features/patientDashboard'
import DoctorsDashboard from './components/features/DoctorsDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    {/* <PiChart data={[
      { name: 'Steps', value: 400, fill: '#0088FE' },
      { name: 'Sleep', value: 300, fill: '#00C49F' },
      { name: 'Calories', value: 300, fill: '#FFBB28' },
      { name: 'Heart Rate', value: 200, fill: '#FF8042' },
    ]} />
    <CardOverview  count={2000} userThreshold={10000} />
   <BasicTabs />
   <CustomTable /> */}
   <PatientDashboard />
   <DoctorsDashboard />
    </div>
  )
}

export default App
