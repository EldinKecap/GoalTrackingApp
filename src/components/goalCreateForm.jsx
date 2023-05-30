import FormControl from "@mui/material/FormControl";
import { Button, TextField,  } from "@mui/material";



export default function GoalCreateForm() {
  const classes = {form:{
    display:"flex",
    flexDirection:"column",
    gap:5
  }}


  return (
    
      <FormControl sx={classes.form}>
        <TextField variant="outlined" label="Enter goal" required >
        </TextField>
        <Button variant="contained" color="success">
          Create
        </Button>
      </FormControl>
    
  );
}
