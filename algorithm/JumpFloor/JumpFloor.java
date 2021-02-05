class JumpFloor {
  public static void main (String[] args) {
    System.out.println(fun(38));
  }





  public static long fun (long n){
    if (n > 2) {
      long num0 = 1;
      long num1 = 2;
      long i = 2;
      while (i != n - 1) {
        if (num1 > num0) {
          num0+=num1;
        } else {
          num1+=num0;
        }
        i++;
      }
    
      return num0 + num1;
    } else {
      return n;
    }
  }
}