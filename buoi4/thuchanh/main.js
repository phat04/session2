let students = [
  {
    id: 1,
    name: "Nguyen Van A",
    age: 20,
    gender: "male",
  },
  {
    id: 2,
    name: "Tran Thi B",
    age: 22,
    gender: "female",
  },
  {
    id: 3,
    name: "Le Van C",
    age: 21,
    gender: "male",
  },
];

const handleSubmit = (event) => {
  event.preventDefault();
  console.log("Form submitted");

  let newStudent = {
    id: students.length + 1,
    name: event.target.name.value,
    age: event.target.age.value,
    gender: event.target.gender.value,
  };
  students.push(newStudent);

  logStudents();
};

const removeStudent = () => {
  console.log("Removing student with ID:");
  let removeStudent = document.getElementById("student-id").value;
  console.log("Removing student with ID:", removeStudent);
  students = students.filter((student) => {
    console.log("Checking student with ID:", student.id);
    console.log(
      student.id !== removeStudent,
      " - ",
      student.id,
      " != ",
      removeStudent,
    );
    return student.id != removeStudent;
  });
  console.log("Student with ID " + removeStudent + " has been removed.");
  logStudents();
};

function logStudents() {
  for (let i = 0; i < students.length; i++) {
    console.log("Student ID:", students[i].id);
    console.log("Student name:", students[i].name);
    console.log("Student age:", students[i].age);
    console.log("Student gender:", students[i].gender);
  }
}
