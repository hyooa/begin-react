import { Component } from "react";
// react 안에 Component만 받겠다
// Component를 불러서 사용하는 것

class MyComponentClass extends Component {
    render() {
        const {name, age, children} = this.props;
        return (
            <div>
                이름은 {name},
                나이는 {age},
                {children}
            </div>
        )
    }
}
MyComponentClass.defaultProps = {
    name: "기본 이름",
    age: 1,
    children: "aaa"
}
// 내보내기
export default MyComponentClass;