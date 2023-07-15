import MainContainer from '../MainContainer/MainContainer';
import Input from "../Inputs/Input";
import PostCardContext from '../../providers/PostsProviders';
import usePosts from '../../hooks/usePosts'

function SocialApp() {
   const [posts,setPosts] = usePosts();
    return (
        <div>
            <PostCardContext.Provider  value={ {posts, setPosts} }>
                <Input />
                <MainContainer />
            </PostCardContext.Provider>
        </div>
    )
}

export default SocialApp;