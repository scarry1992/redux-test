# redux

- Настройка окружения
    - Сервер с использованием Express
    - Webpack с HMR(Hot Module Replacement Plugin)
    - Babel с пресетами на ES2015, React, Stage-0 и оптимизацией сборки через transform-runtime-plugin
    - React и ReactDOM с оптимизацией для HMR(react-hot-loader)
    - ESLint(eslint, babel-eslint, eslint-loader, eslint-plugin-react)
    - NPM Install Webpack Plugin
- Создание
    - Store - хранилище состояния приложения(объект с методами getState(), dispatch(action), subscribe(listener), 
      replaceReducer(nextReducer))
    - Компонент(глупый) - Как это выглядит(разметка, стили), Контейнер (умный) - Как это работает (получение данных, обновление состояния)