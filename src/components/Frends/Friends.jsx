import React from 'react';
import FriendsItem from './FriendsItem/FriendsItem';
const friends = (props) => {
    let frendsApp = props.state.friends.map(friends => <FriendsItem name={friends.name} id={friends.id}/>)
    
    return (
        
            <div>
                <div className="frends">
                {frendsApp}
                </div>
            </div>
        
    )
}

export default friends;