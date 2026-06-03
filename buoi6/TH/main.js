let students = [
  {
    id: 1,
    name: "Nguyen Van A",
  },
  {
    id: 2,
    name: "Tran Thi B",
  },
  {
    id: 3,
    name: "Le Van C",
  },
];

const showStudents = () => {
  console.log("Danh sách sinh viên:");
  students.forEach((student) => {
    console.log("ID:", student.id, " - Name:", student.name);
  });
};
let cout = 0;
const addStudent = (name) => {
  const newId = students.length > 0 ? students[students.length - 1].id + 1 : 1;
  let newName = prompt("Nhập tên sinh viên:");
  const newStudent = { id: newId, name: newName };
  students.push(newStudent);
  console.log("Đã thêm sinh viên:", newStudent);
};

const removeStudent = (id) => {
  const index = students.findIndex((student) => student.id === id);
  if (index !== -1) {
    const removedStudent = students.splice(index, 1)[0];
    console.log("Đã xóa sinh viên:", removedStudent);
  } else {
    console.log("Không tìm thấy sinh viên với ID:", id);
  }
};
