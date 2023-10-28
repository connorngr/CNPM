'use client';

import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';

const Nav = () => {
    const [navBar, setNavBar] = useState(false);
    const { data: session } = useSession();
    const [providers, setProviders] = useState(null);

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }        
        setUpProviders();
    }, []);

  return (
    <nav className='flex-between w-full
    mb-16 pt-3'>
        <Link href="/" className='flex gap-2
        flex-center'>
            <Image src="assets/images/donation.svg"
            alt="404"
            width={30}
            height={30}
            className='object-contain rounded-full'
            onClick="/"
            />
            <p className='logo_text'
                onClick="/">Dự án quyên góp</p>        
        </Link>
        {/* desktop ver */}
        {/* md sm medium small */}
        <div className='sm:flex hidden'>            
            {session?.user ? (
                <div className='flex gap-3 md:gap-5'>
                    <Link href="/create_post" className='black_btn'>
                        Tạo dự án
                    </Link>
                    <button type='button' 
                    onClick={signOut}
                    className='outline_btn'>Đăng xuất
                    </button>
                    <Link href="/profile">
                    <Image src={session?.user.image}
                    width={35}                    
                    height={35}
                    className='rounded-full'
                    alt='ERR'
                     />   
                    </Link>                
                </div>
            ): (<>
                {providers && Object.values(providers).map((provider) => (
                    <button
                    type='button'
                    key={provider.name}                    
                    onClick={() => {signIn(provider.id)}}
                    className='black_btn'>
                        Đăng nhập
                    </button>
                ))}                
            </>
            )}
            </div>
            {/* moble navigation */}
            <div className='sm:hidden flex relative'>
                    {session?.user ? (
                        <div>
                            <Image src={session.user.image}
                    width={35}
                    height={35}
                    className='rounded-full'
                    alt='ERR'
                    onClick={() => setNavBar((prev) => !prev)}/> 
                    {navBar && (
                        <div className='dropdown'>
                            <Link
                            href="/profile"
                            className='dropdown_link'
                            onClick={() => setNavBar(false)}
                            >Trang cá nhân
                            </Link>
                            <Link
                            href="/create_post"
                            className='dropdown_link'
                            onClick={() => setNavBar(false)}
                            >
                                Tạo dự án mới</Link>
                            <button className='mt-5 w-full black_btn'
                            type='button'
                            onClick={() => {setNavBar(false); signOut();}}>
                            Sign out
                            </button>
                        </div>
                    )}   
                        </div>                    
                    ): (
                        <>
                            {providers && Object.values(providers).map((provider) => (
                    <button
                    type='button'
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className='black_btn'>
                        Đăng nhập
                    </button>
                ))}
                        </>
                    )}
            </div>
    </nav>
  )
}

export default Nav
