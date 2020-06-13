function Circle(radius)
{
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    };
}

const circle = new Circle(5);
circle.draw();

console.log(Object.keys(circle));
