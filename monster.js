function spawnMonster() {
  const pos = p5.Vector.random2D()
    .setMag(sqrt(pow(width / 2, 2) + pow(height / 2, 2)) + 100)
    .add(createVector(width / 2, height / 2))
  const r = random(5, 20)
  const c = random(255)
  return new Monster(pos, r, c)
}

class Monster {
  constructor(pos, r, c) {
    this.pos = pos
    this.r = r
    this.c = c
    this.delete = false
  }

  render() {
    stroke((this.c + 128) % 255, 255, 255)
    fill(this.c, 255, 255)
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2)
  }

  update() {
    if (p5.Vector.dist(this.pos, sledge.pos) < this.r + sledge.r) {
      this.die()
    }
    if (p5.Vector.dist(this.pos, player.pos) < this.r + player.r) {
      gameState = "gameOver"
    }
    this.pos.add(p5.Vector.sub(player.pos, this.pos).setMag(2))
  }

  die() {
    this.delete = true
    for (let i = 0; i < 5; i++) {
      animations.push(new Blood(this.pos.copy()))
    }
    score++
  }
}
