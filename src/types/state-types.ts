import { UserNamesType } from '../constants';

export type IScoreMap = {
  [name in UserNamesType]: number;
};

export interface IState {
  init: boolean;
  scoreMap: IScoreMap;
  step: number;
}

type IQuestionAnswers =
  | string
  | { isValid?: boolean; answerNick?: UserNamesType[]; text: string };

export interface IQuestion {
  title: string;
  question: string;
  answers: IQuestionAnswers[];
  plusItems: UserNamesType[];
  minusItems?: UserNamesType[];
  ratio?: number;
}

export interface ISubmitQuery {
  isValidChoose: boolean;
  plusItems: UserNamesType[];
  minusItems: UserNamesType[];
}
