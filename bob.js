class Bob{
    constructor(x,y){
        var options ={
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.0
        }
    this.body = Bodies.circle(x, y, 25, options);

    World.add(world, this.body)

    }
    display(){
        push()
        translate(this.body.position.x, this.body.position.y)
        fill("pink")
        rectMode(CENTER)
        rect(0, 0, this.radius, this.radius)
        pop()
    }
}