//ตั้งตัวแปร cation กับ anion
const cationArr = ["Na<sup>+</sup>", "Ca<sup>+</sup>"];
const anionArr = ["Cl<sup>-</sup>", "Br<sup>-</sup>"];

//สร้างตัวแปรสุ่น
let randomCationIndex = "";
let randomAnionIndex = "";

//ตัวแปรสำหรับคำตอบ
var allIonicCompounds = [];
let selecetedIonicCompounds = "";

//ฟังก์ชันสุ่ม
function random() {
  //ส่งลบข้อความตรวจคำตอบ
  document.getElementById('reply').innerHTML = "";

  //กำหนดคำตอบในรูปแบบของ 2D array
  allIonicCompounds = [
    ["sodiumchloride", "sodiumbromide"],
    ["calciumchloride", "calciumbromide"],
  ];
  //สุ่ม มีค่าเริ่มต้นจาก 0
  randomCationIndex = Math.floor(Math.random() * cationArr.length);
  randomAnionIndex = Math.floor(Math.random() * anionArr.length);

  //แสดง cation กับ anion ทางหน้าจอ
  document.getElementById('cation').innerHTML = cationArr[randomCationIndex];
  document.getElementById('anion').innerHTML = anionArr[randomAnionIndex];

  //ดึงชื่อของสารประกอบจาก IonicCompounds
  selecetedIonicCompounds = allIonicCompounds[randomCationIndex][randomAnionIndex];
}
//สั่ง random() ตั้งแต่ตอนโหลดเพจ
random()

//ตัวแปรสำหรับคะแนน
let score = 0;
//ในครั้งแรก กำหนดให้คะแนนเท่ากับ 0
if (localStorage.userScore === undefined) {
  localStorage.userScore = 0
}
//ดึงคะแนนจาก localStorage
document.getElementById('score').innerHTML = localStorage.userScore;

function checkAnswer() {
  //ดึงคำตอบของผู้ใช้
  let answerFromUser = document.getElementById('answer_user').value;
  //ถ้าผู้ใช้ไม่กรอกคำตอบ ให้แสดงผลว่าต้องกรอกคำตอบก่อน
  if (answerFromUser === "") {
    document.getElementById('reply').innerHTML = "กรุณากรอกคำตอบ";
    //หากคำตอบของผู้ใช้ตรงกับคำตอบที่ถูกต้อง
  } else if (selecetedIonicCompounds === answerFromUser) {
    document.getElementById('reply').innerHTML = "ถูกต้องครับ รอการสุ่มอัตโนมัติ";
    //เพิ่มทีละ 1 คะแนน
    score++
    //แสดงค่าคะแนน
    document.getElementById('score').innerHTML = score;
    //ส่งคะแนนเข้า localStorage
    score
    localStorage.userScore = Number(localStorage.userScore) + 1;
    //ลบข้อความตรวจคำตอบ
    setTimeout(deleteAnsUser, 1500);
    //
    setTimeout(random, 1500);
  } else {
    document.getElementById('reply').innerHTML = "ไม่ถูกครับ";
    setTimeout(deleteAnsUser, 1000);
  }
}

//ฟังก์ชันลบคำตอบที่ผู้ใช้ตอบมา
function deleteAnsUser() {
  document.getElementById('answer_user').value = "";
}
