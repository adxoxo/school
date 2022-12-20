class Course():

    Coursename = ("ComputerProg")
    Grade = (2.5)
    Units = (30)

    def displayGrade(self, coursename, grade, units):
        display = ((coursename) + " " + str(grade) + " " + str(units))
        return display



course = Course()
name = course.Coursename
grade = course.Grade
units = course.Units

display = course.displayGrade(name,grade,units)
print (display)
