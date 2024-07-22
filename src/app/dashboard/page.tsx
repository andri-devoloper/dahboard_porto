import Incoment from "../Incamen/page";
import DefaultLayout from "../components/layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function Home() {
  return (
    <DefaultLayout>
      <Incoment />
    </DefaultLayout>
  );
}
