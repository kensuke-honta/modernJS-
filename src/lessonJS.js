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

//letは上書きはできるが再宣言はできない。よって以下だとエラーになる
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

const plas = function(a,b){
  let sam = a + b;
  return sam;
};
console.log(plas(10,3));

//アロー関数
const plas2 = (a,b) =>{
  let sam = a + b;
  return sam;
}
console.log(plas(10,3));

const hontaa = (a,b) => {
  let tasizan = a + b;
  return tasizan;
}

console.log(hontaa(32,23));

const hikizan = (a,b) =>{
  let hikizan = a - b;
  return hikizan;
}

console.log(hikizan(100,34));


/**
 * 分割代入
 * 4/17start
 */