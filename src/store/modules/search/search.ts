import SearchDto from '@/models/SearchDto';

export type Search = {
    id: string;
    displayName: string;
    avatar: string;
    status: boolean;
};

export function toSearch(searchDto: SearchDto): Search {
    const search: Search = {
        id: searchDto.id,
        displayName: searchDto.displayName,
        avatar: searchDto.avatar,
        status: searchDto.status,
    }
    return search;
}