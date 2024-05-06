# Installation

Requirements:

- [React 18](https://reactjs.org/) or later
- [Tailwind CSS 3](https://tailwindcss.com/) or later

### Install

Inside your React project directory, run the following:

{% tabs %}
{% tab title="npm" %}

```sh
npm install @openui-org/theme @openui-org/react
```

{% endtab %}

{% tab title="pnpm" %}

```sh
pnpm install @openui-org/theme @openui-org/react
```

{% endtab %}
{% endtabs %}

### Tailwind CSS Setup

Open UI is built on top of Tailwind CSS, so you need to install Tailwind CSS first. You can follow the official installation guide to install Tailwind CSS. Then you need to add the following code to your `tailwind.config.(js,ts,mjs,cjs)` file:

```javascript
import { openui } from '@openui-org/theme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    //...
    './node_modules/@openui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [openui()],
}
```

### Example

Now, you can use the component you installed in your application:

```jsx
import * as React from 'react'
import { Button } from '@openui-org/react'

function App() {
  return <Button>Press me</Button>
}
```
