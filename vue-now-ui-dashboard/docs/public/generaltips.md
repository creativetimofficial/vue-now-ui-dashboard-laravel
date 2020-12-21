# Changing colors

You can change the default colors via variables from SASS:
1. You can find the colors in `src/assets/sass/now-ui-dashboard/_variables.scss`
2. Change anything is *.scss files and the compilation will be done automatically to CSS code.


# Deployment tips
Deploying web applications should not be hard, but it might be tricky sometimes. 
The default setup we have for Vue Now UI Dashboard build the website as a static html app, meaning
you can deploy it pretty much anywhere.

# Custom components

 Writing custom components should be fairly easy with Vue Now UI Dashboard. 
 You can either write your own components with the help of our provided css or even customize Element-UI components.
 
 If you want to write your own re-usable component, simply go to `src/components` and create a new `.vue` file.
 Usually all the css you need is already present in `assets` folder. If you need small customizations, you can directly add your custom styles inside 
 your `.vue` component. 
 After that, make sure you import your component inside `src/components/index.js` file just like the others.
 This will make it possible to import the component seamlessly across the dashboard like this `import {MyComponent} from 'src/components`

### Override element-ui components

 Vue Now UI Dashboard uses [element-ui](http://element.eleme.io/#/en-US/component/installation) for more complex components such as tables, selects etc.
 In order to give these components a `Now UI` look, we recommend creating a new `scss` file inside `src/assets/now-ui-dashboard/element` folder named with the component you want to customize.
 Element-UI uses BEM under the hood which should make the css customization pretty easy. You can take a look at some examples in the template: 
 
 - `_tags.scss`
 - `_select.scss` 
 - `_date_picker.scss`
 
 to see how these components are customized. The easiest way to customize a new component, is to inspect the output html in Chrome dev tools and write your css/scss based on
 the class names or ids you find there.
 
### Override element-ui variables

We have defined a separate file `src/assets/sass/element_variables.scss` where you can override certain element-ui variables
as presented in [Element-Ui docs](http://element.eleme.io/#/en-US/component/custom-theme#update-scss-variables-in-your-project)
We set the main colors from Element to be the same as our custom color palette. This way, new components from Element, when imported, 
will have the same colors as the dashboard.



