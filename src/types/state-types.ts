import { UserNamesType } from '@/constants';

export interface IState {
  name: string;
  userName: UserNamesType;
  score: number;
  step: number;
}
