class Roof {
    constructor() {

      var options={
        isStatic:true,
      }
      
      this.body = Bodies.rectangle(500,200,20,10,options);
      this.width = width;
      this.width=10;
      
      
      World.add(world, this.body);
      console.log(this.body);
    }
    display(){
      var pos =this.body.position;
  
     fill("grey");
    rectMode(CENTER);
     rect(pos.x,pos.y,300,10);
     
      
    
   
    }
  }