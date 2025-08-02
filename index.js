const learnerName = document.querySelector(".studentName");
const learnerGrade = document.querySelector(".grade");
const learnerSubjects = document.querySelector(".subjects");
const learnerMarks = document.querySelector(".marks");
let generateCard = document.querySelector(".generateReport");
const displayField = document.querySelector(".report");
const heading2 = document.querySelector(".myh2");
const generate = function () {
  if (learnerName.value === "") {
    alert(
      "PLEASE FILL IN EVERYTHING. And make sure your subjects match the number of your marks. Eg 4 subject the enter 4 marks for each subject."
    );
    return;
  }

  const grade = Number(learnerGrade.value);
  const marks = learnerMarks.value.split(",");
  const subjects = learnerSubjects.value.split(",");

  for (let i = 0; i < marks.length; i++) {
    marks[i] = Number(marks[i]);
  }

  for (let i = 0; i < subjects.length; i++) {
    subjects[i] = subjects[i].toLowerCase();
    subjects[i] = subjects[i][0].toUpperCase() + subjects[i].slice(1);
  }

  let sum = 0;
  for (const calc of marks) {
    sum += calc;
  }

  const totalAvg = Math.trunc(Math.round(sum / marks.length));

  learnerSubjects.value = subjects.join(", ");

  const student = {};
  const name = learnerName.value[0].toUpperCase() + learnerName.value.slice(1);
  student.name = name;
  student.grade = grade;
  student.subjects = subjects;
  student.marks = marks;
  student.totalAvg = totalAvg;

  if (
    student.grade === 0 ||
    student.marks.length === 0 ||
    student.subjects.length === 0 ||
    student.totalAvg === 0
  ) {
    alert(
      "PLEASE FILL IN EVERYTHING. And make sure your subjects match the number of your marks. Eg 4 subject the enter 4 marks for each subject."
    );
    return;
  } else if (student.marks.length !== student.subjects.length) {
    alert(
      "PLEASE FILL IN EVERYTHING. And make sure your subjects match the number of your marks. Eg 4 subject the enter 4 marks for each subject."
    );
    return;
  }

  if (totalAvg >= 50) {
    student.passed = `Excelent👏 ${name}, you passed. Keep it up!`;
    heading2.textContent = `Excelent👏 ${name}, you passed. Keep it up!`;
  } else {
    student.failed = `${name}, you failed. Work smarter or harder, or even both!`;
    heading2.textContent = `${name}, you failed. Work smarter or harder, or even both!`;
  }
  if (totalAvg >= 80) {
    heading2.textContent = `congratulations🎊 ${name}, well done`;
    heading2.style.color = "green";
  } else if (totalAvg === 50 < 79) {
    heading2.textContent = `Keep it up ${name}, maybe you can do better.`;
    heading2.style.color = "orange";
  } else if (totalAvg < 50) {
    heading2.textContent = `${name}, you failed. Try harder || smarter or both next time.`;
    heading2.style.color = "red";
  }

  displayField.textContent = `
----------------------------  
------------------------- ${name}'s Report Card ------------------------- 
  ----------------------------    

StudensName: ${name}

Grade: ${grade}

Subjects: ${subjects}

Marks: ${marks}

Total Average: ${totalAvg}

Passed/Failed: ${
    totalAvg >= 50
      ? (student.passed = `${name}, passed. ✅`)
      : (student.failed = `${name}, failed. 🔻`)
  }


  `;

  console.log(student, student.subjects);
};

generateCard.addEventListener("click", generate);
