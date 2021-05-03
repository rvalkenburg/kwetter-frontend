import KweetDto from "@/models/KweetDto";

export type Kweet = {
    id: string;
    message: string;
    dateOfCreation: string;
    profile: Profile;
    like: Like;
};

export type Profile = {
    displayName: string;
    avatar: string;
    id: string;
};

export type Like = {
    count: number;
    liked: Boolean;
};

export function toKweet(kweetDto: KweetDto): Kweet {
    const kweet: Kweet = {
        id: kweetDto.id,
        message: kweetDto.message,
        dateOfCreation: kweetDto.dateOfCreation,
        profile: {
            displayName: kweetDto.profile.displayName,
            avatar: kweetDto.profile.avatar,
            id: kweetDto.profile.id,
        },
        like: {
            liked: kweetDto.isLiked,
            count: kweetDto.LikeCount,
        }
    }
    return kweet;
}
