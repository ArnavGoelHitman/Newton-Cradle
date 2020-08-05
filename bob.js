class Bob {
    constructor() {
      var options = {
          isStatic: true,
          restitution:0,
          friction:0.5,
          density:1.2,
          
         
      }
      this.body = Bodies.circle(300,500,30,options);
    
      this.radius = 15;
      
      
      
      World.add(world, this.body);
      console.log(this.body);
    }
    display(){
      var pos =this.body.position;
  
     fill("purple");
     ellipseMode(RADIUS);
     ellipse(pos.x,pos.y,15,15);
     
      
    }
}