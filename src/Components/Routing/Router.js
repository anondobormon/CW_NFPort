import { Route, Routes } from "react-router-dom";
import AccountLayout from "../Account/AccountLayout";
import CentreAide from "../Account/Pages/CentreAide";
import Aide from "../Account/Pages/CentreAide/Aide";
import Compte from "../Account/Pages/Compte";
import Reglages from "../Account/Pages/Reglages";
import Bienvenue from "../CommonPage/Bienvenue/Bienvenue";
import Connexion from "../CommonPage/Connexion/Connexion";
import ContactezNous from "../CommonPage/ContactezNous/ContactezNous";
import Inscription from "../CommonPage/Inscription/Inscription";
import Plan from "../CommonPage/Plan/Plan";
import Calendar from "../Dashboard/Calendar";
import Clients from "../Dashboard/Clients";
import CustomerDetails from "../Dashboard/CustomerDetails";
import Dashboard from "../Dashboard/Dashboard";
import Email from "../Dashboard/Email";
import EmailDetails from "../Dashboard/EmailDetails/EmailDetails";
import DashboardLayout from "../Dashboard/Layout/DashboardLayout";
import Message from "../Dashboard/Message";
import Messagerie from "../Dashboard/Messagerie";
import Reservations from "../Dashboard/Reservations";
import NotFound from "../ErrorPages/NotFound";
import UnAuthorize from "../ErrorPages/UnAuthorize";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/emails" element={<Email />} />
          <Route path="/email-details" element={<EmailDetails />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/messagerie" element={<Messagerie />} />
          <Route path="/message" element={<Message />} />
          {/* <Route path="/support" element={<Support />} /> */}
          <Route path="/customer-details" element={<CustomerDetails />} />
        </Route>
        <Route path="/compte" element={<AccountLayout />}>
          <Route index element={<Compte />} />
          <Route path="centre-aide" element={<CentreAide />} />
          <Route path="aide" element={<Aide />} />
          <Route path="reglages" element={<Reglages />} />
        </Route>
        <Route path="/contactez-nous" element={<ContactezNous />} />
        <Route path="/plans" element={<Plan />} />
        <Route path="/bienvenue" element={<Bienvenue />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/unauthorized" element={<UnAuthorize />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
