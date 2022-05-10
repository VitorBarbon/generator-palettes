export class Palette {
  constructor(url) {
    this.url = url.toString().split('/');
    this.typeColors = Number(this.url[4]);
    this.quantityColors = Number(this.url[3]);
    this.colors = [];
    this.createPalette = this.createColorsPalette();
  }

  //cria a paleta
  createColorsPalette() {
    const id = this.createRandomId();

    for (let i = 0; i < this.quantityColors; i++) {
      let color = this.createRandomColor();
      this.colors.push(color);
    }
    return { id: id, colors: this.colors };
  }

  //cria um ID para key de map
  createRandomId() {
    const randomLetters = () => String.fromCharCode(this.randInt(65, 91));
    const createRandomNumber = Math.random(1).toFixed(2) * 1000;
    return `${randomLetters()}${createRandomNumber}${randomLetters()}`;
  }

  //cria um padrao de numero aleatorio para o codigo rgb()
  randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  //cria cores randomicas
  createRandomColor() {
    const red = this.selectValueToGenerateRGB();
    const blue = this.selectValueToGenerateRGB();
    const green = this.selectValueToGenerateRGB();

    return `rgb(${red}, ${green}, ${blue})`;
  }

  selectValueToGenerateRGB() {
    if (this.typeColors === 1) return this.randInt(0, 255);
    if (this.typeColors === 2) return this.randInt(0, 127);
    if (this.typeColors === 3) return this.randInt(127, 255);
    if (this.typeColors === 4) return this.randInt(0, 80);
    if (this.typeColors === 5) return this.randInt(175, 255);
  }
}
