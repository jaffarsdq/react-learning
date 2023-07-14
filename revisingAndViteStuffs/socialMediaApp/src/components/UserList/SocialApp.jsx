import MainContainer from '../MainContainer/MainContainer';
import Navbar from "../Navbar/Navbar";
import Input from "../Inputs/Input";
import { useState, useEffect } from "react";
import PostCardContext from '../providers/PostsProviders';
import axios from 'axios';

function SocialApp() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        // We will download the content from dummyapi.io
        axios.get("https://dummyapi.io/data/v1/post", {
            headers: {'app-id': import.meta.env.VITE_APP_ID}
        })
        .then(response => {
            const responseObject = response.data;
            console.log(responseObject)
            setPosts([...responseObject.data]);
        })
    }, []);
    return (
        <div>
            <PostCardContext.Provider  value={ {posts, setPosts} }>
                <Navbar />
                <Input />
                <MainContainer />
            </PostCardContext.Provider>
        </div>
    )
}

export default SocialApp;