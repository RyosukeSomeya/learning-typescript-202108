export {};

class Wizard {}
class Priest {}

// Typescriptは単一継承
// class Taro extends Wizard, Priest { # => これはNG
class Taro extends Wizard {

}

interface WiseMan {
    ionazun(): void;
}

interface Soldier {
    attack(): void;
}

class Jiro implements WiseMan, Soldier {
    ionazun():void {
        console.log('ionazun');
    }

    attack():void {
        console.log('attack');
    }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.attack();
