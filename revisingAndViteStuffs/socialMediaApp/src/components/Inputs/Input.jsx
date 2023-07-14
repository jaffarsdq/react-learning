import  Box  from "@mui/material/Box";
import TextField  from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState , useContext} from "react";
import LoadingButton from '@mui/lab/LoadingButton';
import axios from "axios";
import PostCardContext from '../providers/PostsProviders'

export default function Input() {

    const [postText, setPostText] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const {posts, setPosts} = useContext(PostCardContext);
    async function createPost() {
        console.log(posts);
        setLoading(true);
        axios.post("https://dummyapi.io/data/v1/post/create", 
        {
            owner: '60d0fe4f5311236168a109ca',
            text: postText,
            image: imageUrl,
            likes: 0,
            publishDate: new Date()
        },
        {
            headers: {'app-id': import.meta.env.VITE_APP_ID}
        }
        )
        .then(response => {
            console.log(response.data);
            setPosts([response.data, ...posts])
            setLoading(false);
            setPostText("");
            setImageUrl("");
        })
    }

    return (
    <Box sx={{marginTop:2}}>
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
            (!loading) ? <Button loading variant="contained" onClick={createPost}>Submit</Button> : <LoadingButton loading variant="outlined">Submit</LoadingButton>
        }

    </Box>
    )
}