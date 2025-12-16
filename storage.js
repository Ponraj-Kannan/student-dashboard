export function saveStudents(data) {
  localStorage.setItem("students", JSON.stringify(data));
}
export function getStudents() {
  return JSON.parse(localStorage.getItem("students"));
}
