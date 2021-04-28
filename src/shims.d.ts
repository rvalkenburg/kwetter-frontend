import IAuthService from '@/interfaces/IAuthService';
import { Store } from 'vuex';
import IProfileService from './interfaces/IProfileService';
import IKweetService from './services/KweetService';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store<RootState>;
        $authService: IAuthService;
        $profileService: IProfileService;
        $kweetService: IKweetService;
    }
}