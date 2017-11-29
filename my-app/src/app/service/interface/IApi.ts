import { Observable } from 'rxjs/Observable';
export abstract class IApi {
    abstract get(apiUrl): Observable<any>;
    abstract post(apiUrl, resData): Observable<any>;
    abstract getPromise(apiUrl): Promise<any>;
}
