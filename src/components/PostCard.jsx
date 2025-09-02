import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredimage}) {
    
    
    return (
        <Link to ={`/post/${$id}`}>
            <div className='bg-gray-100 rounded-xl p-4 w-full'>
                <div className='w-full justify-center mb-4'>
                    <img src={appwriteService.getFile(featuredimage)} alt={title}
                    className='rounded-xl' 
                     onError={(e) => {
                                console.error("Image failed to load:", e);
                                e.target.style.display = 'none';
                            }}  />
                </div>
                <h2
                className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard
