import java.util.ArrayList;

public class CnpjValidator {

  private ArrayList<Integer> cnpj = new ArrayList<>();
  private ArrayList<Integer> cnpjWithoutVD = new ArrayList<>();
  private int[] VDinput = new int[2];
  private int[] VD = new int[2];
  private boolean valid;

  public CnpjValidator(String cnpj) {

    if(verifyFormat(cnpj)){
      
      this.cnpj = convertCnpj(cnpj);
      separeteCnpj();
      verifyDigit(new int[]{5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2});
      verifyDigit(new int[]{6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2});
      

    } else {
      this.valid = false;
    }
      
  }

  public boolean isValid() {

    return this.valid;

  }
  
  private void verifyDigit(int[] weight) {

    int sum = 0;

    for(int i = 0; i < this.cnpjWithoutVD.size(); i++) {
      sum += this.cnpjWithoutVD.get(i) * weight[i];
    }

    if(weight.length == 12){

      this.VD[0] = calculateDigit(sum);

    } else {

      sum += this.VD[0] * weight[12];

      this.VD[1] = calculateDigit(sum);

      compareDigits();

    }

  }

  private void compareDigits() {

    if(this.VD[0] == this.VDinput[0] && this.VD[1] == this.VDinput[1]) {
      this.valid = true;
    } else {
      this.valid = false;
    }    

  }

  private int calculateDigit(int sum) {
    if(sum%11 < 2) {
      return 0;
    }
    else {
      return (11 - (sum%11));
    }
  }


  private void separeteCnpj() {


    for(int i = 0; i < this.cnpj.size(); i++){
      if(i >= 0 && i <= 11) {
        this.cnpjWithoutVD.add(this.cnpj.get(i));
      }
      else {
        this.VDinput[i-12] = this.cnpj.get(i);
      }
    }


  }

  private static ArrayList<Integer> convertCnpj(String cnpj) {

    ArrayList<Integer> convertedCnpj = new ArrayList<>();

    for(char c: cnpj.toCharArray()) {
      if(c != '/' && c != '.' && c != '-'){
        convertedCnpj.add(Character.getNumericValue(c));
      }
    }

    return convertedCnpj;

  }

  private static boolean verifyFormat(String cnpj) {

    if(cnpj.length() == 14){

      return cnpj.matches("\\d\\d\\d\\d\\d\\d\\d\\d\\d\\d\\d\\d\\d\\d");

    } else if (cnpj.length() == 18) {

      return cnpj.matches("\\d\\d\\.\\d\\d\\d.\\d\\d\\d\\/\\d\\d\\d\\d\\-\\d\\d");

    } else {
      return false;
    }

  }



}
