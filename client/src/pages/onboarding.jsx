import React, { useState } from "react";
import Image from "next/image";
import { useStateProvider } from "@/context/StateContext";
import Input from "../components/common/Input.jsx";
import Avatar from "@/components/common/Avatar.jsx";

function onboarding() {
  const [{userInfo}] = useStateProvider();
  const[state , setState] = useState("");
  const[about , setAbout] = useState("");
  const[image , setImage] = useState("/default_avatar.png");
  return (
    <div className="bg-panel-header-background h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-2 text-white">
      <Image src="/whatsapp.gif" alt="whatsapp" height={280} width={280} />
      <span className="text-6xl">whatsApp</span>
     </div>
     <h2 className="text-2xl text-white mt-5">create your profile</h2>
     <div className="flex gap-6 mt-5 ml-20">
      <div className="flex flex-col items-center justify-center mt-5 gap-6 text-white">
       <Input name="Display Name" state={state} setState={setState} label />
       <Input name="About" state={about} setState={setAbout} label />
    </div>
    <Avatar type="xl" image={image} setImage={setImage}  />
     </div>

    </div>
    );
}

export default onboarding;
