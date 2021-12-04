class SlingShot{
    constructor(bodyA,pointB) {
        var options = { 
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        };
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        this.sling1 = loadImage("./sprites/sling1.png");
        this.sling2 = loadImage("./sprites/sling2.png");
        World.add(world, this.chain);
    }
    display(){
        image(this.sling1, 250, 22);
        image(this.sling2, 220, 22);
        if(this.chain.bodyA){
            const positionA = this.chain.bodyA.position;
            const positionB = this.pointB;
            strokeWeight(3);
            // line(positionA.x,positionA.y,positionB.x,positionB.y);
        }
        
    }
    fly(){
        this.chain.bodyA = null;
    }
}