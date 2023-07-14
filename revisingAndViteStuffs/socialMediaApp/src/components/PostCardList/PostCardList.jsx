import { useContext } from "react"
import PostCard from "./PostCard"
import PostCardContext from '../providers/PostsProviders'


export default function PostCardList() {
    // const [posts, setPosts] = useState([]);
    const {posts} = useContext(PostCardContext);

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