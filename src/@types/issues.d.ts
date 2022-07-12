export interface IIssues {
  id?: string;
  number: number;
  date: Date;
  cover: string;
  file: string;
  language: string;
  topics: string
}

export type IssuesContextType = {
  issues: [];
  createIssue: (data: IIssues) => Promise<void>
}