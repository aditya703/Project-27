class rope{
    constructor(bodyA, bodyB, posX){
        var option = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.01,
        }
        this.posX = posX;
        this.bob = Matter.Constraint.create(option);
        World.add(world, this.bob);
    }

    display(){
        var posA = this.bob.bodyA.position;
        var posB = this.bob.bodyB.position;
        strokeWeight(3);
        line(this.posX, posA.y, posB.x, posB.y);
    }

}