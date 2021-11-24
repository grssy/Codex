
import java.util.Scanner;

public class App {

    
    public static void main(String[] args) throws Exception {
        
        Scanner sc= new Scanner(System.in);
        String stringCnpj = sc.nextLine();
        sc.close();

        CnpjValidator validator = new CnpjValidator(stringCnpj);

        System.out.println(validator.isValid());
    }   
}
