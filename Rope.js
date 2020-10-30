class Rope
{
    constructor(a,b){
        var constraint_option = {
            bodyA:a,
            pointB:b,
            stiffness:0.04
        }
          this.rope = Constraint.create(constraint_option)

          World.add(world,this.rope)
    }
    display(){
        if (this.rope.bodyA != null)
        {
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.pointB.x,this.rope.pointB.y)
        }
    }
    stoneFly(){
        this.rope.bodyA = null
    }
    stoneJoint(a){
        this.rope.bodyA = a
    }
}