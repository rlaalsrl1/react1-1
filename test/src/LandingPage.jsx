import React, {useState} from "react";
import ToolBar from "./ToolBar";

export default function LandingPage(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () =>{
        setIsLoggedIn(true);
    };
    const onClickLogout = () =>{
        setIsLoggedIn(false);
    };

    return(
        <div>
            <ToolBar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <div style={{padding:16}}>소풀과 함께하는 리액트 공부!</div>
        </div>
    )
}