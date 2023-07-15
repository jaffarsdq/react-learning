import  Box  from "@mui/material/Box";
import TextField  from "@mui/material/TextField";
import { Button } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import useInput from '../../hooks/useInput'

export default function Input() {
    const [postText,setPostText,imageUrl,setImageUrl,loading,createPost] = useInput();
    

    return (
    <Box sx={{margin:2}}>
        <TextField 
            fullWidth
            sx={{marginTop:2}}
            id="outlined-basic"
            label="Content for the next post"
            variant="outlined"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
        >
        </TextField>

        <TextField 
            fullWidth 
            sx={{marginTop:2,marginBottom:2}}
            id="outlined-basic" 
            label="Img link for the next post" 
            variant="outlined"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
        >             
        </TextField>

        {
            (!loading) ? <Button loading variant="contained" onClick= {createPost}>Submit</Button> : <LoadingButton loading variant="outlined">Submit</LoadingButton>
        }

    </Box>
    )
}