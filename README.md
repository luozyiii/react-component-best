# react-component-best

react 组件库

## 项目搭建

```
create-react-app typescript
https://create-react-app.bootcss.com/docs/getting-started

antd
https://unpkg.com/browse/antd@4.24.1/

classnames

storybook
https://www.npmjs.com/package/@storybook/cli
```

## 如何完善组件的单测

### [React Testing Library] (https://testing-library.com/docs/react-testing-library/intro)

- 组件渲染（render）

```ts
const {
  constainer: HTMLDivElement, // 组件渲染的容器
  baseElement: HTMLDivElement, // 相当于 document.body
  debug: Function, // 打印当前的 DOM 结构
  rerender: Function, // 重新渲染组件
  unmount: Function, // 组件卸载
} = render(component);
```

- 元素查找（get/query/find）

```
getBy / getAllBy / getByText、getByRole...
queryBy / queryAllBy / queryByText、queryByRole...
findBy / findAllBy / findByText、findByRole...
```

- 事件触发（fireEvent）

### Jest
