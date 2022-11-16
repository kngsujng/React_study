import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  // let post = '광주 곱창 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '광주 곱창 맛집', '리액트 어렵땅']);
  let [like, likePlus] = useState(0);

  return (
    <div className="App">
      <div>
        <h4 className="black-nav">React Blog</h4>
      </div>

      <div className="list">
        <h4 className="title1">{글제목[0]} </h4>
        <span onClick={() => {likePlus(like+1)}}>좋아용 {like}</span> 
        <p>2월 17일 발행</p>
        <button onClick={()=>{
          let copy = [...글제목];
          copy[0] = '여자 바지 추천';
          글제목변경(copy);
          }
        }>글수정</button>
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>3월 18일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>8월 20일 발행</p>
      </div>

      <button onClick={()=>{
        let copyForSort = [...글제목];
        copyForSort.sort();
        글제목변경(copyForSort);
        }
      }>가나다순 정렬</button>
    </div>
  );
}

export default App;
