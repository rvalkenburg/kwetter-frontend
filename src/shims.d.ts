import IAuthService from '@/interfaces/IAuthService';
import { Store } from 'vuex';
import IProfileService from './interfaces/IProfileService';
import IKweetService from './interfaces/IKweetService';
import ILikeService from './interfaces/ILikeService';
import IFollowService from './interfaces/IFollowService';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store<RootState>;
        $authService: IAuthService;
        $profileService: IProfileService;
        $kweetService: IKweetService;
        $likeService: ILikeService;
        $followService: IFollowService;

    }
}