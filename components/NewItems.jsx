import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import Story from './Story';
import { useSession } from "next-auth/react";


const NewItems = () => {
    const { data: session } = useSession();
    const [suggestions, setSuggsetions] = useState([]);

    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));
       setSuggsetions(suggestions);
    }, []);

    return (
        <div className='flex '>
            {session && (
                <Story img={session.user.image} username={session.user.name} />
            )}
            {suggestions.map((profile) => (
                <Story key={profile.id} img={profile.avatar} username={profile.username} />
            ))}
        </div>
    );
}

export default NewItems
