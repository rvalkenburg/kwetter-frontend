import IAuthService from '@/interfaces/IAuthService';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $authService: IAuthService;
    }
}