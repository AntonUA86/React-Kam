import { renderEntireTree } from "../render";

 let state = {
     profilePage:{
        post : [
        {id:1 , message:"Hi, how", likesCount:12},
        {id:2 , message:"Hi, my friend ",likesCount:15},
    ]},
    dialogsPage:{
       messagesData : [
        { id: 1, message: "Oh, baby, baby" },
        { id: 2, message: "How was I supposed to know " },
        { id: 3, message: "That something wasn't right here?" },
        { id: 4, message: "I shouldn't have let you go" },
        { id: 5, message: "And now you're out of sight, yeah" },
       ],
       dialogsData : [
      { id: 1, name: "Anton" },
      { id: 2, name: "Olha" },
      { id: 3, name: "Ugor" },
        { id: 4, name: 'Dany' },
        { id: 5, name: "Emma" },
       ]
    },
    sidebar:{
      friends:
       [
        { id: 1, name: "Anton" },
        { id: 2, name: "Olha" },
        { id: 3, name: "Ugor" }
       ]
    }
 }




export let addPost = (postMessage) =>{
   let newPost =  {
      id:5 ,
      message:postMessage,
      likesCount:0
   };
   state.profilePage.post.push(newPost);
   renderEntireTree(state);
}

export default state;