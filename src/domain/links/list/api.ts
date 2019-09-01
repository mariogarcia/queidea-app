
import { client, fromPromise } from '@/services/api';
import { AxiosInstance, AxiosResponse } from 'axios';
import { Link, PagedResult, toPagedResult } from '../types';
import { Observable } from "rxjs";

const findAll = (client: AxiosInstance): Observable<PagedResult<Link>> => {
    const query = `{        
      result: allLinks {
        edges {
          node {
            uuid
            uri
            description
          }
        }
      }        
    }`

    return fromPromise(client
        .post<PagedResult<Link>>('', { query })        
        .then((resp:any) => {
            return toPagedResult<Link>(resp.data)
        })
    );    
};

export default {
    findAllLinks: () => findAll(client)
}