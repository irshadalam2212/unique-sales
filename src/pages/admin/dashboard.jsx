import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { BsBank, BsBook, BsCurrencyDollar, BsPeople } from "react-icons/bs";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { BarChart } from "@mui/x-charts";
import Navbar from "../../components/Navbar";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "ProductsName",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "category",
    headerName: "Category",
    width: 150,
    editable: true,
  },
  {
    field: "units",
    headerName: "Unit Sold",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "revenue",
    headerName: "revenue",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.units} * ${row.price}`,
  },
];

const rows = [
  { id: 1, category: "Snow", ProductsName: "Jon", units: 14, price: 99 },
  {
    id: 2,
    category: "Lannister",
    ProductsName: "Cersei",
    units: 31,
    price: 99,
  },
  { id: 3, category: "Lannister", ProductsName: "Jaime", units: 31, price: 99 },
  { id: 4, category: "Stark", ProductsName: "Arya", units: 11, price: 99 },
  {
    id: 5,
    category: "Targaryen",
    ProductsName: "Daenerys",
    units: null,
    price: 99,
  },
  {
    id: 6,
    category: "Melisandre",
    ProductsName: "null",
    units: 150,
    price: 99,
  },
  {
    id: 7,
    category: "Clifford",
    ProductsName: "Ferrara",
    units: 44,
    price: 99,
  },
  { id: 8, category: "Frances", ProductsName: "Rossini", units: 36, price: 99 },
  { id: 9, category: "Roxie", ProductsName: "Harvey", units: 65, price: 99 },
];
const shopcolumns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "shopName",
    headerName: "Shop",
    width: 150,
    editable: true,
  },
  {
    field: "category",
    headerName: "Category",
    width: 150,
    editable: true,
  },
  {
    field: "totalSales",
    headerName: "Total Sales",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "shopstatus",
    headerName: "Shop Status",
    type: "string",
    width: 110,
    editable: true,
  },
  // {
  //   field: "revenue",
  //   headerName: "revenue",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (value, row) => `${row.units} * ${row.price}`,
  // },
];

const shoprows = [
  {
    id: 1,
    category: "Snow",
    shopName: "Jon",
    totalSales: 14,
    shopstatus: "open",
  },
  {
    id: 2,
    category: "Lannister",
    shopName: "Cersei",
    totalSales: 31,
    totalSales: 99,
    shopstatus: "open",
  },
  {
    id: 3,
    category: "Lannister",
    shopName: "Jaime",
    totalSales: 31,
    shopstatus: "open",
  },
  { id: 4, category: "Stark", shopName: "Arya", totalSales: 11, price: 99 },
  {
    id: 5,
    category: "Targaryen",
    shopName: "Daenerys",
    totalSales: 40,
    shopstatus: "open",
  },
  {
    id: 6,
    category: "Melisandre",
    shopName: "null",
    totalSales: 150,
    shopstatus: "open",
  },
  {
    id: 7,
    category: "Clifford",
    shopName: "Ferrara",
    totalSales: 44,
    shopstatus: "open",
  },
  {
    id: 8,
    category: "Frances",
    shopName: "Rossini",
    totalSales: 36,
    shopstatus: "open",
  },
  { id: 9, category: "Roxie", shopName: "Harvey", totalSales: 65, price: 99 },
];

const dataset = [
  { month: "Jan", sales: 150 },
  { month: "Feb", sales: 200 },
  { month: "Mar", sales: 250 },
  { month: "Apr", sales: 180 },
  { month: "May", sales: 220 },
  { month: "Jun", sales: 270 },
  { month: "Jul", sales: 300 },
  { month: "Aug", sales: 320 },
  { month: "Sep", sales: 310 },
  { month: "Oct", sales: 290 },
  { month: "Nov", sales: 330 },
  { month: "Dec", sales: 350 },
];

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col w-full gap-3 bg-[#9a616d] px-5 py-8">
        <div className="flex gap-2">
          <div className="flex flex-col bg-white rounded-2xl w-3/12 px-3 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#22c55e] p-2 rounded-md bg-opacity-65">
                  <BsBank size={24} fill="white" />
                </div>
                <div className="">
                  <p className="text-[12px] text-gray-400">Total Sales</p>
                  <h3 className="text-xl text-gray-700 font-bold">36,000</h3>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaArrowTrendUp fill="#22c55e" />
                <span className="text-[12px] text-gray-500">1.56%</span>
              </div>
            </div>
            <div>
              <LineChart
                xAxis={[{ data: [0, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                    area: true,
                    color: "#22c55e",
                    // fill: "#cbf1d9",
                  },
                ]}
                width={340}
                height={200}
              />
            </div>
          </div>
          <div className="flex flex-col bg-white rounded-2xl w-3/12 px-3 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#FF5200] p-2 rounded-md bg-opacity-65">
                  <BsCurrencyDollar size={24} fill="white" />
                </div>
                <div className="">
                  <p className="text-[12px] text-gray-400">Total Income</p>
                  <h3 className="text-xl text-gray-700 font-bold">36,000</h3>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaArrowTrendDown fill="#FF5200" />
                <span className="text-[12px] text-gray-500">1.56%</span>
              </div>
            </div>
            <div>
              <LineChart
                xAxis={[{ data: [0, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                    area: true,
                    color: "#FF5200",
                    // fill: "white",
                  },
                ]}
                width={340}
                height={200}
              />
            </div>
          </div>
          <div className="flex flex-col bg-white rounded-2xl w-3/12 px-3 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#CBD5E1] p-2 rounded-md bg-opacity-65">
                  <BsBook size={24} fill="white" />
                </div>
                <div className="">
                  <p className="text-[12px] text-gray-400">Order's Paid</p>
                  <h3 className="text-xl text-gray-700 font-bold">36,000</h3>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaArrowTrendUp fill="#CBD5E1" />
                <span className="text-[12px] text-gray-500">1.56%</span>
              </div>
            </div>
            <div>
              <LineChart
                xAxis={[{ data: [0, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                    area: true,
                    color: "#CBD5E1",
                  },
                ]}
                width={340}
                height={200}
              />
            </div>
          </div>
          <div className="flex flex-col bg-white rounded-2xl w-3/12 px-3 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#02d5d1] p-2 rounded-md bg-opacity-65">
                  <BsPeople size={24} fill="white" />
                </div>
                <div className="">
                  <p className="text-[12px] text-gray-400">Order's Due</p>
                  <h3 className="text-xl text-gray-700 font-bold">36,000</h3>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaArrowTrendUp fill="#02d5d1" />
                <span className="text-[12px] text-gray-500">1.56%</span>
              </div>
            </div>
            <div>
              <LineChart
                xAxis={[{ data: [0, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                    area: true,
                  },
                ]}
                width={340}
                height={200}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col bg-white rounded-2xl w-4/12 px-3 py-2">
            <p className="text-2xl font-semibold text-gray-700">
              Recent Orders
            </p>
            <LineChart
              xAxis={[{ data: [0, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                  area: true,
                },
              ]}
              height={300}
              width={450}
              margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
              grid={{ vertical: false, horizontal: true }}
            />
          </div>
          <div className="flex flex-col bg-white rounded-2xl w-4/12 px-3 py-2">
            <p className="text-2xl font-semibold text-gray-700">Top Products</p>
            <Box sx={{ height: 300, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      punitsSize: 5,
                    },
                  },
                }}
                punitsSizeOptions={[5]}
                // checkboxSelection
                // disableRowSelectionOnClick
              />
            </Box>
          </div>
          <div className="flex flex-col bg-white rounded-2xl w-4/12 px-3 py-2">
            <p className="text-2xl font-semibold text-gray-700">
              Best Shop Sellers
            </p>
            <Box sx={{ height: 300, width: "100%" }}>
              <DataGrid
                rows={shoprows}
                columns={shopcolumns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      punitsSize: 5,
                    },
                  },
                }}
                punitsSizeOptions={[5]}
                // checkboxSelection
                // disableRowSelectionOnClick
              />
            </Box>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col bg-white rounded-2xl w-8/12 px-3 py-2">
            <p className="text-2xl font-semibold text-gray-700">
              Products Overview
            </p>
            <Box sx={{ height: 300, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      punitsSize: 5,
                    },
                  },
                }}
                punitsSizeOptions={[5]}
                // checkboxSelection
                // disableRowSelectionOnClick
              />
            </Box>
          </div>
          <div className="flex flex-col bg-white rounded-2xl w-4/12 px-3 py-2">
            <p className="text-2xl font-semibold text-gray-700">Orders</p>
            <Box sx={{ height: 300, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      punitsSize: 5,
                    },
                  },
                }}
                punitsSizeOptions={[5]}
                // checkboxSelection
                // disableRowSelectionOnClick
              />
            </Box>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col bg-white rounded-2xl w-6/12 px-3 py-2">
            <p className="text-2xl font-semibold text-gray-700">Earnings</p>
            <div>
              <BarChart
                dataset={dataset}
                xAxis={[
                  {
                    scaleType: "band",
                    dataKey: "month",
                    // tickPlacement,
                    // tickLabelPlacement,
                  },
                ]}
                series={[{ dataKey: "sales", name: "Sales" }]}
                // {...chartSetting}
                // width={500}
                height={300}
              />
            </div>
          </div>
          <div className="flex flex-col bg-white rounded-2xl w-6/12 px-3 py-2">
            <p className="text-2xl font-semibold text-gray-700">Employee's</p>
            <Box sx={{ height: 300, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      punitsSize: 5,
                    },
                  },
                }}
                punitsSizeOptions={[5]}
                // checkboxSelection
                // disableRowSelectionOnClick
              />
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
