package Rectangle;
import Position.Position;

public class Rectangle {
  
  private Position top;
  private Position bottom;


  public Rectangle(int bottomX, int bottomY, int topX, int topY) {
    this.top = new Position(topX, topY);
    this.bottom = new Position(bottomX, bottomY);
  }

  public boolean intersects(Rectangle rectangle) {

    if((this.top.getX() < rectangle.bottom.getX() || this.bottom.getX() > rectangle.top.getX()) || (this.top.getY() < rectangle.bottom.getY() || this.bottom.getY() > rectangle.top.getY())) {
      return false;
    }

    return true;

  }

}
