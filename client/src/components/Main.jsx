import React, { useEffect, useState } from "react";
import ChatList from "./Chatlist/ChatList.jsx";
import Empty from "./Empty.jsx";
import { useRouter } from "next/router.js";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "@/utils/FirebaseConfig.js";
import axios from "axios";
import { CHECK_USER } from "@/utils/ApiRoutes.js";
import { useStateProvider } from "@/context/StateContext.jsx";
import { reducerCases } from "@/context/constants.js";
import Chat from "./Chat/Chat.jsx";


function Main() {
  const router = useRouter();
  const[RedirectTologin , setRedirectTologin] = useState(false)
  const[{userInfo} , dispatch] =useStateProvider();
useEffect(()=>{
 if(RedirectTologin){
    router.push("/login");
  }
},[RedirectTologin,setRedirectTologin])
onAuthStateChanged(firebaseAuth,async (currentUser) =>{
  console.log(currentUser.email);
if(!currentUser) setRedirectTologin(true);
if(!userInfo && currentUser?.email){
const {data} = await axios.post(CHECK_USER,{
email : currentUser.email,
})
console.log(data)
dispatch({
  type : reducerCases.SET_USER_INFO ,
   userInfo : {
    id : data.data.id,
     name : data.data.name,
     email : data.data.email,
     photoImage : data.data.profilePicture,
     status : data.data.about
   }})

}

})
  return( 
  <>
<div className="grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden">
  <ChatList />
 {/* <Empty /> */}
 <Chat />
</div>
  </>);
}

export default Main;
