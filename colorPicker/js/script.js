//console.log("準備完了");

//querySelector
console.log(document.querySelector('#colorPicker').value);

//DOM置換
document.querySelector('#colorText').textContent = 'カラーコード：';
document.querySelector('#colorText').textContent = document.querySelector('#colorPicker').value;

//文字列と値をくっつける方法は二種・` &{}`を推奨
document.querySelector('#colorText').textContent = 'カラーコード：' + document.querySelector('#colorPicker').value;
document.querySelector('#colorText').textContent = `カラーコード：${document.querySelector('#colorPicker').value}`;

//constを使えばまとまる
const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

text.textContent = `カラーコード：${color.value}`;

//イベントの取得
//関数を作る
const colorBg = () => {
   //bgの変更
   document.body.style.background = color.value;

   //テキストとの変更
   // text.textContent = `カラーコード：${color.value}`;

   //if文
   if (color.value === '#ffffff') {
      text.textContent = `カラーコード: ${color.value} (white)`;
    }
    else if(color.value ==='#000000'){
      text.textContent = `カラーコード：${color.value} (black)`;
    }
    else{
      text.textContent = `カラーコード：${color.value}`;
    }
};
//colorがinputされたらcolorBgを発火してね
color.addEventListener('input',colorBg);

//無名関数
//これでも同義
// color.addEventListener('input', () => {
//    text.textContent = `カラーコード：${color.value}`;
// });

