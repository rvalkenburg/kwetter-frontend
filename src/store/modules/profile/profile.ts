import ProfileDto from '@/models/ProfileDto';

export type Profile = {
    id: string
    picture: string,
    email: string,
    name: string
};

export function toProfile(profileDto: ProfileDto): Profile {
    console.log(profileDto)
    const profile: Profile = {
        name: profileDto.displayName,
        picture: profileDto.avatar,
        id: profileDto.id,
        email: '',
    }
    return profile;
}