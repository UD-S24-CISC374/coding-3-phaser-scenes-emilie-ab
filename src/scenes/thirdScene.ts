import Phaser from "phaser";
import PhaserLogo from "../objects/phaserLogo";
import FpsText from "../objects/fpsText";

export default class ThirdScene extends Phaser.Scene {
    constructor() {
        super({key: "ThirdScene"});
    }
    preload() {
        this.load.image("eiffel", "assets/eiffel.jpg")
    }
    create() {
        const EiffelImg = this.add.image(0,0,"eiffel");
        EiffelImg.setOrigin(0,0)
        EiffelImg.setScale(this.cameras.main.width/EiffelImg.width, this.cameras.main.height/EiffelImg.height)
    }
    update() {

    }
}