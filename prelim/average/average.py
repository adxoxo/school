def Average(list):
    return float(sum(list) / len(list))

values = list()

while True:
    n = float(input("Please enter a number between 60-100: "))
    if n !=0 and n in range(60,101):
        values.append(n)
    else:
        break
for i in sorted(values):
    print(i)

average = Average(values)
print(round(average,2))