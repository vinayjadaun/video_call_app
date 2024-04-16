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
        const appID=40142866;
        const serverSecret="a7eb699d70e299fb71b040c29f02948b";
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