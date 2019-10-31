#Sum square difference

TheSum = 0
TheSquare = 0

for i in range(101):
	TheSum += i*i
	TheSquare += i

n = TheSum - TheSquare*TheSquare

print(n)
