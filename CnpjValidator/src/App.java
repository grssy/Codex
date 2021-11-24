

import javax.swing.JOptionPane;

public class App {

    
    public static void main(String[] args) throws Exception {
        
        String stringCnpj = JOptionPane.showInputDialog("Digite o CNPJ");


        CnpjValidator validator = new CnpjValidator(stringCnpj);

        JOptionPane.showMessageDialog(null, "A validade do CNPJ é: " + validator.isValid());
    }   
}
