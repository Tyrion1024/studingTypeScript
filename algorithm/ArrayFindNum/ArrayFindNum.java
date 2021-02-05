class ArrayFindNum {
  public static void main(String[] args) {
    int[][] arr = new int[][]{{1, 2, 3, 4, 5}, {10, 20, 30, 40, 50}, {100, 200, 300, 400, 500}, {1000, 2000, 3000, 4000, 5000}};
    System.out.println(exe(arr, 300));
  }


  public static boolean exe(int[][] arr, int target) {
    for(int i = 0; i < arr.length; i++) {
      if (arr[i][arr[i].length - 1] >= target) {
        for(int j = 0; j < arr[i].length; j++) {
          if (arr[i][j] == target) {
            return true;
          }
        }
      }
    }
    return false;
  }
}