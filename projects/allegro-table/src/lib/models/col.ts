export class ColumnConfig {
    name?: string;
    displayName?: string;
    isSort?: boolean;
    type: filedType;
    options?: FilterOptions[];
    sticky?: string;
    sortActive?: sortDirections;
    component?: any;
}

export enum sortDirections {
    asc = 'asc',
    desc = 'desc'
}

export enum filedType {
    string = 'string',
    enum = 'enum',
    component = 'component'
}

export interface FilterOptions {
    name: string;
    displayName: string;
    selected: boolean;
}
