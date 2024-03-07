import Phaser from "phaser";
import { SceneData } from "./mainScene";

export default class SecondScene extends Phaser.Scene {
    constructor() {
        super({key: "SecondScene"});
    }
    preload() {
        this.load.image("egypt", "assets/egypt.jpg")
    }
    create(data: SceneData) {
        data.numMiles+= 4689;
        const EgyptImg = this.add.image(0,0,"egypt");
        EgyptImg.setOrigin(0,0)
        EgyptImg.setScale(this.cameras.main.width/EgyptImg.width, this.cameras.main.height/EgyptImg.height)
        this.input.on('pointerdown', () => {
            this.scene.start('ThirdScene', data)
        })
        this.add.text(this.cameras.main.width - 1000, 600, "Miles traveled: " + data.numMiles, {
            color: "#FFFFFF",
            fontSize: "70px",
        })
    }
    update() {

    }
}