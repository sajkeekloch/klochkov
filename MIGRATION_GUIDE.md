# 🚀 Руководство по миграции проекта на Next.js + TypeScript

Это пошаговое руководство для самостоятельной миграции проекта.

---

# Этап 1: Миграция на Next.js с SSR

## Шаг 1: Создание Next.js проекта

### 1.1. Создайте новую ветку в git
```bash
git checkout -b feature/nextjs-migration
```

### 1.2. Создайте Next.js приложение
У вас есть два варианта:

**Вариант А: Создать рядом и потом перенести** (рекомендую)
```bash
# В родительской папке
cd ..
npx create-next-app@latest klochkov-next --typescript --eslint --tailwind=false --app=false --src-dir --import-alias="@/*"
```

**Вариант Б: Переименовать текущий проект и создать на его месте**
```bash
# Переименовать текущую папку
cd ..
mv klochkov klochkov-old

# Создать новый Next.js проект
npx create-next-app@latest klochkov --typescript --eslint --tailwind=false --app=false --src-dir --import-alias="@/*"
```

**Что означают флаги:**
- `--typescript` - сразу с TypeScript
- `--eslint` - с ESLint
- `--tailwind=false` - без Tailwind (у нас styled-components)
- `--app=false` - используем Pages Router (проще для миграции)
- `--src-dir` - структура с папкой src/
- `--import-alias="@/*"` - алиасы для импортов

---

## Шаг 2: Установка зависимостей

### 2.1. Перейдите в новый проект
```bash
cd klochkov-next  # или klochkov, если выбрали вариант Б
```

### 2.2. Установите styled-components для Next.js
```bash
npm install styled-components
npm install -D babel-plugin-styled-components @types/styled-components
```

### 2.3. Установите другие необходимые пакеты
```bash
npm install normalize.css
npm install react-burger-menu @types/react-burger-menu
```

---

## Шаг 3: Настройка styled-components для SSR

### 3.1. Создайте файл `.babelrc` в корне проекта
```json
{
  "presets": ["next/babel"],
  "plugins": [
    [
      "babel-plugin-styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
    ]
  ]
}
```

**Зачем это нужно:**
- `ssr: true` - включает Server-Side Rendering для стилей
- `displayName: true` - добавляет читаемые имена классов (удобно для дебага)

### 3.2. Создайте файл `pages/_document.tsx`

Этот файл нужен для кастомизации HTML документа и критически важен для SSR styled-components.

```typescript
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="ru">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
```

**Что здесь происходит:**
1. `ServerStyleSheet` - собирает все стили на сервере
2. `collectStyles` - извлекает стили из компонентов
3. `getStyleElement()` - вставляет стили в HTML
4. Без этого стили не будут работать при SSR!

### 3.3. Создайте файл `pages/_app.tsx`

```typescript
import type { AppProps } from 'next/app'
import 'normalize.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

---

## Шаг 4: Настройка next.config.js

### 4.1. Откройте `next.config.js` и настройте его

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  // Если будете деплоить на GitHub Pages
  // basePath: '/klochkov',
  // assetPrefix: '/klochkov/',
  // output: 'export', // для статического экспорта
}

module.exports = nextConfig
```

**Объяснение:**
- `compiler.styledComponents: true` - включает оптимизацию styled-components
- `basePath` и `assetPrefix` - нужны для GitHub Pages (пока закомментируйте)
- `output: 'export'` - для статического экспорта (понадобится позже)

---

## Шаг 5: Перенос компонентов

### 5.1. Скопируйте папку компонентов

Из старого проекта:
```
klochkov-old/src/components/
```

В новый:
```
klochkov-next/src/components/
```

### 5.2. Скопируйте данные

```
klochkov-old/src/dataProjects.js  →  klochkov-next/src/data/dataProjects.ts
klochkov-old/src/dataHobby.js     →  klochkov-next/src/data/dataHobby.ts
```

### 5.3. Скопируйте стили

```
klochkov-old/src/style/          →  klochkov-next/src/styles/
klochkov-old/src/assets/         →  klochkov-next/src/assets/
```

### 5.4. Скопируйте public файлы

```
klochkov-old/public/             →  klochkov-next/public/
```

---

## Шаг 6: Создание первой страницы

### 6.1. Замените `pages/index.tsx` на вашу главную страницу

Вместо react-router теперь файловая маршрутизация:

```typescript
import Head from 'next/head'
import Main from '@/components/Main/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>Klochkov - Portfolio</title>
        <meta name="description" content="Personal portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Main />
    </>
  )
}
```

