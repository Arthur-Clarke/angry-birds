class SlingShot{
    constructor(bodyA,pointB) {
        var options = { 
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 0
        };
        this.chain = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.chain);
    }
    display(){
        if(this.chain.bodyA){
            const positionA = this.chain.bodyA.position;
            const positionB = this.pointB;
            strokeWeight(3);
            line(positionA.x,positionA.y,positionB.x,positionB.y);
        }
        
    }
    fly(){
        this.chain.bodyA = null;
    }
}