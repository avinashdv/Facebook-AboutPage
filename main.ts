class fbAbout {    
    constructor(private work: string, private state: string, private phoneNumber: number,
        private email: string, private dateOfBirth: string, private school?: string, private university?: string){
            this.work = work;
            this.state = state;
            this.phoneNumber = phoneNumber;
            this.email = email;
            this.dateOfBirth = dateOfBirth;
            this.school = school;
            this.university = university;
        }

    // Work
    getWork = (): string => {
        return this.work;
    }
    setWork = (work: string) => {
        this.work = work;
    }

    // State.
    getState = (): string => {
        return this.state;
    }
    setState = (state: string) => {
        this.state = state;
    } 

    // Phone Number
    getPhoneNumber = (): number => {
        return this.phoneNumber; 
    }
    setPhoneNumber = (phone: number) => {
        this.phoneNumber = phone;
    }

    // Email
    getEmail = (): string => {
        return this.email;
    }
    setEmail = (email: string) =>{
        this.email = email;
    }

    getDateOfBirth = (): string => {
        return this.dateOfBirth;
    }
    setDateOfBirth = (date:string) => {
        this.dateOfBirth = date;
    }

    // School
    getSchool = (): string => {
        return this.school;
    }
    setSchool = (school: string) => {
        this.school = school;
    }

    // University
    getUniversity = (): string => {
        return this.university
    }
    setUniversity = (university: string) => {
        this.university = university;
    }
}

let about = new fbAbout("Student", "AndhraPradesh", 8945784648, "avinash.dv.264@gmail.com", "24 september 1995", "St.Joseph's English Medium High School", "Andhra Loyola Institute of Engineering and Technology");


// Editing the Work.
about.setWork("Free Lancer");

// Printing the details in console log.
console.log(`Facebook About Section: \n
Work: ${about.getWork()} \n
School: ${about.getSchool()} \n
University: ${about.getUniversity()} \n
State: ${about.getState()} \n
Phone Number: ${about.getPhoneNumber()} \n
Email: ${about.getEmail()} \n
Date Of Birth: ${about.getDateOfBirth()} \n`
);