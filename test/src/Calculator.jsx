import { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

export default function Calculator(props) {
    const [temprature, setTemperature] = useState('');
    const [scale, setScale] = useState('C');

    const handleCelsiusChange = (temprature) => {
        setTemperature(temprature);
        setScale('C');
    }
    const handleFarenheitChange = (temprature) => {
        setTemperature(temprature);
        setScale('F');
    }

    const celsius = scale === 'F' ? tryConvert(temprature, toCelsius) : temprature;
    const fahrenheit = scale === 'C' ? tryConvert(temprature, toFahrenheit) : temprature;

    return (
        // <fieldset>
        //     <legend>섭씨온도를 입력하세요</legend>
        //     <input value={temprature} onChange={handleChange} />
        //     <BoilingVerdict celsius = {parseFloat(temprature)} />
        // </fieldset>
        <div>
            <TemperatureInput scale="C" temprature={celsius} onTemperatureChange = {handleCelsiusChange}/>
            <TemperatureInput scale="F" temprature={fahrenheit} onTemperatureChange = {handleFarenheitChange}/>
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    )
    function toCelsius(fahrenheit){
        return(
            (fahrenheit - 32) * 9/5
        )
    }
    
    function toFahrenheit(Celsius){
        return(
            (Celsius * 9/5) +32
        )
    }
    
    function tryConvert(temprature, convert){
        const input = parseFloat(temprature);
        if(Number.isNaN(input)){
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }
}