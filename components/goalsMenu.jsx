import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography'


export default function GoalsMenu(){
    return <Drawer 
    variant="permanent"
    open
    sx={{
        '& .MuiDrawer-paper': { backgroundColor:'#222', width: 300 },
    }}
    >
        <Typography variant="h4" color="lightgray" 
            sx={{
                margin:'10px'
            }}
        >
            Your Goals
        </Typography>
        <List>
            <ListItemButton divider alignItems='center' sx={{color:'gray'}} selected>
                sdafdsf
            </ListItemButton>
        </List>
        
        
        
    </Drawer>
}