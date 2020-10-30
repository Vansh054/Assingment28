class Mango
{
    constructor(x,y,w,h){
     var mango_options = {
         isStatic:true,
         restitution:0,
         friction:1
     }
     this.body = Bodies.rectangle(x,y,w,h,mango_options) 
     this.width = w
     this.height = h 
     this.Image = loadImage("mango.png")
     World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        push();
        translate(pos.x,pos.y)
        imageMode(CENTER)
        image(this.Image,0,0,this.width,this.height)
        pop();
    }
}