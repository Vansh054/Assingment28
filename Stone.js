class Stone
{
    constructor(x,y){
     var stone_options = {
         restitution:0.6,
         friction:1
     }
     this.body = Bodies.rectangle(x,y,50,50,stone_options) 
     this.width = 50
     this.height = 50 
     this.Image = loadImage("stone.png")
     World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.Image,0,0,this.width,this.height)
        pop();
    }
}