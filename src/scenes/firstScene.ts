import Phaser from "phaser";
import { SceneData } from "./mainScene";

export default class FirstScene extends Phaser.Scene {
    constructor() {
        super({key: "FirstScene"});
    }
    preload() {
        this.load.image("china", "assets/china.jpg")
    }
    create(data: SceneData) {
        //let numMiles = data.numMiles
        data.numMiles+= 13171;
        const ChinaImg = this.add.image(0,0,"china");
        ChinaImg.setOrigin(0,0)
        ChinaImg.setScale(this.cameras.main.width/ChinaImg.width, this.cameras.main.height/ChinaImg.height)
        this.input.on('pointerdown', () => {
            this.scene.start('SecondScene', data)
        })
        this.add.text(this.cameras.main.width - 1000, 600, "Miles traveled: " + data.numMiles, {
            color: "#FFFFFF",
            fontSize: "70px",
        })
    }
    update() {

    }
}