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
    public static void Main() {
        int[] array = {1,2,3,4,5,6};
        int value = 4;
        linearSearch(array, value);
    }
}
