import { Component } from "react";

class Counter extends Component {
    // constructor ) Component 생성자 메서드
    // 클래스형 컴포넌트에서 Component작성시 반드시 super(props); 호출해주기
    // 리액트의 Component 클래스가 지닌 생성자 함수를 호출 !

    // constructor (props) {
    //     super(props);
    //     this.state = {
    //         number : 0,
    //         fixedNumber:0,
    //     }
    // }
    // 같음 👆🏻👇🏻
    state = {
        number : 0,
        fixedNumber : 0,
    }

    // state 조회
    render () {
        const {number, fixedNumber} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h3>바뀌지 않음 : {fixedNumber}</h3>

                {/* 버튼 클릭시 setState state 값 변경 */}
                <button onClick={() => {
                    this.setState({number: number+1}, () => {
                        console.log('setState가 호출됨');
                    });
                }}> +1 </button><p/>
            </div>
        )
    }
}

export default Counter;