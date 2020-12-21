## Vue Frontend Setup

To start using this dashboard you will need to to install some dependencies or copy some files to your
project.

<hr>

## Steps to install

1. Navigate to your Vue Now UI Dashboard project folder: `cd your-vue-now-ui-dashbord-project`
2. Install project dependencies: `npm install`
3. Create a new .env file: `cp .env.example .env`
4. `VUE_APP_BASE_URL` should contain the URL of your Vue Now UI Dashboard Project (eg. http://localhost:8080/)
5. `VUE_APP_API_BASE_URL` should contain the URL of your Laravel JSON:API Project. (eg. http://localhost:3000/api/v1)
6. Run `npm run dev` to start the application in a local development environment or `npm run build` to build release distributables.

## Now UI Dashboard

Now UI Dashboard is built as Vue plugin so you can simply import it and use it.

```js
import Vue from "vue";
import Dashboard from "@/plugins/dashboard-plugin";
Vue.use(Dashboard);
```

## Global Components

Now UI comes with an extensive set of custom Vue components. Some of them are globally instantiated so
it's easier to use them across the app without importing them each time.

Here's the list of global components:

- **Badge**
- **BaseAlert**
- **BaseButton**
- **BaseCheckbox**
- **BaseInput**
- **BaseDropdown**
- **BaseNav**
- **BasePagination**
- **BaseProgress**
- **BaseRadio**
- **BaseSlider**
- **BaseSwitch**
- **BaseHeader**
- **Card**
- **StatsCard**
- **Modal**
- **RouteBreadcrumb**
- **ElInput** (element-ui)
- **ElTooltip** (element-ui)
- **ElPopover** (element-ui)
- **Sidebar**
- **SidebarItem**

## Local components

Besides the components mentioned above, we have some extra components/plugins that are usually less used
and bigger. In order to not affect the overall bundle size of the Now UI Dashboard, they should be imported locally.

You can find the components inside `src/components/` folder.

## Starter template

To get started faster, we provide a starter template inside the project. It's a bare bones
layout with nav, footer and a hello world. To enable it go to **main.js** and change line 3

```js{3}
import Vue from "vue";
import App from "./App.vue";
import routes from './routes';
```


## Vue-cli

We used the latest 3.x [Vue CLI](https://github.com/vuejs/vue-cli) which aims to reduce project configuration
to as little as possible. Almost everything is inside `package.json` + some other related files such as
`.babelrc`, `.eslintrc.js` and `.postcssrc.js`

## Learn more

Stay up to date on the development journey and connect with us on:

<ul>
  <li>Follow Creative Tim on
    <a href="https://twitter.com/creativetim">Twitter</a>.</li>
  <li>Read and subscribe to The Official
    <a href="http://blog.creative-tim.com">Creative Tim Blog</a>.</li>
  <li>Follow Creative Tim on
    <a href="https://www.instagram.com/creativetimofficial">Instagram</a>.</li>
  <li>Follow Creative Tim on
    <a href="https://www.facebook.com/creativetim">Facebook</a>.</li>
</ul>

<ul>
  <li>Follow Updivision on
    <a href="https://www.facebook.com/updivision/">Facebook</a>.</li>
  <li>Follow Updivision on
    <a href="https://twitter.com/updivision/">Twitter</a>.</li>
  <li>Follow Updivision on
    <a href="https://www.linkedin.com/company/updivision">Linkedin</a>.</li>
  <li>Read and subscribe to The Official
    <a href="https://updivision.com/blog/">Updivision Blog</a>.</li>
</ul>
