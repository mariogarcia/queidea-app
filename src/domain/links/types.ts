
export interface PagedResult<T> {
    nodes: Array<T>
}

export interface Link {
    uuid: String
    uri: String
    description: String
}

export const toPagedResult = <T>(json: any): PagedResult<T> => {    
    const result = json.data.result

    return {
        nodes: result.edges.map((edge: any) => edge.node)
    }
}