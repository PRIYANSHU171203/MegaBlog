import React,{useEffect, useState} from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux'
import { Query } from 'appwrite'

function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true);
    const userData = useSelector((state) => state.auth.userData)


useEffect(() => {
    setLoading(true);
       // Wait for userData to be set (not undefined)
       
    if (typeof userData === "undefined") return;

    let query = [];
    if (userData && userData.isActive) {
        query = [];
    } else if (userData && userData.$id) {
        query = [Query.equal("userId", userData.$id)];
    } else {
        setPosts([]);
        setLoading(false);
        return;
    }
    appwriteService.getPosts(query).then((posts) => {
        if (posts) setPosts(posts.documents);
        setLoading(false);
    });
}, [userData]);
    if (loading) return <div>Loading...</div>;

    if(posts.length === 0){
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                               {userData ? "No posts found." : "Login to read posts"}
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
    }



    


export default Home
