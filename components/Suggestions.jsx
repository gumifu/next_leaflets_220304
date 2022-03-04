import React, { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import Image from 'next/image';

const Suggestions = () => {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const suggestions = [...Array(5)].map((_, i) => (
            {
                ...faker.helpers.contextualCard(),
                id: i,
            }
        ));
        console.log(suggestions);

        setSuggestions(suggestions);
    },[])
  return (
      <div className='mt-4 ml-10'>
          <div className='flex justify-between text-sm mb-5'>
              <h3 className='text-sm font-bold text-gray-400'>おすすめ</h3>
              <button className='text-gray-600 font-semibold'>すべて見る</button>
          </div>

          {
              suggestions.map(profile => (
                  <div key={profile.id} className='flex items-center justify-between mt-3'>
                      <img className='w-10 h-10 rounded-full border p-[2px]' src={profile.avatar} alt=''/>

                  <div className='flex-1 ml-4'>
                        <h2 className='font-smibold text-sm'>{profile.username}</h2>
                        <h3 className='text-gray-400 text-xs'>Works at {profile.username}</h3>
                      </div>
                      <button className='text-blue-500 text-sm'>フォローする</button>

                  </div>
              ))
          }
    </div>
  )
}

export default Suggestions
