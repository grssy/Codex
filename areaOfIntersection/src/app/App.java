package app;
import javax.swing.JOptionPane;

import Rectangle.Rectangle;

public class App {
    public static void main(String[] args) throws Exception {
        Rectangle A = new Rectangle(3, 5, 11, 11);
        Rectangle B = new Rectangle(7, 2, 13, 7);
        Rectangle C = new Rectangle(11, 11, 15, 13);

        

        System.out.println(A.areaOfIntersection(B));
        System.out.println(A.areaOfIntersection(C));

        // Caso rode pelo executavel
        JOptionPane.showMessageDialog(null, "A área da intersecção entre os retangulos A e B é: " + A.areaOfIntersection(B));
        JOptionPane.showMessageDialog(null, "A área da intersecção entre os retangulos A e C é: " + A.areaOfIntersection(C));

    }
}
