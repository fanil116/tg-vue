// global.d.ts
export {};

declare global {
    namespace Telegram {
        interface WebApp {
            initData: string;
            version: string;
            // Добавьте здесь все другие свойства и методы, которые вы используете
        }
    }

    const Telegram: Telegram.WebApp;
}