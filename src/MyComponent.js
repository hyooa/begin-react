// // const MyComponent = () => {
// //     return <div>새로운 컴포넌트 생성</div>
// // }

// // 같음 👆🏻👇🏻

// function MyComponent() {
//     return <div>새로운 컴포넌트 생성</div>
// }

// export default MyComponent;

// 조각 하나를 만듦

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 💚 조금 더 편리하게 ) rsc
import React from 'react';
import PropTypes from 'prop-types';

// 🧡 구조분해 할당 : 객체에 있는 값을 분해해서
const MyComponent = ({name, age, children}) => { // (props) or ({name, age}) 객체로 받음
    // const {name, age, children} = props;
    return (
        <div>
            이름은 {name},<br/>
            나이는 {age},<br/>
            {children}<p/>
        </div>
    );
};
// props 기본값 설정
MyComponent.defaultProps = {
    name: "기본 이름",
    age: 1,
};
// type 지정
MyComponent.propTypes = {
    name:PropTypes.string
}

// array : 배열
// bool : true or false
// function : 함수
// number : 숫자
// object : 객체
// string : 문자
// any : 아무 종류나 다 
// https://github.com/facebook/prop-types

export default MyComponent;