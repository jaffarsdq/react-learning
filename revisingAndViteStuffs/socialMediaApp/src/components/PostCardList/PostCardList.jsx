import { useEffect, useState } from "react"
import PostCard from "./PostCard"
import axios from "axios";
const PostCardDetails = [
    {
        "id": "60d21b4667d0d8992e610c8c5",
        "image": "",
        "likes": 43,
        "tags": [
            "animal",
            "dog",
            "golden retriever"
        ],
        "text": "adult Labrador retriever",
        "publishDate": "2020-05-24T14:53:17.598Z",
        "owner": {
            "id": "60d0fe4f5311236168a109ca",
            "title": "ms",
            "firstName": "Sara",
            "lastName": "Andersen",
            "picture": "https://randomuser.me/api/portraits/women/58.jpg"
        }
    },
]


export default function PostCardList() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        // we will download content from dummyapi.io
        axios.get("https://dummyapi.io/data/v1/post",{
            headers: {'app-id': import.meta.env.VITE_APP_ID}
        })
        .then(response => {
            const responseObject = response.data;
            console.log(responseObject);
            setPosts([...PostCardDetails,...responseObject.data]);
        })
    },[]) ;

    return (
            (posts.length === 0) ? 
            'Loading...' :
            posts.map((post) => 
            <PostCard
                content = {post.text}
                image = {post.image}
                authorFirstName = {post.owner.firstName}
                authorSecondName = {post.owner.lastName}
                publishDate = {post.publishDate}
                key = {post.id}
            />)
    )
}