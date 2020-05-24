import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import FriendsItem from '../Frends/FriendsItem/FriendsItem';


const Navbar = (props) => {
    let friendsNames = props.state.friends.map(friends => <FriendsItem name={friends.name} id={friends.id}/>)
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/Profile' activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to='/dialogs'activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/News'activeClassName={s.activeLink}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/Music'activeClassName={s.activeLink}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/Settings'activeClassName={s.activeLink}>Settings</NavLink>
        </div>
        <div className={`${s.item} ${s.friends}`}>
            <NavLink to='/Friends'activeClassName={s.activeLink}>
                Friends
                <div className={s.friendsItem}>
                    {friendsNames}
                </div>
                </NavLink>
        </div>
    </nav>
}

export default Navbar;