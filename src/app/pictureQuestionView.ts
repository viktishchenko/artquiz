import Control from "../common/control";
import { IArtistsQuestionData, IPicturesQuestionData } from "./quizDataModel";

export class PictureQuestionView extends Control {
  onAnswer: (index: number) => void;

  constructor(parentNode: HTMLElement, questionData: IPicturesQuestionData) {
    super(parentNode);

    const question = new Control(this.node, "div", "", questionData.artistName);
    const answerButton = questionData.answers.map((item, idx) => {
      const button = new Control(
        this.node,
        "button",
        "",
        ` ${idx.toString()}
      `
      );
      const img = new Image(200, 200);
      img.src = item;
      button.node.append(img);
      button.node.onclick = () => {
        this.onAnswer(idx);
      };
    });
  }
}
