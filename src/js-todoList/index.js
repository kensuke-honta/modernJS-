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

  //bottun(完了タグ)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click",() => {
    //押された完了ボタンの親にあるliタグ以下の完了ボタンと削除ボタンの削除
    const moveTarget = completeButton.closest("li");
    completeButton.nextElementSibling.remove();//nextElementSiblingメソッドは隣にある要素を削除するというメソッド
    completeButton.remove();//指定したボタンを削除
    //戻すボタンを生成してdivタグ配下に設定
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    moveTarget.firstElementChild.appendChild(backButton);
    //上記までで完了->戻すボタンの切り替えは完成、以下で完了が押されたら完了リストに移動する処理を実装
    document.getElementById("complete-list").appendChild(moveTarget);

  });

  //bottun(削除タグ)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click",() => {
    // 押された削除ボタン親にあるliタグを未完了リストから削除
    const deteleTarget = deleteButton.closest("li");
    document.getElementById("incomplete-list").removeChild(deteleTarget);

  });

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  li.appendChild(div);

  

  document.getElementById("incomplete-list").appendChild(li);

  console.log(li);
}

document.getElementById("add-button").addEventListener("click",onClickAdd);
