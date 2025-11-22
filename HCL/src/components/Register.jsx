import { useState } from 'react';
import Button from '@mui/material/Button';
import './register.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { patientFields, doctorFields } from '../constants/Constants';
const Register = () => {
    const [activeTab, setActiveTab] = useState('Patient');

    const [patientData, setPatientData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        DOB: '',
        Address: '',
        EmergencyContact: '',
    });

    const [doctorData, setDoctorData] = useState({
        licenseNumber: '',
        specialization: '',
        experience: '',
        clinicAddress: '',
    });

    const handleRegister = () => {
        const isEmpty = (obj) => {
            return Object.values(obj).every((data) => data === null || data === undefined || String(data).trim() === '');
        };

        if (activeTab === 'Patient') {
            if (isEmpty(patientData)) {
                alert('Please fill patient details before registering.');
                return;
            }
            // proceed with patient registration
            console.log('Registering patient:', patientData);
            alert('Patient registered (mock)');
            return;
        }

        // Doctor tab: require both patient and doctor details
        if (activeTab === 'Doctor') {
            if (isEmpty(patientData)) {
                alert('Please fill patient details before registering a doctor.');
                return;
            }
            if (isEmpty(doctorData)) {
                alert('Please fill doctor details before registering.');
                return;
            }
            // proceed with doctor registration
            console.log('Registering doctor with patient info:', { patientData, doctorData });
            alert('Doctor registered (mock)');
            return;
        }
    }

    


    return (

        <>
            <div className="regis_tabs">
                <Button
                    variant={activeTab === 'Patient' ? 'contained' : 'outlined'}
                    onClick={() => setActiveTab('Patient')}
                    className="regis_tab"
                >
                    Patient
                </Button>
                <Button
                    variant={activeTab === 'Doctor' ? 'contained' : 'outlined'}
                    onClick={() => setActiveTab('Doctor')}
                    className="regis_tab"
                >
                    Doctor
                </Button>
            </div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">Basic Information</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className='regis_main'>


                        {patientFields.map((field) => (
                            <div key={field.name} className='regis_container'>
                                <label className='regis_label'>{field.label}:</label>
                                <input className='regis_field'
                                    type={field.type}
                                    name={field.name}
                                    value={patientData[field.name]}
                                    onChange={(e) => setPatientData({ ...patientData, [field.name]: e.target.value })}
                                />
                            </div>
                        ))}

                    </div>
                </AccordionDetails>
            </Accordion>

            {activeTab === 'Doctor' &&
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span">Doctor Information</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='regis_main'>


                            {doctorFields.map((field) => (
                                <div key={field.name} className='regis_container'>
                                    <label className='regis_label'>{field.label}:</label>
                                    <input className='regis_field'
                                        type={field.type}
                                        name={field.name}
                                        value={doctorData[field.name]}
                                        onChange={(e) => setDoctorData({ ...doctorData, [field.name]: e.target.value })}
                                    />
                                </div>
                            ))}

                        </div>
                    </AccordionDetails>
                </Accordion>}
            <div className="regis_actions">
                <Button variant="contained" className="regis_btn" onClick={handleRegister}>Register</Button>
            </div>

        </>
    )
}
export default Register