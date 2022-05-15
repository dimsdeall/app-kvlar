import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BottomBar, ChartDonut, DataTableOrder } from "../../Components";
import { getProduk } from "../../Config/redux/action/produkAction";


function HomePage() {
  const { ProdukList } = useSelector((state) => state.produkReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getProduk({
        url: "/produk/chart",
        type: "PRODUK_LIST",
      }),
      dispatch
    );
  }, []);



  return (
    <div className="d-flex flex-column">
      <div
        className="bg-info px-3 pt-2 pb-3 mb-3 shadow-sm"
        style={{
          borderEndStartRadius: 55,
          borderEndEndRadius: 55,
        }}
      >
        {ProdukList.length > 0 ? <ChartDonut data={ProdukList} /> : <></>}
      </div>
      <DataTableOrder />
      <BottomBar />
    </div>
  );
}

export default HomePage;
