export class Team {
  constructor(characters = []) {
    this.characters = characters;
  }

  add(character) {
    this.characters.push(character);
  }

  * [Symbol.iterator]() {
    while (true) {
      const character = this.characters.shift();

      if (character) {
        yield character;
      } else {
        return;
      }
    }
  }
}
