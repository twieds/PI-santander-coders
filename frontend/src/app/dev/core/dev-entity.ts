interface UserAuthEntity {
    email?: string;
    password?: string;
}

interface LocationEntity {
    city?: string;
    district?: string;
    state?: string;
}

export interface DevEntity {
    id?: number;
    name?: string;
    avatar?: string;
    bio?: string;
    tags?: string;
    location?: LocationEntity;
    userAuth?: UserAuthEntity; 
}