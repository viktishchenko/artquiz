import Control from "../common/control";
import { IArtistQuestionData } from "./IArtistQuestionData";

export class ArtistQuestionView extends Control {
  onAnswer: (index: number) => void;

  constructor(parentNode: HTMLElement, questionData: IArtistQuestionData) {
    super(parentNode);

    const qoestion = new Control(this.node, "div", "", "Вопрос?");
    const answerButton = questionData.answer.map((item, idx) => {
      const button = new Control(this.node, "button", "", ` ${idx.toString()}`);
      button.node.onclick = () => {
        this.onAnswer(idx);
      };
    });
  }
}
