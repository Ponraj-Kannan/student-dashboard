import { fetchStudents } from './api.js';
import { saveStudents, getStudents } from './storage.js';
const button = document.getElementById("loadBtn");
const list = document.getElementById("studentList");
button.addEventListener("click", async () => {
  let students = getStudents();
  if (!students) {
    students = await fetchStudents();
    saveStudents(students);
  }

  displayStudents(students);
});
function displayStudents(students) {
  list.innerHTML = "";
  students.forEach(({ name, email }) => {
    const li = document.createElement("li");
    li.innerHTML = `Name: ${name} | Email: ${email}`;
    list.appendChild(li);
  });
}
