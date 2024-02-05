import React, { useState } from "react";
import Image from "next/image";
import {FaCamera} from "react-icons/fa"
import ContextMenu from "./ContextMenu";

function Avatar({type , image , setImage}) {
  const [hover , setHover] = useState(false);
  const [isContextMenuVisible , setIsContextMenuVisible] = useState(false);
  const[contextMenuCoordinates , setcontextMenuCoordinates] = useState({
    x:0,
    y:0
  })
  const[grabPhoto , setgrabPhoto] = useState(false);
  const showContextMenu =(e) =>{
    e.preventDefault();
    setcontextMenuCoordinates({x:e.pageX , y: e.pageY});
    console.log(e)
    setIsContextMenuVisible(true);
  }
  const contextMenuOptions=[
    {
    name:"Take Photo", 
    callback: ()=>{}
  } ,
{
  name : "change from library",
  callback : ()=>{}
},
{
  name : "Upload Photo",
  callback: ()=>{
    set
  }
},
{
  name : "Remove Photo",
  callback : ()=>{
    setImage("/default_avatar.png")
  }
}
]
  return (
    <>
    <div className="flex items-center justify-center">
      {
        type ==="sm" && (
        <div className="relative h-10 w-10">
          <Image src={image} alt="avatar" className="rounded-full" fill />
        </div>
          )
      }
       {

        type ==="lg" && (
        <div className="relative cursor-pointer"
        onMouseEnter={()=>{setHover(true)}}
        onMouseLeave={()=>{setHover(false)}}
        >
        <div className=" h-14 w-14">
          <Image src={image} alt="avatar" className="rounded-full" fill />
        </div>
        </div>
          )
      }
       {
        type ==="xl" && (
          <div className="relative cursor-pointer"
          onMouseEnter={()=>{setHover(true)}}
          onMouseLeave={()=>{setHover(false)}}
          >
            <div className={`z-10 bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2 text-white 
            ${hover ?"visible" :  "hidden"}`} 
            onClick={(e) =>{showContextMenu(e)}}
            id="context-opener"
           >
              
              <FaCamera className="text-2xl " 
               onClick={(e) =>{showContextMenu(e)}}
               id="context-opener"
               />
            
              <span  onClick={(e) =>{showContextMenu(e) } } id="context-opener"  >change Profile photo </span>
              </div>
        <div className="h-60 w-60">
          <Image src={image} alt="avatar" className="rounded-full" fill />
        </div>
        </div>
          )
      }
       
    </div>
    {
      
        isContextMenuVisible && <ContextMenu 
        options={contextMenuOptions}
        coordinates={contextMenuCoordinates}
        contextMenu={isContextMenuVisible}
        setContextMenu={setIsContextMenuVisible}
        
        />
      
    }
    </>
  );
}

export default Avatar;
