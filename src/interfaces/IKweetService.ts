import KweetDto from '@/models/KweetDto';

export default interface IKweetService {
    post(message: string, userId: string): Promise<KweetDto>;
    getByProfile(pageNumer: number, pageSize: number, userId: string): Promise<Array<KweetDto>>
    getByTimeline(pageNumer: number, pageSize: number, userId: string): Promise<Array<KweetDto>>
}