var fbAbout = /** @class */ (function () {
    function fbAbout(work, state, phoneNumber, email, dateOfBirth, school, university) {
        var _this = this;
        this.work = work;
        this.state = state;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.school = school;
        this.university = university;
        // Work
        this.getWork = function () {
            return _this.work;
        };
        this.setWork = function (work) {
            _this.work = work;
        };
        // State.
        this.getState = function () {
            return _this.state;
        };
        this.setState = function (state) {
            _this.state = state;
        };
        // Phone Number
        this.getPhoneNumber = function () {
            return _this.phoneNumber;
        };
        this.setPhoneNumber = function (phone) {
            _this.phoneNumber = phone;
        };
        // Email
        this.getEmail = function () {
            return _this.email;
        };
        this.setEmail = function (email) {
            _this.email = email;
        };
        this.getDateOfBirth = function () {
            return _this.dateOfBirth;
        };
        this.setDateOfBirth = function (date) {
            _this.dateOfBirth = date;
        };
        // School
        this.getSchool = function () {
            return _this.school;
        };
        this.setSchool = function (school) {
            _this.school = school;
        };
        // University
        this.getUniversity = function () {
            return _this.university;
        };
        this.setUniversity = function (university) {
            _this.university = university;
        };
        this.work = work;
        this.state = state;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.school = school;
        this.university = university;
    }
    return fbAbout;
}());
var about = new fbAbout("Student", "AndhraPradesh", 8945784648, "avinash.dv.264@gmail.com", "24 september 1995", "St.Joseph's English Medium High School", "Andhra Loyola Institute of Engineering and Technology");
// Editing the Work.
about.setWork("Free Lancer");
// Printing the details in console log.
console.log("Facebook About Section: \n\nWork: " + about.getWork() + " \n\nSchool: " + about.getSchool() + " \n\nUniversity: " + about.getUniversity() + " \n\nState: " + about.getState() + " \n\nPhone Number: " + about.getPhoneNumber() + " \n\nEmail: " + about.getEmail() + " \n\nDate Of Birth: " + about.getDateOfBirth() + " \n");
