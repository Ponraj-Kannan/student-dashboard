export async function fetchStudents() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return await response.json();
  } catch (error) {
    console.log("Error fetching data", error);
  }
}
