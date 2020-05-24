import React from 'react';
import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogsItem from './DialogItem/DialogsItem'


const Dialogs = (props) => {
  
    let dialogsElements = props.state.dialogsData.map(dialog => <DialogsItem name={dialog.name} id={dialog.id} />);

    let messagesElements = props.state.messagesData.map(message => <Message  id={message.id} message={message.message} />)

    
    return (


        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}

            </div>
        </div>
    )

}

export default Dialogs;