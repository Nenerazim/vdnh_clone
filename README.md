# VDNH_SITE_FRONT Nuxt 3

## Пакетный менеджер

Используется pnpm

## DevOps

.env - VITE_PUBLIC_APP_URL=your_api

## DevOps

.env - VITE_PUBLIC_APP_URL=your_api

```bash
# Установить если не установлен
npm i -g pnpm
```

## Зависимости и обязательные комманды для старта проекта

```bash
pnpm install
# Если не установлен глобально commitizen - ставим
pnpm setup
# Затем перезагружаем компьютер, после чего выполняем
pnpm install -g commitizen git-cz
```

## Dev

```bash
# Запуск проекта в режиме разработчика
pnpm run dev
```

## Сборка

```bash
# Собирает пакет для выливки в менеджер пакетов в папку build (не должно попадать в репозиторий)
pnpm run build
```

## Проверка кода

```bash
# Проверка лининга и форматирования
pnpm run lint
# Проверка типизации
pnpm run typecheck
# Тесты (Vitest)
pnpm run test
```

## Форматирование кода по пресету проекта

```bash
pnpm run format
```

## !Коммиты!

В проекте установлен husky перед коммитом будет произведен линтинг и проверка типов.
!!!Все коммиты обязательно делаются коммандой указанной ниже:

```bash
pnpm run commit
```
