package Rectangle;
import Position.Position;

public class Rectangle {
  
  private Position top;
  private Position bottom;


  public Rectangle(int bottomX, int bottomY, int topX, int topY) {
    this.top = new Position(topX, topY);
    this.bottom = new Position(bottomX, bottomY);
  }

  private boolean intersects(Rectangle rectangle) {

    if((this.top.getX() < rectangle.bottom.getX() || this.bottom.getX() > rectangle.top.getX()) || (this.top.getY() < rectangle.bottom.getY() || this.bottom.getY() > rectangle.top.getY())) {
      return false;
    }

    return true;

  }

  public int areaOfIntersection(Rectangle rectangle) {

    int rightX = 0, dx = 0, dy = 0, leftX = 0, rightY = 0, leftY = 0;

    if(this.intersects(rectangle)) {


      if(this.top.getX() < rectangle.top.getX()){

        rightX = this.top.getX();

      } else {

        rightX = rectangle.top.getX();

      }

      if(this.bottom.getX() > rectangle.bottom.getX()){

        leftX = this.bottom.getX();

      } else {

        leftX = rectangle.bottom.getX();

      }

      if(this.top.getY() < rectangle.top.getY()){

        rightY = this.top.getY();

      } else {

        rightY = rectangle.top.getY();

      }

      if(this.bottom.getY() > rectangle.bottom.getY()){

        leftY = this.bottom.getY();

      } else {

        leftY = rectangle.bottom.getY();

      }

      dy = rightY - leftY + 1;
      dx = rightX - leftX + 1;


      return dy * dx;


    }

    return 0;

  }

}
