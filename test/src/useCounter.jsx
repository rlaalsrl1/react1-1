import React, { useState } from "react";

export default function useCounter(initialvalue){
    const [count, setCount] = useState(initialvalue);

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCoutn = () => setCount((count) => Math.max(count -1, 0));

    return [count, increaseCount, decreaseCoutn];
}