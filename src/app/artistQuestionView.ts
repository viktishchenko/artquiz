import Control from "../common/control";
import { IArtistsQuestionData, IPicturesQuestionData } from "./quizDataModel";

export class ArtistQuestionView extends Control {
  onAnswer: (index: number) => void;

  constructor(parentNode: HTMLElement, questionData: IArtistsQuestionData) {
    super(parentNode);

    const question = new Control(this.node, "div", "", "Вопрос?");
    const img = new Image(200, 200);
    img.src = questionData.artistImgUrl;
    question.node.append(img);
    const answerButton = questionData.answers.map((item, idx) => {
      const button = new Control(this.node, "button", "", ` ${idx.toString()}`);
      button.node.onclick = () => {
        this.onAnswer(idx);
      };
    });
  }
}
