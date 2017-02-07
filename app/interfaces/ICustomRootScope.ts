interface ICustomRootScope extends ng.IRootScopeService{
    authenticated: boolean;
    uid: number;
    name: string;
    email: string;
}