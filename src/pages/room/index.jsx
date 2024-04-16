import React, {useState,useEffect} from 'react'
import {useParams} from "react-router-dom";
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
// import dotenv from "dotenv";
// dotenv.config()

import "./s.css";
function Roompage() {
  const [Url,seturl]=useState('none');
  useEffect(()=>{
    seturl(window.location.href)
  },[])
    const{roomId}=useParams();
    const vin=window.location.href
    const myMeeting = async(element)=>{
        const appID=1520029486;
        const serverSecret="5d03ef86ac072456f0d3321b21de0197";
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString(),"Vinay Jadaun");
        const zc=ZegoUIKitPrebuilt.create(kitToken);
        // ${roomId}
        zc.joinRoom({
          container:element,
          sharedLinks:[
            {
              name:'copy link',
              url:vin,
            }
          ],
          scenario:{
            mode:ZegoUIKitPrebuilt.OneONoneCall,
          },
          showScreenSharingButton:true,
        })
    }
  return (
   
    <div className="UI"><div ref={(myMeeting)}/></div>
  )
}

export default Roompage