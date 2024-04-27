 // コンポーネントファイルは拡張子をjsxにする
import { ColorfulMessage } from "./components/colorfulMessage";
 
 export const App = () => {
  const contentButton = () => alert();
  const fontStyle = {
    color :"blue",
    fontSize : "100px"
  }
  return  (
    <>
      <h1 style = {fontStyle}>こんにちは!</h1>
      <ColorfulMessage color= "green">うるせえ！</ColorfulMessage>
      <ColorfulMessage color = "red">こんちくしょー！</ColorfulMessage>
      <p>お元気です！</p>
      {/* {}で括ってあげればそこがJSとして読み込まれる */}
      <button onClick={contentButton}>ボタン</button>
    </>
  )
};
