// Objekat - sablon - Student
function Student(name, address, phone, course) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.course = course;
 
    this.getName = function() {
        return this.name + "\n"
    }
 
    this.getInfo = function() {
        return "Name: " +  this.name + "\n" +
        "Address: " + this.address + "\n" +
        "Phone: " + this.phone + "\n" +
        "Course: " + this.course
    }
}
// Objekti    --    (student test - osnovni, student1,2,3 proizvoljni) 
var studenttest = new Student("John Benson", "High Park 36", "(507) 833-3567", "Geography");
let studenttestinfo = studenttest.getName() + studenttest.getInfo();
console.log(studenttestinfo)

var student1 = new Student("Anna Bray", "Mars", "(111) 111-111", "Computer Science");
let student1info = student1.getName() + student1.getInfo();
console.log(student1info)

var student2 = new Student("Eris Morn", "Io", "(222) 222-222", "Religion");
let student2info = student2.getName() + student2.getInfo();
console.log(student2info)

var student3 = new Student("Zavala Bold", "Earth", "(333) 333-333", "Vanguard");
let student3info = student3.getName() + student3.getInfo();
console.log(student3info)