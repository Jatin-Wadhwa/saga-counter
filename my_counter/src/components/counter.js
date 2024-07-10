'use client'
import { useDispatch,useSelector } from "react-redux";
import { increment,decrement } from "@/redux/action/myActions";

const Counter=()=>{

    const dispatch=useDispatch();

    const counter=useSelector((state)=>state.counts.count);
    console.log(counter);
    return(
        <>
        <h1>My Counter</h1>
        <h2>{counter}</h2>
        <button onClick={()=> dispatch(increment())}>increment by 1</button>
        <button onClick={()=> dispatch(decrement())}>decrement by 1</button>
        </>
    )
}

export default Counter;