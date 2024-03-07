import Phaser, { Scene } from "phaser";
import PhaserLogo from "../objects/phaserLogo";
import FpsText from "../objects/fpsText";

export interface SceneData {
    numMiles: number;
}

export default class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: "MainScene" });
    }

    create(data: SceneData) {
        data.numMiles = 0;
        const WorldImg = this.add.image(0,0, "world")
        WorldImg.setOrigin(0,0)
        WorldImg.setScale(this.cameras.main.width/WorldImg.width, this.cameras.main.height/WorldImg.height)
        this.input.on('pointerdown', () => {
            this.scene.start('FirstScene', {data: numMiles})
        })
        const message = "Let's travel the world!";
        const numMiles = 0;

        this.add
            .text(this.cameras.main.width -150, 60, message, {
                color: "#FFFFFF",
                fontSize: "70px",
            })
            .setOrigin(1, 0);
        this.add.text(this.cameras.main.width - 1000, 600, "Miles traveled: " + numMiles, {
            color: "#FFFFFF",
            fontSize: "70px",
        })
    }

    update() {
    }
}
