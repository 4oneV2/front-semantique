/*!

=========================================================
* Now UI Dashboard React - v1.5.2
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from 'views/Dashboard.js';
import Notifications from 'views/Notifications.js';
import Icons from 'views/Icons.js';
import Typography from 'views/Typography.js';
import TableList from 'views/TableList.js';
import Maps from 'views/Maps.js';
import Upgrade from 'views/Upgrade.js';
import UserPage from 'views/UserPage.js';
import Matchs from 'views/matchs';
import Sports from 'views/Sports';
import Evenements from 'views/Evenements';
import Trophees from 'views/trophee';
import Villes from 'views/ville';
import Pays from 'views/pays';
import Stades from 'views/stade';

var dashRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'design_app',
    component: <Dashboard />,
    layout: '/admin',
  },
  {
    path: '/avis',
    name: 'Avis',
    icon: 'users_single-02',
    component: <Icons />,
    layout: '/admin',
  },
  {
    path: '/categ',
    name: 'Catégorie',
    icon: 'users_circle-08',
    component: <Maps />,
    layout: '/admin',
  },
  {
    path: '/encher',
    name: 'Enchére',
    icon: 'sport_user-run',
    component: <UserPage />,
    layout: '/admin',
  },
  {
    path: '/conv',
    name: 'Conversation',
    icon: 'emoticons_satisfied',
    component: <TableList />,
    layout: '/admin',
  },
  {
    path: '/message',
    name: 'Message',
    icon: ' business_badge',
    component: <Notifications />,
    layout: '/admin',
  },

  {
    path: '/part',
    name: 'Participation',
    icon: 'ui-1_calendar-60 ',
    component: <Evenements />,
    layout: '/admin',
  },
  {
    path: '/produit',
    name: 'Produit',
    icon: 'files_paper',
    component: <Matchs />,
    layout: '/admin',
  },
  {
    path: '/requete',
    name: 'Requete',
    icon: 'design_bullet-list-67',
    component: <Sports />,
    layout: '/admin',
  },
  {
    path: '/user',
    name: 'User',
    icon: 'business_bank',
    component: <Stades />,
    layout: '/admin',
  },
  {
    path: '/commande',
    name: 'Commande',
    icon: 'location_world ',
    component: <Pays />,
    layout: '/admin',
  },
  {
    path: '/etat',
    name: 'Etat Commande',
    icon: 'location_pin',
    component: <Villes />,
    layout: '/admin',
  },
  {
    path: '/modep',
    name: 'Mode Paiement',
    icon: 'design_app',
    component: <Trophees />,
    layout: '/admin',
  },
];
export default dashRoutes;