### 6.2. Создайте страницу About

Создайте файл `pages/about.tsx`:

```typescript
import Head from 'next/head'
import About from '@/components/About/About'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - Klochkov</title>
        <meta name="description" content="About me" />
      </Head>
      <About />
    </>
  )
}
```

**Важно понять:**
- `pages/index.tsx` → `/` (главная)
- `pages/about.tsx` → `/about`
- `pages/projects/[id].tsx` → `/projects/1`, `/projects/2` и т.д. (динамические роуты)

---

## Шаг 7: Замена react-router-dom на Next.js Router

### 7.1. Найдите все `import { Link } from 'react-router-dom'`

Замените на:
```typescript
import Link from 'next/link'
```

### 7.2. Измените синтаксис Link

Было (react-router):
```jsx
<Link to="/about">About</Link>
```

Стало (Next.js):
```jsx
<Link href="/about">About</Link>
```

### 7.3. Замените useHistory/useNavigate

Было:
```javascript
import { useHistory } from 'react-router-dom'
const history = useHistory()
history.push('/about')
```

Стало:
```typescript
import { useRouter } from 'next/router'
const router = useRouter()
router.push('/about')
```

---

## Шаг 8: Тестирование

### 8.1. Запустите dev-сервер
```bash
npm run dev
```

### 8.2. Откройте браузер
```
http://localhost:3000
```

### 8.3. Проверьте:
- ✅ Страница загружается
- ✅ Стили применяются (нет мигания)
- ✅ Навигация работает
- ✅ Нет ошибок в консоли

---

## Шаг 9: Исправление TypeScript ошибок

На этом этапе у вас будут ошибки TypeScript, это нормально!

### 9.1. Временно отключите строгую проверку

В `tsconfig.json` найдите и измените:
```json
{
  "compilerOptions": {
    "strict": false,
    "noImplicitAny": false
  }
}
```

**Почему:** Пока компоненты в .js, TypeScript будет ругаться. Мы исправим это на этапе 3.

---

## Шаг 10: Первый коммит

```bash
git add .
git commit -m "feat: initial Next.js migration with styled-components SSR

- Setup Next.js with Pages Router
- Configure styled-components for SSR
- Add _document.tsx and _app.tsx
- Copy components from old project
- Replace react-router with Next.js routing"
```

---

## 📝 Чек-лист Этапа 1

Проверьте, что вы сделали:

- [ ] Создали Next.js проект с TypeScript
- [ ] Установили styled-components и настроили SSR
- [ ] Создали `_document.tsx` для SSR стилей
- [ ] Создали `_app.tsx`
- [ ] Настроили `next.config.js`
- [ ] Скопировали все компоненты, данные, стили
- [ ] Создали страницы в `pages/`
- [ ] Заменили react-router на Next.js Router
- [ ] Проект запускается на `localhost:3000`
- [ ] Сделали коммит

---

## ❓ Частые проблемы и решения

**Проблема:** Стили "мигают" при загрузке
**Решение:** Проверьте `_document.tsx` - скорее всего не настроен SSR

**Проблема:** Ошибка "Module not found" для компонентов
**Решение:** Проверьте алиасы в `tsconfig.json`:
```json
"paths": {
  "@/*": ["./src/*"]
}
```

**Проблема:** styled-components не работает
**Решение:** Проверьте `.babelrc` и `next.config.js`

---

## 🎯 Следующий шаг

После выполнения Этапа 1 переходите к **Этапу 2: Обновление зависимостей** (будет добавлен позже).

---

# Этап 2: Обновление зависимостей

> Этот раздел будет заполнен после завершения Этапа 1

---

# Этап 3: Миграция на TypeScript

> Этот раздел будет заполнен после завершения Этапа 2

---

# Этап 4: Atomic Design структура

> Этот раздел будет заполнен после завершения Этапа 3

---

# Этап 5: Redux Toolkit

> Этот раздел будет заполнен после завершения Этапа 4

---

# Этап 6: Интернационализация (next-i18next)

> Этот раздел будет заполнен после завершения Этапа 5

---

# Этап 7: Новые возможности React 19

> Этот раздел будет заполнен после завершения Этапа 6

---

# Этап 8: Система тем

> Этот раздел будет заполнен после завершения Этапа 7

---

# Этап 9: Дизайн и адаптивность

> Этот раздел будет заполнен после завершения Этапа 8

---

# Этап 10: Дополнительные улучшения

> Этот раздел будет заполнен после завершения Этапа 9
