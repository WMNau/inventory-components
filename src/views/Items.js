import { useContext, useState, useEffect } from "react";

import ItemList from "../components/ItemList";
import { ModalContext } from "../layouts/MainLayout";
import { getData } from "./Users";

function Items() {
  const modalFunctions = useContext(ModalContext);

  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getData(
        "https://fakerapi.it/api/v1/custom?_quantity=7&amount=counter&name=pokemon&date=date&location=word&description=text"
      );

      setItemsData(res.data);
    }

    fetchData();
  }, []);

  const columns = [
    {
      title: "Items",
      field: "name"
    },
    {
      title: "Amount",
      field: "amount",
      type: "numeric"
    },
    {
      title: "Date",
      field: "date"
    },
    {
      title: "Location",
      field: "location"
    }
  ];

  return (
    <div>
      <ItemList
        columns={columns}
        data={itemsData}
        showDetails={(rowData) => {
          modalFunctions.setIsModalOpen(true);
          modalFunctions.setItemData(rowData);
        }}
      />
    </div>
  );
}

export default Items;
