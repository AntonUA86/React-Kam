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
     let dialogsData = [
            {id:1 , name:"Anton"},
            {id:2 , name:"Olha"},
            {id:3 , name:"Ugor"},
            {id:4 , name:'Dany'},
            {id:5 , name:"Emma"},
        ];
        let messagesData = [
            {id:1 , message:"Oh, baby, baby"},
            {id:2 , message:"How was I supposed to know "},
            {id:3 , message:"That something wasn't right here?"},
            {id:4 , message:"I shouldn't have let you go"},
            {id:5 , message:"And now you're out of sight, yeah"},
        ];
        return (
       

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
            <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
            <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />
            
            </div>

        <div className={s.messages}>
            <Message message={messagesData[0].message}/>
            <Message message={messagesData[1].message}/>
            
        </div>
        </div>
    )
    
}

export default Dialogs;