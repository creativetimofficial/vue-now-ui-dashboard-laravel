import DashboardLayout from "src/pages/Dashboard/Layout/DashboardLayout.vue";
import AuthLayout from "src/pages/Dashboard/Pages/AuthLayout.vue";
// GeneralViews
import NotFound from "src/pages/GeneralViews/NotFoundPage.vue";

// Page Headers
const DashboardHeader = () =>
  import(
    /* webpackChunkName: "dashboard" */ "src/pages/Dashboard/Dashboard/DashboardHeader.vue"
  );
import DefaultHeader from "src/pages/Dashboard/DefaultHeader";

// Example pages
import UserProfile from "@/pages/Dashboard/Examples/UserProfile.vue";

// User Management
import ListUserPage from "@/pages/Dashboard/Examples/UserManagement/ListUserPage.vue";



// Components pages

const Notifications = () =>
  import(
    /* webpackChunkName: "components" */ "src/pages/Dashboard/Components/Notifications.vue"
  );
const Icons = () =>
  import(
    /* webpackChunkName: "components" */ "src/pages/Dashboard/Components/Icons.vue"
  );
const Typography = () =>
  import(
    /* webpackChunkName: "components" */ "src/pages/Dashboard/Components/Typography.vue"
  );

// Dashboard pages
const Dashboard = () =>
  import(
    /* webpackChunkName: "dashboard" */ "src/pages/Dashboard/Dashboard/Dashboard.vue"
  );


// Maps pages
const GoogleMaps = () =>
  import(
    /* webpackChunkName: "maps" */ "src/pages/Dashboard/Maps/GoogleMaps.vue"
  );


const Login = () =>
  import(/* webpackChunkName: "auth" */ "src/pages/Dashboard/Pages/Login.vue");
const Register = () =>
  import(
    /* webpackChunkName: "auth" */ "src/pages/Dashboard/Pages/Register.vue"
  );
const PasswordReset = () =>
  import(/* webpackChunkName: "password" */ "src/pages/Dashboard/Password/Reset.vue");
const PasswordEmail = () =>
  import(/* webpackChunkName: "password" */ "src/pages/Dashboard/Password/Email.vue");


// TableList pages
const RegularTables = () =>
  import(
    /* webpackChunkName: "tables" */ "src/pages/Dashboard/Tables/RegularTables.vue"
  );

//import middleware
import auth from "@/middleware/auth";
import guest from "@/middleware/guest";

let componentsMenu = {
  path: "/components",
  component: DashboardLayout,
  redirect: "/components/buttons",
  name: "Components",
  children: [
    {
      path: "notifications",
      name: "Notifications",
      components: { default: Notifications, header: DefaultHeader },
    },
    {
      path: "icons",
      name: "Icons",
      components: { default: Icons, header: DefaultHeader },
    },
    {
      path: "typography",
      name: "Typography",
      components: { default: Typography, header: DefaultHeader },
    },
  ],
};
let examplesMenu = {
  path: "/examples",
  component: DashboardLayout,
  name: "Examples",
  children: [
    {
      path: "user-profile",
      name: "User Profile",
      components: { default: UserProfile, header: DefaultHeader },
      meta: { middleware: auth },
    },
  
    {
      path: "user-management/list-users",
      name: "List Users",
      components: { default: ListUserPage, header: DefaultHeader },
      meta: { middleware: auth },
    }
  ],
};


let tablesMenu = {
  path: "/table-list",
  component: DashboardLayout,
  redirect: "/table-list/regular",
  name: "Tables",
  children: [
    {
      path: "regular",
      name: "Regular Tables",
      components: { default: RegularTables, header: DefaultHeader },
    },
    
  ],
};

let mapsMenu = {
  path: "/maps",
  component: DashboardLayout,
  name: "Maps",
  redirect: "/maps/google",
  children: [
    {
      path: "google",
      name: "Google Maps",
      components: { default: GoogleMaps, header: DefaultHeader },
    },
  ],
};



let authPages = {
  path: "/",
  component: AuthLayout,
  name: "Authentication",
  children: [
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: { middleware: guest },
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
      meta: { middleware: guest },
    },
    {
      path: "/password/reset",
      name: "PasswordReset",
      component: PasswordReset,
      meta: { middleware: guest }
    },
    {
      path: "/password/email",
      name: "PasswordEmail",
      component: PasswordEmail,
      meta: { middleware: guest }
    },
  ],
};

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    name: "Home",
  },
  componentsMenu,
  examplesMenu,
  tablesMenu,
  mapsMenu,
  authPages,
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    name: "Dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        components: { default: Dashboard, header: DashboardHeader },
        meta: { middleware: auth },
      },

    ],
  },
  { path: "*", component: NotFound },
];

export default routes;
