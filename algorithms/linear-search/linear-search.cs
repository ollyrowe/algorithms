class LinearSearch {
	public static int linearSearch(int[] array, int value)
	{
		for (int i = 0; i < array.Length; i++)
		{
			if (array[i] == value) {
                return i;
            }
		}
		return -1;
	}
}
