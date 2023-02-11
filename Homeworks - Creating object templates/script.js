

// # Exercises
// ## Exercise 1
// Create 3 object templates. Academy, Student and Subject. The structure should be:
// Academy
// * Name - string
// * Students - array of Students
// * Subjects - array of Subjects
// * Start - Date when it starts
// * End - Date when it ends
// * NumberOfClasses - number of subjects * 10, not settable
// * PrintStudents - method that prints all students in console
// * PrintSubjects - method that prints all subjects in console

// Subject
// * Title - string
// * NumberOfClasses - default 10, not settable
// * isElective - boolean
// * Academy - Academy object
// * Students - array of Students
// * OverrideClasses - accepts a number and rewrites the NumberOfClasses property with that number. The number can't be smaller than 3.

// Student
// * FirstName - string
// * LastName - string
// * Age - number
// * CompletedSubjects - emptyArray as default, not settable
// * Academy - null as default, not settable 
// * CurrentSubject - null as default, not settable
// * StartAcademy - accepts Academy object that it sets to the Academy property of the student
// * StartSubject - accepts Subject object and adds it to the CurrentSubject property but only if the student has an Academy object in the Academy property and that subject exists in the academy. If not, give error in console and do not set the CurrentSubject property





// function Academy(academyName, studentsArray, subjectsArray, dateStart, dateEnd, numberOfSubjects) {

//     this.name = academyName
//     this.students = studentsArray
//     this.subjects = subjectsArray
//     this.start = dateStart
//     this.end = dateEnd
//     this.numberOfClasses = numberOfSubjects*10 //  function sum(subjectArr){ for()..number of subjects}
//     this.printStd = function(studentsArray) {

//         for(let student of studentsArray){

//             console.log(student);
//                 }
    
//          }
//     this.printSub = function(subjectsArray) {

//             for(let subject of subjectsArray){

//                 console.log(subject);
//                }
        
//         }
   
//     }

//     let academyOne = Object.create(new Academy('Web Design', ['Tode Temov', 'Pero Nakov'], ['HTML', 'CSS'], '22-10-2022','22-10-2023',7 ))
//     console.log(academyOne)
//     academyOne.printStd(['Tode Temov', 'Pero Nakov'])
//     academyOne.printSub(['HTML', 'CSS'])

// function Subject(subjectTitle, isElective, academyObj, studentsArray) {

//         this.subjectTitle = subjectTitle
//         this.numberOfClasses = 10
//         this.isElective = isElective
//         this.academy = academyObj
//         this.students = studentsArray
        
//         this.overrideClasses = function(number) {

//            if( number > 3){

//             this.numberOfClasses = number;
//             console.log(`Number of classes is ${this.numberOfClasses}`)
//            }else{

//             console.log("Please enter bigger number than 3")
//            }
        
//              }
       
       
//         }

//         let subject1 = Object.create(new Subject('Angular', true, academyOne, ['Kiro Fetak', 'Pero Nakov', 'Mirka Ginova']))

//         console.log(subject1)

//         subject1.overrideClasses(4)

//         console.log(`Number of classes is ${subject1.numberOfClasses}`)

// function Student(firstName,lastName,age,academyObj) {

//             this.firstName = firstName
//             this.lastName = lastName
//             this.age = age
//             this.completedSubjects = []
//             this.academy = null
//             this.currentSubject = null
//             this.startAcademy = function(academyObj) {
    
//                         this.academy = academyObj;
    
            
//                  }
//             this.startSubject = function(subjectObj) {

//                             for (i=0; i<academyObj.subjects.length; i++){

//                             if( (this.academy === academyObj) && (this.currentSubject === academyObj.subjects[i])){

//                                 this.currentSubject = subjectObj;
//                             }else{
                                
//                                 console.log(`Error`);
//                                 this.currentSubject = null
//                             }

//                         }
                 
//                       }
           
           
//             }

//             let student1 = Object.create(new Student('Georgi','Mitkov', 32, academyOne))
//             console.log(student1);
//             student1.startAcademy(academyOne)
//             console.log(`${student1.academy}`)

//             student1.startSubject(subject1)
//             console.log(student1.currentSubject)

            
 // ## Exercise 2
// Make the functions StartAcademy and StartSubject dynamic.
// * StartAcademy - When the student calls StartAcademy, the student should also be added to the Academy property Students ( The academy that he is starting )
// * StartSubject - When the student calls StartSubject the student should also be added to the Subject property Students ( The subject that he is starting ). If there was another subject in the CurrentSubject property, that subject should be transferred to CompletedSubjects and then add the new Subject

function Academy(academyName, studentsArray, subjectsArray, dateStart, dateEnd, numberOfSubjects) {

    this.name = academyName
    this.students = studentsArray
    this.subjects = subjectsArray
    this.start = dateStart
    this.end = dateEnd
    this.numberOfClasses = numberOfSubjects*10 //  function sum(subjectArr){ for()..number of subjects}
    this.printStd = function(studentsArray) {

        for(let student of studentsArray){

            console.log(student);
                }

         }
    this.printSub = function(subjectsArray) {

            for(let subject of subjectsArray){

                console.log(subject);
               }
    
        }

    }

    let academyOne = Object.create(new Academy('Web Design', ['Tode Temov', 'Pero Nakov'], ['HTML', 'CSS'], '22-10-2022','22-10-2023',7 ))
    console.log(academyOne)
    academyOne.printStd(['Tode Temov', 'Pero Nakov'])
    academyOne.printSub(['HTML', 'CSS'])

function Subject(subjectTitle, isElective, academyObj, studentsArray) {

        this.subjectTitle = subjectTitle
        this.numberOfClasses = 10
        this.isElective = isElective
        this.academy = academyObj
        this.students = studentsArray
    
        this.overrideClasses = function(number) {

           if( number > 3){

            this.numberOfClasses = number;
            console.log(`Number of classes is ${this.numberOfClasses}`)
           }else{

            console.log("Please enter bigger number than 3")
           }
    
             }
   
   
        }

        let subject1 = Object.create(new Subject('Angular', true, academyOne, ['Kiro Fetak', 'Pero Nakov', 'Mirka Ginova']))

        console.log(subject1)

        subject1.overrideClasses(4)

        console.log(`Number of classes is ${subject1.numberOfClasses}`)

function Student(firstName,lastName,age,completedSubjects,academyObj,currentSubject) {

            this.firstName = firstName
            this.lastName = lastName
            this.age = age
            this.completedSubjects = []
            this.academy = null
            this.currentSubject = null
            this.startAcademy = function(academyObj) {

                        this.academy = academyObj;
                        academyObj.students.push(`${this.firstName} ${this.lastName}`);
        
                 }
            this.startSubject = function(subjectObj) {

    
                                subjectObj.students.push(`${this.firstName} ${this.lastName}`);

                            if((this.currentSubject !== null) &&(this.currentSubject !== '')){

                                let current = this.currentSubject;

                                completedSubjects.push(current);


                                this.currentSubject = subjectObj.subjectTitle;
                            }
             
                      }
       
       
            }
            let student1 = Object.create(new Student('Georgi','Mitkov', 32, academyOne))
            let student2 = Object.create(new Student('Panko','Brasnarov', 28, academyOne))
            console.log(student1);

            student1.startAcademy(academyOne)
            student2.startAcademy(academyOne)
            console.log(`${student1.academy}`)
            console.log(academyOne.students)

            student1.startSubject(subject1)
            console.log(student1.completedSubjects);
            console.log(student1.currentSubject);
