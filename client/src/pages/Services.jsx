import { useEffect } from "react";
import Table from "../components/table/Table";
import servicesData from "../data/services";
import { runServicesTest, renderMainTable, showDetails } from "../assets/script/services-test";

export default function Services() {
  useEffect(() => {
    runServicesTest();
    renderMainTable();
    showDetails();
  }, []);

  return (
    <>
      <h1>Services</h1>
      <br></br>
      <Table data={servicesData} />
    </>
  );
}