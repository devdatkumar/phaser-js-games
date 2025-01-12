class EndScene extends Phaser.Scene {
  constructor() {
    super({ key: "EndScene" });
  }

  create() {
    this.add.text(160, 250, "End Scene!", {
      fill: "#000000",
      fontSize: "20px",
    });
    this.add.text(130, 350, "Click to start!", {
      fill: "#000000",
      fontSize: "20px",
    });
    this.input.on("pointerdown", () => {
      this.scene.stop("EndScene");
      this.scene.start("StartScene");
    });
  }
}
