import ProfileDto from '@/models/ProfileDto';

export type User = {
    profile: Profile | null,
};

export type Profile = {
    id: string
    picture: string,
    email: string,
    name: string
};

export function toUser(profileDto: ProfileDto): User {
    const user: User = {
        profile: {
            name: profileDto.displayName,
            picture: profileDto.avatar,
            id: profileDto.id,
            email: '',
        },
    }
    return user;
}