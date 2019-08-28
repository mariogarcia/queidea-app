import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Observable, Subject, from, Observer } from "rxjs";

export const client: AxiosInstance = axios.create({
  // baseURL: process.env.VUE_APP_API_URL,
  baseURL: "http://localhost:5000/graphql",
});

export const toObservable = <T>(response: Promise<AxiosResponse<T>>): Observable<T> => {
    return Observable.create((observer: Observer<T>) => {
        response
        .then((resp) => {
            observer.next(resp.data);
            observer.complete();
        });        
    })
}

export const fromPromise = <T>(promise: Promise<T>): Observable<T> => {
    return Observable.create((observer: Observer<T>) => {
        promise
        .then((data) => {
            observer.next(data);
            observer.complete();
        });        
    })  
}

client.defaults.headers["Content-Type"] = "application/json";
client.defaults.headers.Accept = "application/json";

export default {

};
