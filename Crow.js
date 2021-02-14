class Crow{
    constructor(x,y,radius){
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
        this.image = loadImage("Images/Crow.png");
    }
    display(){
imageMode(CENTER);
image(this.image,this.body.position.x,this.body.position.y,100,100);
    }
}