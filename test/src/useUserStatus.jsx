import { useState, useEffect } from "react";

export default function useUserStatus(props){
    const [isOnline, setIsOnline] = useState(null)

    useEffect(() =>{


        function handleStatusChange(status){
            setIsOnline(status.isOnline);
        }

        ServerAPI.subscibeUserStatus(props.user.id, handleStatusChange);
        return()=>{
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
        }
    })
    
}