import ProfileDto from "./ProfileDto";

export default interface KweetDto {
    id: string;
    message: string;
    dateOfCreation: string;
    profile: ProfileDto;
    likeCount: number;
    isLiked: Boolean;
}