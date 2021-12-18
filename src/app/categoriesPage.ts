import Control from "../common/control";
import { ICategoryData } from "./quizDataModel";

export class CategoriesPage extends Control {
  onBack: () => void;
  onSelect: (index: number) => void;
  constructor(
    parentNode: HTMLElement,
    gameName: string,
    quizCategoriesData: Array<ICategoryData>
  ) {
    super(parentNode);
    const header = new Control(this.node, "h1", "", gameName);
    const backButton = new Control(this.node, "button", "", "back");
    backButton.node.onclick = () => {
      this.onBack();
    };
    // const categoriesList = [1, 2, 3, 4, 5, 6, 7];
    const categoryButton = quizCategoriesData.map((item, idx) => {
      const button = new Control(this.node, "button", "", item.name.toString());
      const img = new Image(100, 100);
      button.node.append(img);
      img.src = item.picture;
      button.node.onclick = () => {
        this.onSelect(idx);
      };
      return button;
    });
  }
}
