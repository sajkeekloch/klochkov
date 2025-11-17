# План обновления проекта klochkov

## 0. Подготовка и проверка окружения ✓
- [x] Установить агентов
- [x] Настроить MCP Chrome
- [x] Согласовать план миграции

## 1. Миграция на Next.js с SSR
- [ ] Создать новую Next.js структуру проекта
- [ ] Настроить next.config.js (styled-components, i18n)
- [ ] Перенести существующие компоненты
- [ ] Настроить SSR для оптимизации SEO
- [ ] Заменить react-router-dom на Next.js Router
- [ ] Настроить GitHub Pages деплой для Next.js (или Vercel)

## 2. Обновление зависимостей
- [ ] Обновить React 17 → React 19
- [ ] Обновить styled-components до последней версии
- [ ] Установить Redux Toolkit + React-Redux
- [ ] Установить next-i18next
- [ ] Обновить остальные зависимости
- [ ] Проверить и исправить breaking changes

## 3. Миграция на TypeScript
- [ ] Настроить tsconfig.json для Next.js
- [ ] Создать типы для данных (dataProjects, dataHobby)
- [ ] Конвертировать компоненты .js → .tsx
- [ ] Настроить типизацию для styled-components
- [ ] Добавить типы для Redux store
- [ ] Добавить типы для next-i18next

## 4. Atomic Design структура
- [ ] Создать структуру папок:
  - components/atoms (Button, Input, Typography)
  - components/molecules (Card, NavItem)
  - components/organisms (Header, ProjectList)
  - components/templates (Layout)
  - pages (Next.js pages)
- [ ] Реорганизовать существующие компоненты
- [ ] Создать index.ts файлы для удобного импорта

## 5. Redux Toolkit для state management
- [ ] Настроить Redux store
- [ ] Создать slices для:
  - Темы (светлая/темная)
  - Языка приложения
  - Данных проектов (если нужно)
- [ ] Настроить Redux DevTools
- [ ] Интеграция с TypeScript

## 6. Интернационализация (next-i18next)
- [ ] Настроить next-i18next конфигурацию
- [ ] Создать структуру /public/locales/en и /public/locales/ru
- [ ] Создать файлы переводов (common.json, home.json, projects.json)
- [ ] Перевести весь контент на английский и русский
- [ ] Настроить переключатель языка
- [ ] Настроить автоопределение языка браузера

## 7. Применить новые возможности React 19
- [ ] Использовать React Server Components (где применимо)
- [ ] Применить новые хуки и API
- [ ] Настроить Error Boundaries для обработки ошибок
- [ ] Оптимизация через мемоизацию:
  - Применить React.memo для компонентов
  - Использовать useMemo для тяжелых вычислений
  - Использовать useCallback для функций

## 8. Система тем (светлая/темная)
- [ ] Создать theme конфигурацию для styled-components
- [ ] Интеграция с Redux (хранение выбранной темы)
- [ ] Создать ThemeProvider
- [ ] Добавить переключатель темы
- [ ] Сохранение выбора в localStorage

## 9. Дизайн и адаптивность
- [ ] Разработать дизайн-систему (цвета, типографика, отступы)
- [ ] Создать мобильную версию всех страниц
- [ ] Настроить responsive breakpoints
- [ ] Оптимизировать изображения для разных размеров экрана
- [ ] Accessibility проверка (a11y)

## 10. Дополнительные улучшения
- [ ] Настроить ESLint + Prettier для TypeScript
- [ ] Обновить тесты под TypeScript
- [ ] Оптимизация производительности:
  - Lazy loading компонентов
  - Image optimization (next/image)
  - Code splitting
- [ ] SEO оптимизация (meta tags, sitemap)
- [ ] Настроить CI/CD (GitHub Actions)

---

## Технологический стек (финальный):
- ⚛️ React 19
- 🚀 Next.js (SSR)
- 📘 TypeScript
- 💅 styled-components
- 🔄 Redux Toolkit
- 🌍 next-i18next
- 🎨 Atomic Design
- 📱 Responsive Design