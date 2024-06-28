// global.d.ts
export {};

declare global {
    namespace Telegram {
      interface WebApp {
        initData: string;
        version: string;
        ready: () => void;
        showAlert: (string) => void;
        MainButton: any;
        initDataUnsafe: any;
        BackButton: any;
        openTelegramLink: (string) => void;
        // Добавьте другие методы и свойства, которые вы используете
      }
  
      const WebApp: WebApp;
    }
  }