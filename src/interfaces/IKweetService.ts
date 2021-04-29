import KweetDto from '@/models/KweetDto';

export default interface IKweetService {
    post(message: string, userId: string): Promise<KweetDto>;
    get(userId: string): Promise<Array<KweetDto>>
}