interface UserAuth {
    email?: string;
    password?: string;
}

interface Location {
    city?: string;
    district?: string;
    state?: string;
}

export interface DevModel {
    id?: number;
    name?: string;
    avatar?: string;
    bio?: string;
    tags?: string;
    location?: Location;
    userAuth?: UserAuth;
}