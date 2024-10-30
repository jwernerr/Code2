namespace Test {
    let moveables: Moveable[] = [];
    moveables.push(new Asteroid(1));
    moveables.push(new Projectile(new Vector(0, 0), new Vector(0, 0)));

    console.log(moveables)
}