import React from 'react'; 

const ThingsILike = () => {

    const thingsILike = ['I infuenced everyone that came behind me.', 'My music is still being played today!!!', 'Inducted into the Rock & Roll Hall of Fame.'];

    const listItems = thingsILike.map(thing => 
        <li>{thing}</li>
    );

    return (
        <ul>
            {listItems}
        </ul>
    )
}

export default ThingsILike;