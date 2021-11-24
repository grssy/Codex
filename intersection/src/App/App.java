

package App;
import javax.swing.JOptionPane;

import Rectangle.Rectangle;
public class App {
    public static void main(String[] args) throws Exception {
        Rectangle A = new Rectangle(3, 5, 11, 11);
        Rectangle B = new Rectangle(7, 2, 13, 7);
        Rectangle C = new Rectangle(11, 11, 15, 13);

        System.out.println(A.intersects(B));
        System.out.println(A.intersects(C));
        System.out.println(B.intersects(C));

        // Caso rode pelo executavel
        JOptionPane.showMessageDialog(null, "A tem intersecção com B: " + A.intersects(B));
        JOptionPane.showMessageDialog(null, "A tem intersecção com C: " + A.intersects(C));
        JOptionPane.showMessageDialog(null, "B tem intersecção com C: " + B.intersects(C));

    }
}
