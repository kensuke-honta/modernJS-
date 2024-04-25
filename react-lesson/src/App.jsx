 // コンポーネントファイルは拡張子をjsxにする
 
 export const App = () => {
  const contentButton = () => alert();
  const fontStyle = {
    color :"blue",
    fontSize : "100px"
  }
  return  (
    <>
      <h1 style = {fontStyle}>こんにちは!</h1>
      <p>お元気ですか？</p>
      {/* {}で括ってあげればそこがJSとして読み込まれる */}
      <button onClick={contentButton}>ボタン</button>
    </>
  )
};
