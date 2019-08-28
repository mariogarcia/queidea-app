import { Observable, Subject, from, Observer } from "rxjs";
import { pluck, startWith, scan, map } from "rxjs/operators";
import { Link, PagedResult } from '../types';
import api from './api';

export const increment = (o: Subject<number>): Observable<number> => {
    return o.pipe(
        map(() => 1),
        startWith(0),
        scan((total, change) => total + change)
    )
}

export const findAll = (): Observable<PagedResult<Link>> => api.findAllLinks()

export const readNews = (o: Observable<Event>): Observable<String> => {
    return o.pipe(pluck<Event, string>('target', 'value'))
};