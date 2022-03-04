import * as faker from '@faker-js/faker';
import { useEffect, useState } from 'react'
import Story from './Story';

const NewItems = () => {
    const [suggestions, setSuggsetions] = useState([]);

    useEffect[() => {
        const suggestions = [...Array(10)].map((_, i) => [{
            ...faker.helpers.contextualCard(),
            id: i,
        }]);
       setSuggsetions(suggestions);
    }, []];

  return (
      <div>
          {suggestions.map(profile => (
              <Story key={profile.id} img={profile.avatar} username={profile.usename}/>
        ))}
    </div>
  )
}

export default NewItems
