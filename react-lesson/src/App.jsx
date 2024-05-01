 // コンポーネントファイルは拡張子をjsxにする
import { useState } from "react";
import { ColorfulMessage } from "./components/colorfulMessage";
 
 export const App = () => {
  const [num,setNum] = useState(0);//()の中に値を書くことで初期値に設定できる
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [isShowFace,setIsShowFace] = useState(true);

  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  }
  const fontStyle = {
    color :"blue",
    fontSize : "100px"
  }
  return  (
    <>
      <h1 style = {fontStyle}>こんにちは!</h1>
      <ColorfulMessage color= "green">初めまして</ColorfulMessage>
      <ColorfulMessage color = "red">こんにちは！</ColorfulMessage>
      <p>お元気です！</p>
      {/* {}で括ってあげればそこがJSとして読み込まれる */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{ num }</p>
      {/* {console.log(num)} */}
      <button onClick={ onClickToggle}>on/off</button>
       { isShowFace && <p>🥹</p>} {/*&& 左がtrueの時は右を評価しfalseの時は右には目もくれずfalseを返す */}
      
    </>
  )
};
