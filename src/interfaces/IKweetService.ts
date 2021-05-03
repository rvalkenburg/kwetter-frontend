import KweetDto from '@/models/KweetDto';

export default interface IKweetService {
    post(message: string, userId: string): Promise<KweetDto>;
    get(pageNumer: number, pageSize: number, userId: string): Promise<Array<KweetDto>>
}