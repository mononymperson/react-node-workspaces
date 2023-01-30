export interface ApiResponse<T> {
  status: 200 | 400 | 404 | 0;
  message: string;
  data: T | null;
}
