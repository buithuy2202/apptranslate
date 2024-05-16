export interface IRSuccess<T = Recordable> {
  success: boolean;
  statusCode: number;
  data: T;
  message?: string;
}
