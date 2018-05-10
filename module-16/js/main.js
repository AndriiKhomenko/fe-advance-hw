(function() {

  class Shape {
    constructor(){
      this.color;
      this.initX;
      this.initY;
    };
    getColor(){
      console.log(this.color)
    };
    setColor(val){
      this.color = val;
    };
    getCoords(){
      console.log(this.initX, this.initY);
    };
    moveTo(newX, newY){
      this.initX = newX;
      this.initY = newY;
    }
  }

  class Rectangle extends Shape {
    constructor(){
      super();
      this.initWidth;
      this.initHeight;
    };
    setWidth(newWidth){
      this.initWidth = newWidth;
    };
    setHeight(newHeight){
      this.initHeight = newHeight;
    };
    getDims(){
      console.log(this.initWidth, this.initHeight);
    };
    draw(){
      console.log("Draw a Rectangle at:");
      console.log(`(x: ${this.initX}, y: ${this.initY})`);
      console.log("With dimentions:");
      console.log(`height: ${this.initHeight}`);
      console.log(`width: ${this.initWidth}`);
      console.log(`Filled with color: ${this.color}`);
    }
  }

  let obj = new Rectangle();

  obj.setColor('#009688');
  obj.moveTo(10, 10);
  obj.setWidth(100);
  obj.setHeight(100);

  obj.draw();

  console.log("------------------------------------------------");

  class Circle extends Shape {
    constructor(){
      super();
      this.initRadius;
    };
    getRadius(){
      console.log(this.initRadius);
    };
    setRadius(val){
      this.initRadius = val;
    }
    draw(){
      console.log("Draw a Circle at:");
      console.log(`(x: ${this.initX}, y: ${this.initY})`);
      console.log("With dimentions:");
      console.log(`radius: ${this.initRadius}`);
      console.log(`Filled with color: ${this.color}`);
    }
  }

  objCircle = new Circle();

  objCircle.setColor('#FF5722');
  objCircle.moveTo(50, 50);
  objCircle.setRadius(250);

  objCircle.draw();

})();