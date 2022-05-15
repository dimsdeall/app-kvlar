import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getPenjualan } from "../../../Config/redux/action/penjualanAction";
import { formatRupiah } from "../../../Utils";
import ReactDatePicker from "react-datepicker";

function DataTableOrder() {
  const { PenjualanList } = useSelector((state) => state.penjualanReducer);
  const [dateRange, setDateRange] = useState([
    moment().startOf("month").toDate(),
    moment().endOf("month").toDate(),
  ]);
  const [startDate, endDate] = dateRange;
  const [Data, setData] = useState([]);
  const [Update, setUpdate] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dateRange[0] !== null && dateRange[1] !== null) {
      dispatch(
        getPenjualan({
          url: "/penjualan",
          type: "PENJUALAN_LIST",
          dateRange,
        }),
        dispatch
      );
    }
  }, [dateRange, Update]);

  useEffect(() => {
    if (PenjualanList.length > 0) {
      let datas = [];
      let nilai = 0;
      PenjualanList.map((val) => {
        nilai = 0;

        if (val.transaksi.length > 0) {
          val.transaksi.map((detail) => {
            nilai += detail.nilai;
          });
        }

        datas.push({
          id: val.id,
          no_order: val.no_order,
          tanggal: moment(val.tanggal).format("LLL"),
          customer: val.customer.nama,
          total: formatRupiah(String(nilai), "Rp. "),
          kasir: val.kasir.nama,
        });
      });
      setData(datas);
    }
  }, [PenjualanList]);

  const columns = [
    {
      name: "No Order",
      selector: (row) => row.no_order,
    },
    {
      name: "Tanggal",
      selector: (row) => row.tanggal,
      grow: 3,
    },
    {
      name: "Customer",
      selector: (row) => row.customer,
      grow: 2,
    },
    {
      name: "Kasir",
      selector: (row) => row.kasir,
    },
    {
      name: "Total",
      selector: (row) => row.total,
      grow: 2,
      right: true,
    },
  ];

  const paginationComponentOptions = {
    rowsPerPageText: "Tampilkan ",
    rangeSeparatorText: " dari ",
  };

  return (
    <div className="d-flex flex-column px-1" style={{ marginBottom: 70 }}>
      <div className="border mx-2 px-2 pt-1 rounded shadow-sm text-center d-flex flex-column mb-3">
        <div className="my-2 fw-bold">Filter</div>
        <div className="mt-2 mb-4 d-flex justify-content-center align-items-center">
          <div className="me-2">Tanggal : </div>
          <ReactDatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              if (update[1] !== null) {
                update[1] = moment(update[1]).set({ h: 23, m: 59 }).toDate();
              }
              setDateRange(update);
            }}
            withPortal
            className="form-control form-control-sm"
            dateFormat={"dd-MM-yyyy"}
          />
        </div>
      </div>
      <div className="border mx-2 px-2 pt-1 rounded shadow-sm text-center d-flex flex-column">
        <div className="my-2 fw-bold">Data Penjualan</div>
        <DataTable
          columns={columns}
          data={Data}
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
