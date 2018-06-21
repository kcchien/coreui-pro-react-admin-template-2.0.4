import React from 'react';
import Loadable from 'react-loadable'

import CodeEditors from './views/Editors/CodeEditors'
import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const Compose = Loadable({
  loader: () => import('./views/Apps/Email/Compose'),
  loading: Loading,
});

const Inbox = Loadable({
  loader: () => import('./views/Apps/Email/Inbox'),
  loading: Loading,
});

const Message = Loadable({
  loader: () => import('./views/Apps/Email/Message'),
  loading: Loading,
});

const Invoice = Loadable({
  loader: () => import('./views/Apps/Invoicing/Invoice'),
  loading: Loading,
});

const Breadcrumbs = Loadable({
  loader: () => import('./views/Base/Breadcrumbs'),
  loading: Loading,
});

const Cards = Loadable({
  loader: () => import('./views/Base/Cards'),
  loading: Loading,
});

const Carousels = Loadable({
  loader: () => import('./views/Base/Carousels'),
  loading: Loading,
});

const Collapses = Loadable({
  loader: () => import('./views/Base/Collapses'),
  loading: Loading,
});

const Dropdowns = Loadable({
  loader: () => import('./views/Base/Dropdowns'),
  loading: Loading,
});

const Jumbotrons = Loadable({
  loader: () => import('./views/Base/Jumbotrons'),
  loading: Loading,
});

const ListGroups = Loadable({
  loader: () => import('./views/Base/ListGroups'),
  loading: Loading,
});

const Navbars = Loadable({
  loader: () => import('./views/Base/Navbars'),
  loading: Loading,
});

const Navs = Loadable({
  loader: () => import('./views/Base/Navs'),
  loading: Loading,
});

const Paginations = Loadable({
  loader: () => import('./views/Base/Paginations'),
  loading: Loading,
});

const Popovers = Loadable({
  loader: () => import('./views/Base/Popovers'),
  loading: Loading,
});

const ProgressBar = Loadable({
  loader: () => import('./views/Base/ProgressBar'),
  loading: Loading,
});

const Switches = Loadable({
  loader: () => import('./views/Base/Switches'),
  loading: Loading,
});

const Tabs = Loadable({
  loader: () => import('./views/Base/Tabs'),
  loading: Loading,
});

const Tooltips = Loadable({
  loader: () => import('./views/Base/Tooltips'),
  loading: Loading,
});

const BrandButtons = Loadable({
  loader: () => import('./views/Buttons/BrandButtons'),
  loading: Loading,
});

const ButtonDropdowns = Loadable({
  loader: () => import('./views/Buttons/ButtonDropdowns'),
  loading: Loading,
});

const ButtonGroups = Loadable({
  loader: () => import('./views/Buttons/ButtonGroups'),
  loading: Loading,
});

const Buttons = Loadable({
  loader: () => import('./views/Buttons/Buttons'),
  loading: Loading,
});

const LoadingButtons = Loadable({
  loader: () => import('./views/Buttons/LoadingButtons'),
  loading: Loading,
});

const Charts = Loadable({
  loader: () => import('./views/Charts'),
  loading: Loading,
});

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

// issue with mispalced position of cm value for acync load
// const CodeEditors = Loadable({
//   loader: () => import('./views/Editors/CodeEditors'),
//   loading: Loading,
// });

const TextEditors = Loadable({
  loader: () => import('./views/Editors/TextEditors'),
  loading: Loading,
});


const AdvancedForms = Loadable({
  loader: () => import('./views/Forms/AdvancedForms'),
  loading: Loading,
});

const BasicForms = Loadable({
  loader: () => import('./views/Forms/BasicForms'),
  loading: Loading,
});

const GoogleMaps = Loadable({
  loader: () => import('./views/GoogleMaps'),
  loading: Loading,
});

const CoreUIIcons = Loadable({
  loader: () => import('./views/Icons/CoreUIIcons'),
  loading: Loading,
});

const Flags = Loadable({
  loader: () => import('./views/Icons/Flags'),
  loading: Loading,
});

const FontAwesome = Loadable({
  loader: () => import('./views/Icons/FontAwesome'),
  loading: Loading,
});

const SimpleLineIcons = Loadable({
  loader: () => import('./views/Icons/SimpleLineIcons'),
  loading: Loading,
});

const Alerts = Loadable({
  loader: () => import('./views/Notifications/Alerts'),
  loading: Loading,
});

const Badges = Loadable({
  loader: () => import('./views/Notifications/Badges'),
  loading: Loading,
});

const Modals = Loadable({
  loader: () => import('./views/Notifications/Modals'),
  loading: Loading,
});

const Toastr = Loadable({
  loader: () => import('./views/Notifications/Toastr'),
  loading: Loading,
});

const Calendar = Loadable({
  loader: () => import('./views/Plugins/Calendar'),
  loading: Loading,
});

const Spinners = Loadable({
  loader: () => import('./views/Plugins/Spinners'),
  loading: Loading,
});

const DataTable = Loadable({
  loader: () => import('./views/Tables/DataTable'),
  loading: Loading,
});

const Tables = Loadable({
  loader: () => import('./views/Tables/Tables'),
  loading: Loading,
});

const Colors = Loadable({
  loader: () => import('./views/Theme/Colors'),
  loading: Loading,
});

const Typography = Loadable({
  loader: () => import('./views/Theme/Typography'),
  loading: Loading,
});

const Widgets = Loadable({
  loader: () => import('./views/Widgets/Widgets'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', name: 'Home', component: DefaultLayout, exact: true },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/buttons/loading-buttons', name: 'Loading Buttons', component: LoadingButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/editors', name: 'Editors', component: CodeEditors, exact: true },
  { path: '/editors/code-editors', name: 'Code Editors', component: CodeEditors },
  { path: '/editors/text-editors', name: 'Text Editors', component: TextEditors },
  { path: '/forms', name: 'Forms', component: BasicForms, exact: true },
  { path: '/forms/advanced-forms', name: 'Advanced Forms', component: AdvancedForms },
  { path: '/forms/basic-forms', name: 'Basic Forms', component: BasicForms },
  { path: '/google-maps', name: 'Google Maps', component: GoogleMaps },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toastr', name: 'Toastr', component: Toastr },
  { path: '/plugins', name: 'Plugins', component: Calendar, exact: true },
  { path: '/plugins/calendar', name: 'Calendar', component: Calendar },
  { path: '/plugins/spinners', name: 'Spinners', component: Spinners },
  { path: '/tables', name: 'Tables', component: Tables, exact: true },
  { path: '/tables/data-table', name: 'Data Table', component: DataTable },
  { path: '/tables/tables', name: 'Tables', component: Tables },
  { path: '/apps', name: 'Apps', component: Compose, exact: true },
  { path: '/apps/email', name: 'Email', component: Compose, exact: true },
  { path: '/apps/email/compose', name: 'Compose', component: Compose },
  { path: '/apps/email/inbox', name: 'Inbox', component: Inbox },
  { path: '/apps/email/message', name: 'Message', component: Message },
  { path: '/apps/invoicing', name: 'Invoice', component: Invoice, exact: true },
  { path: '/apps/invoicing/invoice', name: 'Invoice', component: Invoice },
  { path: '/widgets', name: 'Widgets', component: Widgets }
];

export default routes;
