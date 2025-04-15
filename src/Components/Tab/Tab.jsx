import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { blue } from "@mui/material/colors";
import './Tab.css'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div className="">
          {children}
        </div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs({ data=[],Component }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ background: "white", width: '100%', height: 'auto', border: "none" }}>
      <AppBar position="static" sx={{ width: '100%',bgcolor:'white',boxShadow:'none'}}>
        <Tabs
          sx={{ background: "white", color: "#2AA7FF", width: '100%' }}
          value={value}
          onChange={handleChange}
          // indicatorColor='secondary'
          textColor="inherit"
          bgcolor="white"
          className='tabs'
          variant="scrollable"
          scrollButtons="auto"
          // aria-label="scrollable auto tabs example"
        >
          {data.slots?.map((day,idx)=>
          <Tab key={idx} label={<TabData tabData={{ day: day.day, slots: `${day?.slots?.Morning?.length+day.slots.Afternoon.length+day.slots.Evening.length} Slots Available` }}></TabData>} {...a11yProps(idx)}></Tab>)
          }
        </Tabs>
      </AppBar>
      {data.slots?.map((day,idx)=>
      <TabPanel value={value} key={day?.date} index={idx} >
        {Component(day,data)}
      </TabPanel>
      )}
      

    </div>
  );
}
function TabData({ tabData }) {
  const { day, slots} = tabData;

  return (
    <><p className='tabH'>{day}</p>
      <p className="tabS">{slots}</p></>
  );
}
