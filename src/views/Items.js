import React, { useContext } from "react";

import ItemList from "../components/ItemList";
import { ModalContext } from "../layouts/MainLayout";

function Items() {
  const modalFunctions = useContext(ModalContext);
  const columns = [
    {
      title: "Items",
      field: "name"
    },
    {
      title: "Date",
      field: "date"
    }
  ];

  const data = [
    {
      name: "trash bags",
      date: new Date().toLocaleDateString()
    },
    {
      name: "trash bags",
      date: new Date().toLocaleDateString()
    },
    {
      name: "trash bags",
      date: new Date().toLocaleDateString()
    },
    {
      name: "trash bags",
      date: new Date().toLocaleDateString()
    }
  ];

  return (
    <div>
      <ItemList
        columns={columns}
        data={data}
        showDetails={(rowData) => {
          modalFunctions.setIsModalOpen(true);
          modalFunctions.setItemData(rowData);
        }}
      />
    </div>
  );
}

export default Items;
