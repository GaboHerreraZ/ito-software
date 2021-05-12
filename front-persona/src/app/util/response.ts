export interface Response<T> {
    status: number;
    body: T;
    error: boolean;
}
