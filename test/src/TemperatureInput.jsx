import { useState } from "react";

const scaleName = {
    C: '섭씨',
    F: '화씨'
};

export default function TemperatureInput(props){
    const handleChange = (e) =>{
        props.onTemperatureChange(e.target.value);
    }

    return(
        <fieldset>
            <legend>온도를 입력하세요(단위 : {scaleName[props.scale]})</legend>
            <input value={props.temprature} onChange={handleChange} />
        </fieldset>
    )
}
