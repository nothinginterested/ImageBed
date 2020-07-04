
/*Owner*/
export class Owner {
    __type: string;
    className: string;
    objectId: string;
}

/*MetaData*/
export class MetaData {
    size: number;
    owner: string;
}

/*Url*/
export class Url {
    name: string;
    url: string;
    metaData: MetaData;
    base64: string;
    mime_type: string;
    objectId: string;
}

/*tsModel3*/
export class tsModel3 {
    filename: string;
    owner: Owner;
    url: Url;
    objectId: string;
    createdAt: string;
    updatedAt: string;
}
