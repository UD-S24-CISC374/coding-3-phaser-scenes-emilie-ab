import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: "PreloadScene" });
    }

    preload() {
        this.load.image("ocean", "assets/ocean.jpg");
        this.load.image("world", "assets/world.jpg");

    }

    create() {
        this.scene.start("MainScene");
    }
}
