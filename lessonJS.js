'use strict';
// let hon = "本多";
// console.log(hon);

// var ho = "宣言"
// console.log(ho);

// // var変数は上書き可能

// var ho = "再宣言"
// console.log(ho);

// //変数宣言できないようにlet,constが追加

// let val = "let変数";
// console.log(val);

// val = "letを上書き";
// console.log(val);

// letは上書きはできるが再宣言はできない。よって以下だとエラーになる
// let val = "let再宣言";

// const val = "宣言";
// console.log(val);

//constは上書きできない エディター上はエラー起きないが実行するとエラーが起きる
// val = "宣言上書き";
// console.log(val);

//constは再宣言も不可能
// const val = "再宣言";

//constで定義したで定義したオブジェクトはプロパティの変更が可能
// const introduction = {
//   age:16,
//   name:"けんすけ"
// };
// console.log(introduction);
// introduction.name = "honta";
// console.log(introduction);
// introduction.age = 100;
// console.log(introduction);
// // プロパティ追加
// introduction.kintama = "tamakinkin";
// console.log(introduction);

//constで定義した配列はプロパティの変更が可能

// const val5 = ["dog","cat"];
// console.log(val5);
// val5[0] = "raion";
// console.log(val5);
// val5[2] = "ti-ta-";
// console.log(val5);
// //以下で配列の最後にプロパティを追加
// val5.push("ほんた");

// console.log(val5);

/**
 * テンプレート文字列
 * 簡単にいうと文字列にjsの変数を埋め込めれる様になった
 */
//従来の方法
// const lastName = "健資";
// const age = 27;
// const massage = "私の名前は" + lastName + "です。年齢は" + age + "です"; 
// console.log(massage);

// //テンプレート文字列を用いた場合
// const massage2 = `私の名前は${lastName}です。年齢は${age}です`;
// console.log(massage2);

/**
 * アロー関数
 * 
 */

//従来の関数の書き方

// const plas = function(a,b){
//   let sam = a + b;
//   return sam;
// };
// console.log(plas(10,3));

// //アロー関数
// const plas2 = (a,b) =>{
//   let sam = a + b;
//   return sam;
// }
// console.log(plas(10,3));

// const hontaa = (a,b) => {
//   let tasizan = a + b;
//   return tasizan;
// }

// console.log(hontaa(32,23));

// const hikizan = (a,b) =>{
//   let hikizan = a - b;
//   return hikizan;
// }

// console.log(hikizan(100,34));


/**
 * 分割代入
 * 4/17start
 */

// const myprofile = {
//   nname: "kennsuke",
//   age : 27
// };
// //以下のようの.で繋ぐことができる。
// const massage9 = `名前は${myprofile.nname}です。年齢は${myprofile.age}です`
// console.log(massage9);
// //しかしこれだとプロパティが多くなった場合冗長になる。

// const {nname,age} = myprofile
// const massage10 = `名前は${nname}です。年齢は${age}です`
// console.log(massage10);

//配列の分割代入
// const myprofile2 = ["honta",25];
// const massage5 = `名前は${myprofile2[0]}です。年齢は${myprofile2[1]}です`
// console.log(massage5);

//上記を分割代入すると。。。
// const [name,age] = myprofile2; //配列番号で呼び出すのではなく好きな変数をここでつけるイメージ
// const  massage13 = `名前は${name}です。年齢は${age}です`
// console.log(massage13);

/**
 * デフォルト値(引数、分割代入で使用)　デフォルト値とは、nameという変数が渡されていないときにテンプレを渡すこと
 * これによりundefinedが出なくなる
 * 4/17start
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちわ${name}さん！`);
// sayHello("健介");

/**
 * オブジェクトの省略記法
 * 
 */
// const name = "けんすけ";
// const age = 27;

// const myprofile = {
//   name :name,
//   age :age
// }
// console.log(myprofile);
//このような場合(変数名とプロパティ名が一緒の場合、省略できる)
// const myprofile = {
//   name ,
//   age
// }
// console.log(myprofile);

/**
 * スプレッド構文 ...
 * 
 */

//配列の展開として使う方法
// 配列の中身を順番に展開していきたい場合に使用できる
const arr1 = [1,2];
console.log(arr1)
console.log(...arr1)
//　このように出力される
// [ 1, 2 ]
// 1 2

// まとめる
const arr2 = [1,2,3,4,5];
const [num1,num2,...arr3] = arr2;
console.log(arr2);

console.log(...arr2);

/**
 * mapやfiltermを使った配列の処理
 * filterとは配列の要素をフィルタリングして出力すること
 */

const nameArr = ["ほんた","いせ","ひろせ"];
// console.log(nameArr);
// for (let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index])
// }
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

nameArr.map((name) => console.log(name));
nameArr.map((name2) => console.log(name2));

const numArray = [1,2,3,4,5];
const newNumArray = numArray.filter((num) => {
  return num % 2  === 1;
});

console.log(newNumArray);

const newNameArr = nameArr.map((name) => {
  if (name === "ひろせ"){
    return name
   } else {
      return name + "さん";
    }
});
console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件?条件がtrueの時、falseの時
// const val1  = 1<0 ? "trueです":"falseです";//１が０より大きいというのは正しいのでtrueですが出力される 逆にするとfalseですが出力される
// console.log(val1)

// const num = "1300";
// console.log(num.toLocaleString());

// const formtterNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formtterNum);
// const val1  =  1>0 ? "trueです":"falseです";
// console.log(val1)

const checkSum = (num1,num2) =>{
  return num1 + num2 > 100 ? "１００を超えています" : "１００以内です"
}

console.log(checkSum(1,4999));

/**
 * 論理演算子の本当の意味を知ろう(おまけ)
 * 
 * 
 */
// ||の本当の意味 -> 左側がtruthyの時、その時点で返却される
const num = 1;
const fee = num || "金額が未設定です";
console.log(fee);
