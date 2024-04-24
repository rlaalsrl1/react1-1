import React, { useState } from "react";

export default function Midterm(props){
    const [name, setName] = useState(null);

    return(
        <div>
            <h1>당신은 어떤 과일을 좋아하나요?{name}</h1>
            
        <button onClick={()=> setName(name + '사과')}>
            사과
        </button>
       
        <button onClick={()=> setName(name + '오렌지')}>
            오렌지
        </button>
        <button onClick={()=> setName(name + '바나나')}>
            바나나
        </button>
        </div>
    )
}