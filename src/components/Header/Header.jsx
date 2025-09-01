import React from 'react'
import {Container, Logo} from '../index'
import LogoutBtn from './LogoutBtn'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Header() {
    const authStatus = useSelector((state) => state.auth.status )
    const navigate = useNavigate()

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus
        },
        {
            name: 'SignUp',
            slug: '/signUp',
            active: !authStatus
        },
        {
            name: 'All Posts',
            slug: '/all-posts',
            active: authStatus
        },
        {
            name: 'Add Posts',
            slug: '/add-posts',
            active: authStatus
        },
    ]
    

    return (
        <header className='shadow sticky z-50 top-0 bg-gray-400 border-gray-200 px-4 lg:px-6 py-2.5'>
           <Container>
            <nav className='flex items-center justify-between'>
                <div className='m-2'>
                    <Link to={'/'}>
                    <Logo width='70px' />
                    </Link>
                </div>
                <ul className='flex ml-auto'>
                    {navItems.map((item) =>
                    item.active ? (
                        <li key={item.name}>
                            <button
                            onClick={() => navigate(item.slug)}
                            className='inline-block px-6 py-2 duration-200 text-white bg-teal-500 rounded-lg hover:bg-teal-600 hover:text-white mt-4 lg:mt-0'
                            >{item.name}</button>
                        </li>
                    ) : null 
                    )}
                    {authStatus && (
                        <li>
                            <LogoutBtn />
                        </li>
                    )}
                </ul>
            </nav>
           </Container>
        </header>
    )
}

export default Header
