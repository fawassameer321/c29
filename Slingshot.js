class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling1 = loadImage ("sprites/sling1.png")
        this.sling2 = loadImage ("sprites/sling2.png")
        this.sling3 = loadImage ("sprites/sling3.png")
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,215,50,60,170)
        image(this.sling2,175,50,60,100)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(7);
            stroke("rgb(48,22,8)")

            if (pointA.x < 230 ){
                line(pointA.x-10, pointA.y, pointB.x-20, pointB.y+25);
                line(pointA.x+25, pointA.y, pointB.x+35, pointB.y+25);
                image(this.sling3,pointA.x-20,pointA.y-10,15,30)
            }else {

                line(pointA.x-10, pointA.y, pointB.x-20, pointB.y+25);
                line(pointA.x+25, pointA.y, pointB.x+35, pointB.y+25);
                image(this.sling3,pointA.x+20,pointA.y-10,15,30)
            }
           

    
        }
    }
    
}