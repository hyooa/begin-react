
import './App.css';
import React from 'react';
// import MyComponent from './MyComponent';
// import MyComponentClass from './MyComponentClass';
// import Counter from './Counter';
// import CounterF from './CounterF';
// import EventPractice from './EventPractice';
import Counter2 from './Counter2';
// 자동 (자식)컴포넌트 됨 👆🏻


function App() {
  // const name = "react";
  const newText = '안녕하세요';

  return (
    // * JSX에서 자바스크립트 표현식을 사용하려면 {}로 감싼다
    // * JSX에서 if문 사용안됨, 대신 조건부연산자 - 삼항연산자 사용

    // react 두껍게 작성
    // Hello <b>react</b>

      <div className="react">

      <Counter2.Provider value="gg"></Counter2.Provider>

        {/* <EventPractice></EventPractice>
        <CounterF></CounterF>
        <Counter></Counter>
        <h5>ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</h5>

        <MyComponentClass name="classGreen" age={30}>
          <h3>children</h3>
        </MyComponentClass>
        <MyComponentClass></MyComponentClass>
        <h5>ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</h5>

        <MyComponent name="10" age="20"><h4>string</h4></MyComponent>
        <h5>ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</h5>

        <MyComponent name="green" age="30"><h4>children</h4></MyComponent>
        <MyComponent name="blue" age={50}><h4>children</h4></MyComponent>
        <MyComponent><h4>children</h4></MyComponent>

        <h1>{name === '리액트' ? (<span>리액트입니다.</span>) : null}</h1>
        <h2>하이하이</h2>
        <input type="text" />
        <input type="text"></input> */}
      </div>
  );

  // 변환하면 이렇게 생김
  // 편하게 작성하기 위한게 JSX 문법 👆🏻
  // return React.createElement("div", null, "Hello", React.cloneElement("b", null, "react"));
}

export default App;
