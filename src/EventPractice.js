import React, {useState}  from "react";

// class EventPractice extends Component {
//     state = {
//         message : '', // 초기값, 빈문자열
//     }
//     render () {
//         return (
//             <div>
//                 <h3>이벤트 연습 💕</h3>

//                 <input type="text" nema="message" placeholder="입력해 ~"
//                 onChange={(e) => {
//                     // console.log(e.target.value); // input의 값
//                     this.setState({message: e.target.value});
//                 }}></input>

//                 <button onClick={() => {
//                     console.log(this.state.message +'(추가)');
//                 }}>확인</button>
//             </div>
//         )
//     }
// }

const EventPractice = () => {
    const [message, setMessage] = useState('');
    const onChange = (e) => {
        console.log(e.target.value);
    };
    const onClickS = () => {
        
    };
    return (
        <div>
            <h4>이벤트 연습 💕</h4>
            <h5>{message}</h5>
            <input onChange={onChange} placeholder="입력하시오."></input>
            <button onClick={onClickS}>확인</button>
        </div>
    )
}
export default EventPractice;