def linearSearch(array, value):
	for i in range(0, len(array)):
		if (array[i] == value):
			return i
	return -1

