import { BrowserRouter } from "react-router-dom";
import { AppProviders } from "@/infra/providers/AppProviders";
import { AppRoutes } from "@/app/routes/AppRoutes";

export default function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppProviders>
  );
}
