import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card sx={{ maxWidth: "100%", margin: '24px auto', boxShadow: 3 }}>
      <CardContent>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Lab Reports" {...a11yProps(0)} />
              <Tab label="Preventive Care Reminders" {...a11yProps(1)} />
              <Tab label="Tip of the Day" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            Lab Reports
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Preventive Care Reminders
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Tip of the Day
          </CustomTabPanel>
        </Box>
      </CardContent>
    </Card>
  );
}
