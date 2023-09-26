export interface ApiResponse<T> {
  count: number;
  next: null;
  previous: null;
  results: T[];
}
