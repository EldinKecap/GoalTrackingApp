import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from '@mui/material'
import React from 'react'
import GoalCalendar from '../components/GoalCalendar'
import Goal from '../components/Goal'

export default function Goals({goals}) {

  return (
    <Stack spacing={3} mt={5} mb={5}>
      {
        goals.map((goal)=>(
          <Goal key={goal.id} goal={goal} />
        ))
      }
    </Stack>
  )
}
