import {useState} from "react";

function App() {

  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange= (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === '') {
      return;
    }
    // 함수로 값을 수정하는 방식
    setToDos((currentArray) => {
      const newArray = [toDo, ...currentArray]
      return newArray;
    })
    // 값을 직접 수정하는 방식
    setToDo("");
  }

  return (
    <div>
      <h1>My TO Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type='text'
          placeholder='Write your to do...'
        />
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {
          toDos.map((item, index) => {
            return (<li key={index}>{item}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;

/*
input에서 value를 가져와서 console.log에 출력하는 부분까지는 같음
버튼을 눌렀을 때 값을 가져오고 싶을 때
form태그를 만들어주고 태그 내부에 button을 넣음
form태그 내부에 있는 button 태그는 기본적으로 submit으로 작동함
submit은 기본적으로 페이지 이동이나 새로고침을 하는데 그걸 제거해 주기 위해 form에 onSubmit에 함수를 지정함
이 함수안에 event.preventDefault를 지정해서 페이지 이동을 제거함

값을 수정하는 방식으로는 2가지가 있음
    // 값을 직접 수정하는 방식
    setToDo("");
    // 함수로 값을 수정하는 방식
    setToDos((currentArray) => {

자바스크립트의 배열.map() 메서드
.map(매개변수)의 매개변수로는 함수가 들어감
이 함수는 array의 모든 item에 대해 실행됨
그 함수가 리턴한 값이 배열에 들어감

li에는 key라는게 필요함
react가 기본적으로 list에 있는 모든 item들을 인식하기 때문에 prop 으로 key를 넣어주어야 함























*/
