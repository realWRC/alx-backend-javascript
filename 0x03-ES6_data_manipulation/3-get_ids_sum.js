export default function getStudentIdsSum(studentList) {
  return studentList.reduce((accumulate, student) => accumulate + student.id, 0);
}
