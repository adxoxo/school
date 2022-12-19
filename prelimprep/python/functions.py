class Number():

    x = int(input("first value: "))
    y = int(input("second value: "))

    def sum(self, x,y):
        sum = x + y 
        return sum

    def sum_odd(self, x,y):
        if x+y % 2 != 0:
            return ("odd")
        else:
            return ('even')

number = Number()

firstvalue = number.x
secondvalue = number.y

sum_odd = number.sum_odd(firstvalue,secondvalue)

print ("the sum is " + str(firstvalue))
print ("this number is " + (sum_odd))


class Name():

    name = str(input("Name: "))

name = Name()
firstname = name.name
print("his name is " + firstname)


