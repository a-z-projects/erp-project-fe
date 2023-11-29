export enum ColorStatus {
  EMPTY = "EMPTY",
  LESS = "LESS",
  HALF = "HALF",
  FULL = "FULL",
}

export interface IRoutes {
  name: string;
  pageCode: string;
  page: JSX.Element;
}
