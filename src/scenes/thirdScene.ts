import Phaser from "phaser";
import { SceneData } from "./mainScene";

export default class ThirdScene extends Phaser.Scene {
    constructor() {
        super({key: "ThirdScene"});
    }
    preload() {
        this.load.image("eiffel", "assets/eiffel.jpg")
    }
    create(data: SceneData) {
        data.numMiles += 1864;
        const EiffelImg = this.add.image(0,0,"eiffel");
        EiffelImg.setOrigin(0,0)
        EiffelImg.setScale(this.cameras.main.width/EiffelImg.width, this.cameras.main.height/EiffelImg.height)
        this.input.on('pointerdown', () => {
            this.scene.start('FirstScene', data)
        })
        this.add.text(this.cameras.main.width - 1000, 600, "Miles traveled: " + data.numMiles, {
            color: "#FFFFFF",
            fontSize: "70px",
        })
    }
    update() {

    }
}