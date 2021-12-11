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
        this.sling3 = loadImage("./sprites/sling3.png");
        World.add(world, this.chain);
    }
    display(){
        image(this.sling1, 250, 22);
        image(this.sling2, 220, 22);
        if(this.chain.bodyA){
            const positionA = this.chain.bodyA.position;
            const positionB = this.pointB;
            push();
            strokeWeight(10);
            // line(positionA.x,positionA.y,positionB.x,positionB.y);
            stroke(67,31,12);
            line(positionA.x+20,positionA.y,positionB.x+20,positionB.y);
            stroke(48,22,8);
            line(positionA.x-25,positionA.y,positionB.x-25,positionB.y);
            image(this.sling3, positionA.x-30,positionA.y-10, 15, 30);
            pop();
        }
        
    }
    fly(){
        this.chain.bodyA = null;
    }
    attach(body){
        Body.setPosition(body.body,{x:200,y:50});
        this.chain.bodyA = body.body;
        body.trajectory=[];
    }
}