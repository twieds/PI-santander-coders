interface UserAuthEntity {
    email?: string;
    password?: string;
}

interface LocationEntity {
    city?: string;
    district?: string;
    state?: string;
}

export interface NgoEntity {
    id?: number;
    name?: string;
    cnpj?: string;
    bio?: string;
    how_can_we_help?: string;
    socials?: string;
    location?: LocationEntity;
}