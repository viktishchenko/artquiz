import Control from "../common/control";
import { ArtistQuestionView } from "./artistQuestionView";
import { PictureQuestionView } from "./pictureQuestionView";
// import { IArtistQuestionData } from "./IArtistQuestionData";
import { IArtistsQuestionData, IPicturesQuestionData } from "./quizDataModel";

interface IQuizOptions {
  gameName: string;
  categoryIndex: number;
}

type IQuizResults = Array<boolean>;

export class GameFieldPage extends Control {
  onBack: () => void;
  onHome: () => void;
  onFinish: (result: IQuizResults) => void;
  progressIndicatior: Control<HTMLElement>;
  results: IQuizResults;
  answerIndicatior: Control<HTMLElement>;

  constructor(
    parentNode: HTMLElement,
    gameOptions: IQuizOptions,
    questionsData: Array<IArtistsQuestionData | IPicturesQuestionData>
  ) {
    super(parentNode);
    console.log(`gameOptions`, gameOptions);
    const header = new Control(
      this.node,
      "h1",
      "",
      `${gameOptions.gameName} - ${gameOptions.categoryIndex}`
    );

    const backButton = new Control(this.node, "button", "", "back");
    backButton.node.onclick = () => {
      this.onBack();
    };

    const homeButton = new Control(this.node, "button", "", "home");
    homeButton.node.onclick = () => {
      this.onHome();
    };

    this.progressIndicatior = new Control(this.node, "div", "", "");
    this.answerIndicatior = new Control(this.node, "div", "", "");

    /*   const questions: Array<IArtistQuestionData> = [
      { answer: [1, 2, 3, 4], correctAnswerIndex: 1 },
      { answer: [1, 2, 3, 4], correctAnswerIndex: 2 },
      { answer: [1, 2, 3, 4], correctAnswerIndex: 3 },
    ]; */
    this.results = [];
    this.questionCycle(gameOptions.gameName, questionsData, 0, () => {
      this.onFinish(this.results);
    });
  }

  questionCycle(
    gameName: string,
    questions: Array<any>,
    index: number,
    onFinish: () => void
  ) {
    if (index >= questions.length) {
      onFinish();
      return;
    }
    this.progressIndicatior.node.textContent = `${index + 1} / ${
      questions.length
    }`;
    this.answerIndicatior.node.textContent = this.results
      .map((item) => (item ? "+" : "-"))
      .join(" ");
    if (gameName === "artista") {
      const question = new ArtistQuestionView(this.node, questions[index]);
      question.onAnswer = (answerIndex) => {
        question.destroy();
        this.results.push(answerIndex === questions[index].correctAnswerIndex);
        this.questionCycle(gameName, questions, index + 1, onFinish);
      };
    } else if (gameName === "pictures") {
      const question = new PictureQuestionView(this.node, questions[index]);
      question.onAnswer = (answerIndex) => {
        question.destroy();
        this.results.push(answerIndex === questions[index].correctAnswerIndex);
        this.questionCycle(gameName, questions, index + 1, onFinish);
      };
    } else {
      throw new Error("Game type is not exist");
    }
  }
}
