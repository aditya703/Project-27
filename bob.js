class Bob{
constructor(x, y){
    var options = {
        isStatic:true,
        restitution:0.3,
        friction:1.0,
        density:1.2
    }
    this.body = Bodies.circle(x, y, 30, options);
    World.add(world, this.body);
}
display(){
    var pos = this.body.position;
    fill("grey");
    ellipse(pos.x, pos.y, 30, 30);
}

}