import Control from "../common/control";
import { ArtistQuestionView } from "./artistQuestionView";
import { PictureQuestionView } from "./pictureQuestionView";
// import { IArtistQuestionData } from "./IArtistQuestionData";
import { IArtistsQuestionData, IPicturesQuestionData } from "./quizDataModel";
import { IQuizSettings } from "./settingsPage";

interface IQuizOptions {
  gameName: string;
  categoryIndex: number;
  settings: IQuizSettings;
}

type IQuizResults = Array<boolean>;

export class Timer extends Control {
  onTimeout: () => void;
  timer: number;
  initialTime: number;
  constructor(parantNode: HTMLElement) {
    super(parantNode);
  }

  start(time: number) {
    this.initialTime = time;

    if (this.timer) {
      this.stop();
    }
    let currentTime = time;
    const render = (currentTime: number) => {
      this.node.textContent = `${this.initialTime} / ${currentTime}`;
    };
    render(time);
    this.timer = window.setInterval(() => {
      currentTime--;
      render(currentTime);
      if (currentTime <= 0) {
        this.onTimeout();
      }
    }, 1000);
  }

  stop() {
    window.clearInterval(this.timer);
  }
}

export class GameFieldPage extends Control {
  onBack: () => void;
  onHome: () => void;
  onFinish: (result: IQuizResults) => void;
  progressIndicatior: Control<HTMLElement>;
  results: IQuizResults;
  answerIndicatior: Control<HTMLElement>;
  timer: Timer;
  gameOptions: IQuizOptions;

  constructor(
    parentNode: HTMLElement,
    gameOptions: IQuizOptions,
    questionsData: Array<IArtistsQuestionData | IPicturesQuestionData>
  ) {
    super(parentNode);
    console.log(`gameOptions`, gameOptions);
    this.gameOptions = gameOptions;
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

    this.timer = new Timer(this.node);
    this.progressIndicatior = new Control(this.node, "div", "", "");
    this.answerIndicatior = new Control(this.node, "div", "", "");

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
    let _quest: Control;
    this.progressIndicatior.node.textContent = `${index + 1} / ${
      questions.length
    }`;
    this.answerIndicatior.node.textContent = this.results
      .map((item) => (item ? "+" : "-"))
      .join(" ");

    if (this.gameOptions.settings.timeEnable) {
      this.timer.start(this.gameOptions.settings.time);
      this.timer.onTimeout = () => {
        _quest.destroy;
        this.results.push(false);
        this.questionCycle(gameName, questions, index + 1, onFinish);
      };
    }

    if (gameName === "artists") {
      const question = new ArtistQuestionView(this.node, questions[index]);
      _quest = question;
      question.onAnswer = (answerIndex) => {
        question.destroy();
        this.results.push(answerIndex === questions[index].correctAnswerIndex);
        this.questionCycle(gameName, questions, index + 1, onFinish);
      };
    } else if (gameName === "pictures") {
      const question = new PictureQuestionView(this.node, questions[index]);
      _quest = question;
      question.onAnswer = (answerIndex) => {
        question.destroy();
        this.results.push(answerIndex === questions[index].correctAnswerIndex);
        this.questionCycle(gameName, questions, index + 1, onFinish);
      };
    } else {
      throw new Error("Game type is not exist");
    }
  }

  destroy() {
    this.timer.stop();
    super.destroy();
  }
}
