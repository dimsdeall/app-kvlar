import React from "react";
import DataTable from "react-data-table-component";

function DataTableOrder() {
  const columns = [
    {
      name: "No Order",
      selector: (row) => row.no_order,
      sortable: true,
    },
    {
      name: "Tanggal",
      selector: (row) => row.tanggal,
      sortable: true,
    },
    {
      name: "Customer",
      selector: (row) => row.customer,
      sortable: true,
    },
    {
      name: "Total",
      selector: (row) => row.total,
      sortable: true,
    },
    {
      name: "Kasir",
      selector: (row) => row.kasir,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      no_order: "A001-22120012",
      tanggal: "10-05-2022",
      customer: "Toko",
      total: "Rp 10.000",
      kasir: "kasir A",
    },
    {
      id: 2,
      no_order: "coming soon",
      tanggal: "coming soon",
      customer: "coming soon",
      total: "coming soon",
      kasir: "coming soon",
    },
  ];

  const paginationComponentOptions = {
    rowsPerPageText: "Tampilkan ",
    rangeSeparatorText: " dari ",
  };

  return (
    <div className="d-flex flex-column px-1">
      <div className="border mx-2 px-2 pt-1 rounded shadow-sm text-center d-flex flex-column mb-3">
        <div className="my-2 fw-bold">Filter</div>
        <div className="mt-2 mb-4">Coming Sooon . . .</div>
      </div>
      <div className="border mx-2 px-2 pt-1 rounded shadow-sm text-center d-flex flex-column">
        <div className="my-2 fw-bold">Data Penjualan</div>
        <DataTable
          columns={columns}
          data={data}
          pagination
          paginationComponentOptions={paginationComponentOptions}
          paginationPerPage={5}
          paginationRowsPerPageOptions={[5, 10, 50]}
          customStyles={{
            table: {
              style: {
                border: "solid 0.1px",
                borderColor: "#b5aab3",
              },
            },

            headRow: {
              style: {
                minHeight: "40px",
                fontSize: "13px",
                fontWeight: "bold",
                color: "rgba(51, 51, 51, 0.9)",
              },
            },
            rows: {
              style: {
                fontSize: "12px",
                minHeight: "35px",
                ":hover": {
                  backgroundColor: "rgba(255, 0, 144, 0.5)",
                },
                cursor: "pointer",
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default DataTableOrder;
