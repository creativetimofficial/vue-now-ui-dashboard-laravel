# Navbars

We restyled the classic Bootstrap Navbar.

### Primary navbar

```html
/*vue*/
<desc>
 `showMenu` property applies only on small viewport (mobile). Shrink the browser to see that in action
</desc>
<template>
  <navbar :show-navbar="showMenu" type="primary" :transparent="false" position="relative">
   <div class="navbar-wrapper">
     <div class="navbar-toggle" :class="{toggled: showMenu}">
       <navbar-toggle-button @click.native="toggleNavbar">
       </navbar-toggle-button>
     </div>
     <a class="navbar-brand" href="#pablo">Now UI Dashboard</a>
   </div>

   <template slot="navbar-menu">
     <li class="nav-item active">
       <a class="nav-link">
         <i class="now-ui-icons design_app"></i>
         Dashboard
       </a>
     </li>
     <li class="nav-item">
       <a class="nav-link">
         <i class="now-ui-icons tech_mobile"></i>
         Register
       </a>
     </li>

     <li class="nav-item">
       <a class="nav-link">
         <i class="now-ui-icons users_circle-08"></i>
         Login
       </a>
     </li>

     <li class="nav-item">
       <a class="nav-link">
         <i class="now-ui-icons business_money-coins"></i>
         Pricing
       </a>
     </li>
   </template>

 </navbar>
</template>

<script>
  export default {
    data(){
      return {
        showMenu: true
      }
    },
   methods: {
    toggleNavbar() {
      // applies on mobile only
      document.body.classList.toggle('nav-open')
      this.showMenu = !this.showMenu
    },
    closeMenu() {
      document.body.classList.remove('nav-open')
      this.showMenu = false
    }
   }
  }
</script>
```
## Colored navbars
```html
/*vue*/
<desc>
 You can change navbar color with the `type` prop.
</desc>
<template>
  <div>
    <navbar v-for="type in types" :key="type" 
            :show-navbar="showMenu"
            :type="type" 
            :transparent="false"
             position="relative">
     <div class="navbar-wrapper">
       <div class="navbar-toggle" :class="{toggled: showMenu}">
         <navbar-toggle-button @click.native="toggleNavbar">
         </navbar-toggle-button>
       </div>
       <a class="navbar-brand" href="#">{{type}}</a>
     </div>
  
     <template slot="navbar-menu">
       <li class="nav-item active">
         <a class="nav-link">
           <i class="now-ui-icons design_app"></i>
           Dashboard
         </a>
       </li>
     </template>
   </navbar>
</div>
</template>

<script>
  export default {
    data(){
      return {
        types: ['white', 'default', 'primary', 'danger', 'success', 'warning', 'info']
      }
    }
  }
</script>
```

### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| showNavbar     | Whether to display a dropdown menu with links on mobile   | boolean  |       true/false        |     false     |
| transparent     | Whether the navbar is transparent  | boolean  |       true/false        |     true     |
| position     | Position of the navbar  | string  |       absolute/relative        |     absolute     |
| type     | Navbar type (color)  | string  |       white/default/primary/danger/success/warning/info        |     white     |

### Slots
| Name | Description |
|---------- |-------- |
|  default  | Navbar left side content (brand and toggle button )|
|  navbar-menu  | Content of the navbar (right on desktop, dropdown menu on mobile) |
