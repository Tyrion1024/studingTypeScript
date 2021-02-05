class Fibonacci {
  public static void main (String[] args) {
    System.out.println(fun1(39));
  }




  public static long fun1 (long n){
    if (n > 1) {
      long num0 = 0;
      long num1 = 1;
      long i = 2;
      while (i != n) {
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