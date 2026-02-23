import Hero from "../components/Hero";
import ServiceStudies from "../components/ServiceStudies";
import ServiceRenovation from "../components/ServiceRenovation";
import ServiceManagement from "../components/ServiceManagement";
import ServiceEnergy from "../components/ServiceEnergy";
import ServiceSmartHome from "../components/ServiceSmartHome";
import ServiceBIM from "../components/ServiceBIM";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceStudies />
      <ServiceRenovation />
      <ServiceManagement />
      <ServiceEnergy />
      <ServiceSmartHome />
      <ServiceBIM />
    </>
  );
}
