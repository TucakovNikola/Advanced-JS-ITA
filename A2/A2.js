document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("get-text-btn");
    let textArea = document.getElementById("my-text-area");
    let loader = document.getElementById("loader");
    
    button.addEventListener("click", function() {
        loader.style.display = "inline-block";
        fetch('https://v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt')
            .then(function (response) {
                if(response.status !== 200){
                    throw Error("Error while reading file.");
                }
                return response.text();
            })
            .then(function (text) {
                let studentRecords = text.split(/\r?\n/);

                function parseStudentRecord(record, index, array) {
                    if (index % 4 === 0) {
                        let name = array[index];
                        let address = array[index + 1];
                        let phone = array[index + 2];
                        let subject = array[index + 3];
                        return {
                            name: name.trim(),
                            address: address.trim(),
                            phone: phone.trim(),
                            subject: subject.trim()
                        };
                    }
                }

                let students = studentRecords.map(parseStudentRecord).filter(Boolean);

                textArea.innerHTML = JSON.stringify(students, null, 2);
            })
            .catch(function (err) {
                textArea.innerHTML = 'Fetch problem: ' + err.message;
            })
            .finally(function(){
                loader.style.display = "none";
            });
    });
});
