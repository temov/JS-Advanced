

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


 // ## Exercise 2
// Make the functions StartAcademy and StartSubject dynamic.
// * StartAcademy - When the student calls StartAcademy, the student should also be added to the Academy property Students ( The academy that he is starting )
// * StartSubject - When the student calls StartSubject the student should also be added to the Subject property Students ( The subject that he is starting ). If there was another subject in the CurrentSubject property, that subject should be transferred to CompletedSubjects and then add the new Subject


function Academy(academyName, dateStart, dateEnd, numberOfSubjects) {

    this.name = academyName
    this.students = []
    this.subjects = []
    this.start = dateStart
    this.end = dateEnd
    this.numberOfClasses = numberOfSubjects*10 
    this.printStd = function() {

                for( let i =0; i< this.students.length;i++){
            console.log(this.students[i]);
                }
         
    
         }
    this.printSub = function() {

        for( let i =0; i< this.subjects.length;i++){
            console.log(this.subjects[i]);
                }
   
    }
}

   

function Subject(subjectTitle, isElective,academyObj) {

        this.subjectTitle = subjectTitle
        this.numberOfClasses = 10
        this.isElective = isElective
        this.academy = academyObj
        this.students = []
        
        this.overrideClasses = function(number) {

           if( number > 3){

            this.numberOfClasses = number;
            console.log(`Number of classes is ${this.numberOfClasses}`)
           }else{

            console.log("Please enter bigger number than 3")
           }
        
             }
       
       
        }

      

function Student(firstName,lastName,age) {

            this.firstName = firstName
            this.lastName = lastName
            this.age = age
            this.completedSubjects = []
            this.academy = null
            this.currentSubject = null
            this.startAcademy = function(academyObj) {
    
                        this.academy = academyObj;
                        academyObj.students.push(this);
    
            
                 }
            this.startSubject = function(subjectObj) {

                                

                            if( (this.academy !== null) && (this.academy.subjects.includes(subjectObj))){

                                if(this.currentSubject !== null){

                                   
                                    this.completedSubjects.push(this.currentSubject)
                                }

                                this.currentSubject = subjectObj;
                                subjectObj.students.push(this);
                            }else{
                                
                                console.log(`Error`);
                                
                            }
                        }

        }
                 
                      
           
           
                      let academyOne = Object.create(new Academy('Web Design','22-10-2022','22-10-2023',7 ))
                      let academyTwo = Object.create(new Academy('Graphic Design','22-05-2022','22-11-2022',5 ))
                      let academyThree = Object.create(new Academy('DevOps','22-11-2022','22-06-2023',6 ))

                     

            let subject1 = Object.create(new Subject('Angular', true,academyOne))
            let subject2 = Object.create(new Subject('HTML', false,academyTwo))
            let subject3 = Object.create(new Subject('CSS', false,academyThree))

            console.log(subject1.academy)

            subject1.overrideClasses(4)
            console.log(`Number of classes is ${subject1.numberOfClasses}`)

            let student1 = Object.create(new Student('Georgi','Mitkov', 32))
            let student2 = Object.create(new Student('Petko','Petkov', 27))
            let student3 = Object.create(new Student('Kiro','Popov', 22))
            academyOne.students.push(student1,student2,student3)
            academyOne.subjects.push(subject1,subject2,subject3)

            subject1.students.push(student1)

           
                      student1.startSubject(subject1)

                      console.log(student1.completedSubjects)
                      console.log(student1.currentSubject)
          

            // student1.startSubject(subject1)
            // console.log(student1.currentSubject)

            let student4 = Object.create(new Student('Mirko','Petrov', 25))

            student4.startAcademy(academyOne)
            student4.startSubject(subject2)
            student4.startSubject(subject3)
           
            console.log(student4)

            academyOne.printStd()
        

            console.log(academyOne)

           
        

            student3.startAcademy(academyTwo)
            console.log(academyTwo.students)
            

            
           
            
            


