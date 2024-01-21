import { Fragment } from "react";
import Navbar from "../_components/navbar/Navbar";
import ServerIntlProvider from "@/components/ServerIntlProvider";
import getIntl from "../intl";

export default async function Home({ children, params: { locale } }: { children: React.ReactNode, params: { locale: string } }) {
  const intl = await getIntl(locale, 'home');
  return (
    <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
      <div className="bg-[#0a1521] relative overflow-hidden">
        <Navbar />
        {children}
      </div>
    </ServerIntlProvider>
  )
}
