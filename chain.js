class Chain{
    constructor(bodyA,bodyB) {
        var options = { 
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 0
        };
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    display(){
        const positionA = this.chain.bodyA.position;
        const positionB = this.chain.bodyB.position;
        strokeWeight(3);
        line(positionA.x,positionA.y,positionB.x,positionB.y);
    }
}