interface UserAuthModel {
    email?: string;
    password?: string;
}

interface LocationModel {
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
    location?: LocationModel;
    userAuth?: UserAuthModel; 
}