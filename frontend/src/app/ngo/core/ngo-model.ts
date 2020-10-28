interface UserAuthModel {
    email?: string;
    password?: string;
}

interface LocationModel {
    city?: string;
    district?: string;
    state?: string;
}

export interface NgoModel {
    id?: number;
    name?: string;
    cnpj?: string;
    bio?: string;
    how_can_we_help?: string;
    socials?: string;
    location?: LocationModel;
}