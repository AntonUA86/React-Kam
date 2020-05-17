import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';



const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
    <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
    )
}
const Message = (props) => {
    return (
    <div className={s.message}>{props.message}</div>
    )

}
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
            <DialogsItem name="Anton" id="1" />
            <DialogsItem name="Anton" id="2" />
            <DialogsItem name="Anton" id="3" />
            <DialogsItem name="Anton" id="4" />
            <DialogsItem name="Anton" id="5" />
            </div>

        <div className={s.messages}>
            <Message message="Oh, baby, baby"/>
            <Message message="How was I supposed to know "/>
            <Message message="That something wasn't right here?"/>
            <Message message="I shouldn't have let you go"/>
            <Message message="And now you're out of sight, yeah"/>
        </div>
        </div>
    )
    
}

export default Dialogs;