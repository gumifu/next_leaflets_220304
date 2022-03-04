import Image from 'next/image'
import React from 'react'
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';
import { useSession,signIn,signOut } from 'next-auth/react';

const Header = () => {
    const { data: session } = useSession();
    console.log(session);
    return (
      <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
        <div className='flex justify-between max-w-6xl mx-5 xl:mx-auto'>
            {/* left */}
            <div className='relative hidden lg:inline-grid w-24'>
                <Image src="/logo-main.svg" alt="Vercel Logo" layout='fill' objectFit='contain' />
            </div>
            <div className='relative lg:hidden flex-shirink-0 w-10'>
                <Image src="/logo-mark.svg" alt="Vercel Logo" layout='fill' objectFit='contain' />
            </div>
            {/* middle */}
            <div className='relative mt-1 p-3 rounded-md max-w-xs'>
                <div className='absolute inset-y-0 pl-3 flex items-center'>
                    <SearchIcon className='h-5 w-5 text-gray-500' />
                </div>
                <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:border-black rounded-md' type="text" placeholder='検索'/>
            </div>
                {/* right */}
                <div className='flex items-center justify-end space-x-4'>
                <HomeIcon className='navBtn' />
                    <MenuIcon className='w-6 md:hidden cursor-pointer' />
                    {session ? (
                        <>
                            <div className='relative navBtn'>
                            <PaperAirplaneIcon className='navBtn rotate-45' />
                                <div className=' absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex justify-center items-center animate-pulse text-white'>3</div>
                            </div>
                            <PlusCircleIcon className='navBtn'/>
                            <UserGroupIcon className='navBtn'/>
                            <HeartIcon className='navBtn' />
                            <img
                                onClick={signOut}
                                src={session.user.image}
                                alt='dummy profile' className='h-10 w-10 object-cover rounded-full cursor-pointer' />

                        </>
                    ) : (
                            <button onClick={signIn}>サインイン</button>

                    )}
            </div>


        </div>
    </div>

  )
}

export default Header

