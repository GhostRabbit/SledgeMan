class Player {
  constructor(x, y) {
    this.pos = createVector(x, y)
    this.r = 8
    this.maxSpeed = 10
  }

  update() {
    const mPos = createVector(mouseX, mouseY)
    const vel = p5.Vector.sub(mPos, this.pos).limit(this.maxSpeed)
    this.pos.add(vel)
  }

  draw() {
    stroke(0)
    fill(0, 255, 255)
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2)
  }
}