import React, {useState} from 'react';
// {useState} 추가

const CounterF = () => {
    // useState() 함수 호출시 배열을 반환해줌
    // [ (뇽안), (업데이트해주는함수) ]
    // 배열의 0번째에는 초기값
    // 배열의 1번째에는 이 값은 없데이트 해주는 함수
    const [message, setMessage] = useState('뇽안');
    const onClickEnter = () => setMessage('안녕 ?');
    const onClickLeave = () => setMessage('잘가 !');
    return (
        <div>
            <h4>{message}</h4>

            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>

            {/* <button onClick={() => { setMessage('안녕 ?') }}>입장</button>
            <button onClick={() => { setMessage('잘가 !') }}>퇴장</button> */}
        </div>
    );
};

export default CounterF;