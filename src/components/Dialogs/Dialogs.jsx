import React from 'react';
import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogsItem from './DialogItem/DialogsItem'


const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: "Anton" },
        { id: 2, name: "Olha" },
        { id: 3, name: "Ugor" },
        { id: 4, name: 'Dany' },
        { id: 5, name: "Emma" },
    ]
    let messagesData = [
        { id: 1, message: "Oh, baby, baby" },
        { id: 2, message: "How was I supposed to know " },
        { id: 3, message: "That something wasn't right here?" },
        { id: 4, message: "I shouldn't have let you go" },
        { id: 5, message: "And now you're out of sight, yeah" },
    ]
    let dialogsElements = dialogsData.map(dialog => <DialogsItem name={dialog.name} id={dialog.id} />);

    let messagesElements = messagesData.map(message => <Message  id={message.id} message={message.message} />)

    
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