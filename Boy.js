class Boy 
{
    constructor(x,y,w,h){
     var boy_options = {
         isStatic:true
     }
     this.body = Bodies.rectangle(x,y,w,h,boy_options) 
     this.width = w
     this.height = h 
     this.Image = loadImage("boy.png")
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