import IAuthService from '@/interfaces/IAuthService';
import { Store } from 'vuex';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store<RootState>;
        $authService: IAuthService;
    }
}