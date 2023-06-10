import { Button, Stack, TextField } from '@mui/material'
import React from 'react'

export default function CreateAnAccount() {
  return (
    <Stack spacing={2}>
        <TextField label="Enter email" />
        <TextField label="Enter password" />
        <Button variant='contained'>Create</Button>
    </Stack>
  )
}
