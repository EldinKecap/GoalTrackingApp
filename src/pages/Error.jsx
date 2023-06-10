import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Error({message}) {
  return (
    <Box>
        <Typography component="h2">
            Error
        </Typography>
        <Typography component="body1">
            {message}
        </Typography>
    </Box>
  )
}
