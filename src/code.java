import java.util.*;

class code{
    public static void main(String[] args) {
        
        // Scanner sc = new Scanner(System.in);
        int[] xyz = {2 , 3 , 9 , 12 , 1}; 
        // int[] xyz = {2};
        int n = xyz.length;

        if(n == 1){
            System.out.println("2nd largest number is not present");
        }

        else{
            Arrays.sort(xyz);

            System.out.println("2nd largest element is " + xyz[n-2]);
        }
        
    }

   
}