//ตั้งตัวแปร
const cationArr = ["Na<sup>+</sup", "Ca<sup>+</sup"];
const anionArr = ["Cl<sup>-</sup", "Br<sup>-</sup"];

//สร้างตัวแปรสุ่น
let randomNum1 = ""
let randomNum2 = ""

//ตัวแปรสำหรับคำตอบ
var answerKemioArr = []
let answerKemioStr =""

//ฟังก์ชันสุ่ม
function random() {
  //ส่งลบข้อความตรวจคำตอบ
  document.getElementById('reply').innerHTML = ""

  //กำหนดคำตอบในรูปแบบของ 2D array
  answerKemioArr = [
    ["sodiumchloride", "sodiumbromide"],
    ["calciumchloride", "calciumbromide"],
  ]
  //สุ่ม
  randomNum1 = Math.floor(Math.random() * 2);
  randomNum2 = Math.floor(Math.random() * 2);

//ส่งออกตัวไอออน
  document.getElementById('cation').innerHTML = cationArr[randomNum1];
  document.getElementById('anion').innerHTML = anionArr[randomNum2];
  answerKemioStr = answerKemioArr[randomNum1][randomNum2]
}
random()
function checkAnswer() {
  console.log('ANSWERKEMIOSTR', answerKemioStr)
  let answerFromUser = document.getElementById('answer_user').value;
  console.log('ANSWERFROMUSER ', answerFromUser )
  if (answerFromUser === "") {
    document.getElementById('reply').innerHTML = "กรุณากรอกคำตอบ"
  } else if (answerKemioStr === answerFromUser) {
    document.getElementById('reply').innerHTML = "ถูกต้องครับ รอการสุ่มอัตโนมัติ"
    setTimeout(deleteAns, 1500)
    setTimeout(random, 1500)
  } else {
    document.getElementById('reply').innerHTML = "ไม่ถูกครับ"
    setTimeout(deleteAns, 1000)
  }
}

//ฟังก์ชันลบคำตอบที่ผู้ใช้ตอบมา
function deleteAns() {
  document.getElementById('answer_user').value = ""
}
