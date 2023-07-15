import { useState , useContext} from "react";
import axios from "axios";
import PostCardContext from '../providers/PostsProviders'


export default function useInput() {
    const [postText, setPostText] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const {posts, setPosts} = useContext(PostCardContext);
    async function createPost() {
        if(postText.length === 0 && imageUrl.length === 0) {
            return (
                alert("Can't submit a empty post")
            );
        }else {
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
                setPosts([response.data, ...posts])
                setLoading(false);
                setPostText("");
                setImageUrl("");
            })

        }
    }

    return [postText,setPostText,imageUrl,setImageUrl,loading,createPost]
}