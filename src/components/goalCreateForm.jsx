import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import { Button } from '@mui/material';



export default function GoalCreateForm(){
    return <FormControl>
    <InputLabel htmlFor="my-input" variant="outlined" color="success" sx={{color:'white'}}> 
    Goal Name
    </InputLabel>
    <Input id="my-input" aria-describedby="goalName" color="success" sx={{color:'white'}} />
    <FormHelperText id="goalName" sx={{color:'white'}}>Create your goal</FormHelperText>
    <Button variant="contained"  color='success'>Create</Button>
  </FormControl>
  
}