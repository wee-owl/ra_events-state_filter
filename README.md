[Портфолио с фильтрами](https://wee-owl.github.io/ra_events-state_filter/)
===
[![Build status](https://ci.appveyor.com/api/projects/status/yyj2v9hw0ianv4qn?svg=true)](https://ci.appveyor.com/project/wee-owl/ra-events-state-filter)

Необходимо реализовать портфолио с фильтрами, аналогичное указанному на изображении.

![portfolio-all](./src/assets/portfolio-all.png)

## Описание проекта

Разработайте компонент класса `Portfolio`, хранящий список фильтров, активный фильтр, а также список проектов.

Сами фильтры отображаются в компоненте без состояния `Toolbar`, которому от `Portfolio` мы передаём три свойства:
- `filters` — список фильтров, название которых совпадает с категориями проектов;
- `selected` — активный фильтр;
- `onSelectFilter(filter)` — обработчик события, который реагирует на выбор пользователем одного из фильтров, обработчик принимает один аргумент — строку с названием фильтра.

Пример:
```
<Toolbar
  filters={["All", "Websites", "Flayers", "Business Cards"]}
  selected="All"
  onSelectFilter={(filter) => {console.log(filter);}}/>
```

В этом примере при выборе фильтра его название будет выведено в консоль. Например, «Business Cards».

Изображения самих проектов отображаются компонентом без состояния `ProjectList`, которому от `Portfolio` мы передаём список проектов — в свойство `projects`. Отображение проектов — это единственная ответственность компонента `ProjectList`.

Чтобы компонент `Portfolio` мог реагировать на выбор пользователем фильтра проектов, например, `Business Cards`, и передавать отфильтрованные по категории `Business Cards` проекты в компонент `ProjectList`, в класс `Portfolio` необходимо добавить состояние (state).

Ваша задача:
- установить состояние выбранного фильтра в обработчике события, который `Portfolio` передаёт в свойство `onSelectFilter` компонента `Toolbar`;
- из компонента `Portfolio` передать активный фильтр в свойство `selected` компонента `Toolbar`;
- в компоненте `Portfolio` отфильтровать по активному фильтру проекты и передать их в компонент `ProjectList`.

![portfolio-cards.png](./src/assets/portfolio-cards.png)
