export default class Character {
  constructor(name, type, health = 100, level = 1, attack = undefined, defence = undefined) {
    const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (name.length < 2 || name.length > 10 || typeof name !== 'string') {
      throw new Error('Имя должно быть строкой и от 2-х до 10-ти символов в длину');
    }
    if (!types.includes(type)) {
      throw new Error(`Тип должен быть равен одному из следующих типов: ${types.join(', ')}`);
    }
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить левел умершего');
    }
    this.level += 1;
    this.attack = this.attack * 0.2 + this.attack;
    this.defence = this.defence * 0.2 + this.defence;
    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('Хватит бить труп');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
