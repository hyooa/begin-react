import React, { useContext, useReducer } from 'react'; // use~ 내장함수 (Hook 함수)
import { MyContext } from './Conponent/Mycontext';

function reducer (state, action) { // 🧡 useReducer
    switch (action.type) {
        case "INCREASE" :
        return state + 1;
        case "DECREASE" :
        return state - 1;
        default :
        return state;
    }
}

const Counter2 = (props) => {

    const contextText = useContext(MyContext);

    // let number = 0; // 변수 지정 // 변경되지않음, 상태관리해줘야됨
    const [ number, dispatch ] = useReducer (reducer, 0); // 초기값 지정

    function Increase() {
        // number += 1; // 변경되지않음, 상태관리해줘야됨
        // setNumber(number +1);
        dispatch ({type : "INCREASE"});
    }
    function Decrease() {
        // setNumber(number -1);
        dispatch ({type : "DECREASE"});
    }

    return (
        <div>
            <h2>{number}</h2>
            <button onClick={Increase}>+1</button>
            <button onClick={Decrease}>-1</button>
        </div>
    );
};

export default Counter2;