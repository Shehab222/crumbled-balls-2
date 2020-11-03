class Dustbin {
    constructor(){
        this.image=loadImage ("dustbingreen(1).png");
        var options ={
            restitution : 3,
            isStatic: true
        }
        
        this.body=Bodies.rectangle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,690,600,160,130);
        
      }
}