import React from 'react'
import {useParams} from "react-router-dom";
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
import "./s.css";
function Roompage() {
    const{roomId}=useParams();
    const myMeeting = async(element)=>{
        const appID=40142866;
        const serverSecret="a7eb699d70e299fb71b040c29f02948b";
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString(),"Vinay Jadaun");
        const zc=ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
          container:element,
          sharedLinks:[
            {
              name:'copy link',
              url:`http://localhost:3000/room/${roomId}`,
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