import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import React from 'react'
import GoalCalendar from '../components/GoalCalendar'

export default function Goals() {
  return (
    <Box>
        <Accordion defaultExpanded={true} >
            <AccordionSummary expandIcon={<ExpandMore/>}>Work Out</AccordionSummary>
            <AccordionDetails><GoalCalendar/></AccordionDetails>
        </Accordion>
    </Box>
  )
}
