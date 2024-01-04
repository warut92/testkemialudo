# Simple game

ตัวอย่าง เกมชื่อสารประกอบไอออนนิก โดยใช้ JavaScript โดยให้ผู้เล่นพิมพ์ชื่อสารประกอบจากธาตุที่ปรากฏ เกมนี้ยังอยู่ในการพัฒนา

## อธิบายการทำงานหลัก

1. การสุ่ม 2 ชุด ชุดที่ 1 สำหรับ cation ชุดที่ 2 สำหรับ anion

```
randomCationIndex = Math.floor(Math.random() * cationArr.length);
randomAnionIndex = Math.floor(Math.random() * anionArr.length);
```
  
2. แสดงผลหน้าจอ สำหรับ cation กับ anion 

```
document.getElementById('cation').innerHTML = cationArr[randomCationIndex];
document.getElementById('anion').innerHTML = anionArr[randomAnionIndex]; 
```
 
3. นำเลขการสุ่มทั้ง 2 ชุด มาทำการระบุคำตอบจากชื่อของสารประกอบที่กำหนดไว้ในรูปแบบของอาร์เรย์ 2 มิติ

ตัวอย่าง อาร์เรย์ 2 มิติ

```
let items = [
  [1, 2],
  [3, 4],
];
console.log(items[0][0]); // 1
console.log(items[0][1]); // 2
console.log(items[1][0]); // 3
console.log(items[1][1]); // 4
console.log(items);
```
ตัวอย่าง

```
  allIonicCompounds = [
    ["sodiumchloride", "sodiumbromide"],
    ["calciumchloride", "calciumbromide"]
  ];
  
//หากสุ่มได้ 00 
console.log(allIonicCompounds[0][0]); // sodiumchloride
//หากสุ่มได้ 01
console.log(allIonicCompounds[0][1]); // sodiumbromide
//หากสุ่มได้ 10
console.log(allIonicCompounds[1][0]); // calciumchloride
//หากสุ่มได้ 11
console.log(allIonicCompounds[1][1]); // calciumbromide
```

4. ทำการตรวจสอบคำตอบโดยการ ดึงข้อความที่ผู้เล่นกรอกมาในช่อง Input นำมาเปรียบเทียบด้วย oparator === แล้วให้แสดงข้อความต่าง ๆ ผ่านจอ ตามเงื่อนไขต่าง ๆ

## สัญญาอนุญาต
MIT
