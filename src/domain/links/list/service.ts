import api from './api';
import log from '@/services/logging';
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Link, PagedResult } from '../types';

/**
 * Finds all available links
 * 
 */
export const findAll = (): Observable<PagedResult<Link>> => {    
    return api
        .findAllLinks()
        .pipe(
            tap((result) => {
                log.debug("[links/services] showing links (", result.nodes.length, ")")
            })
        )
};