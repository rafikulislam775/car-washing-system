export type TErrorSources = {
  path: string;
  message: string | number;
}[];

export type TGenericErrorRequest = {
  statusCode: number;
  message: string;
  errorSources: TErrorSources;
};
