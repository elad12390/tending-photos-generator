export abstract class IApplication<T> {
    public abstract onInit(): void | Promise<void>;
    public abstract onError(error: Error): void | Promise<void>;
    public abstract onDestroy(): void | Promise<void>;
    public abstract defineRoutes(callback: (serverApp: T) => void);
}