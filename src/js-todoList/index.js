const onClickAdd = () => {
  //テキストボックスの値を取得して追加ボタン押下後inputboxをからにする
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //liタグ生成
  const li =  document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = inputText;
  div.appendChild(p);
  li.appendChild(div);

  document.getElementById("incomplete-list").appendChild(li);


  console.log(li);
}

document.getElementById("add-button").addEventListener("click",onClickAdd);
