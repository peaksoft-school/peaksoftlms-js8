import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import styled from '@emotion/styled'
import { useParams } from 'react-router-dom'
import Materials from '../Materials'
import InstructorStudents from '../Students'

function TabPanel(props) {
   const { children, value, index, ...other } = props

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box sx={{ p: 3 }}>
               <Typography>{children}</Typography>
            </Box>
         )}
      </div>
   )
}

TabPanel.propTypes = {
   index: PropTypes.number.isRequired,
   value: PropTypes.number.isRequired,
}

function a11yProps(index) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   }
}

export default function TabsMaterials() {
   const [value, setValue] = React.useState(0)
   const { courseId } = useParams()

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }
   return (
      <StyledBox sx={{ width: '100%' }}>
         <Box sx={{ borderColor: 'divider' }}>
            <Tabs
               value={value}
               onChange={handleChange}
               aria-label="basic tabs example"
            >
               <StyledTab label="Материалы" {...a11yProps(0)} />
               <StyledTab label="Студенты" {...a11yProps(1)} />
            </Tabs>
            <hr style={{ width: '76%', marginLeft: '16rem' }} />
         </Box>
         <TabPanel value={value} index={0}>
            <Materials id={courseId} />
         </TabPanel>
         <TabPanel value={value} index={1}>
            <InstructorStudents id={courseId} />
         </TabPanel>
      </StyledBox>
   )
}

const StyledTab = styled(Tab)({
   position: 'relative',
   left: '47%',
   fontWeight: '600',
})
const StyledBox = styled(Box)({
   marginTop: '3px',
})
