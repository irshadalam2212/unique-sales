import { Button, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
  },
  {
    field: "customerName",
    headerName: "Customer name",
    width: 200,
  },
  {
    field: "contact",
    headerName: "Contact No.",
    width: 150,
  },
  {
    field: "location",
    headerName: "Location",
    width: 150,
  },
  {
    field: "orders",
    headerName: "Order's",
    width: 150,
  },
  {
    field: "amountSpent",
    headerName: "Amout Spend",
    width: 150,
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => (
      <>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginRight: 8 }}
          onClick={() => console.log("Edit")}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={() => console.log("delte")}
        >
          Delete
        </Button>
      </>
    ),
  },
];

const rows = [
  {
    id: 1,
    customerName: "Jon",
    contact: "xxxxxxxxxx",
    location: "mumbai",
    orders: 201,
    amountSpent: "15000000",
  },
  {
    id: 1,
    customerName: "Jon",
    contact: "xxxxxxxxxx",
    location: "mumbai",
    orders: 201,
    amountSpent: "15000000",
  },
  {
    id: 1,
    customerName: "Jon",
    contact: "xxxxxxxxxx",
    location: "mumbai",
    orders: 201,
    amountSpent: "15000000",
  },
  {
    id: 1,
    customerName: "Jon",
    contact: "xxxxxxxxxx",
    location: "mumbai",
    orders: 201,
    amountSpent: "15000000",
  },
  {
    id: 1,
    customerName: "Jon",
    contact: "xxxxxxxxxx",
    location: "mumbai",
    orders: 201,
    amountSpent: "15000000",
  },
  {
    id: 1,
    customerName: "Jon",
    contact: "xxxxxxxxxx",
    location: "mumbai",
    orders: 201,
    amountSpent: "15000000",
  },
  {
    id: 1,
    customerName: "Jon",
    contact: "xxxxxxxxxx",
    location: "mumbai",
    orders: 201,
    amountSpent: "15000000",
  },
  {
    id: 1,
    customerName: "Jon",
    contact: "xxxxxxxxxx",
    location: "mumbai",
    orders: 201,
    amountSpent: "15000000",
  },
  {
    id: 1,
    customerName: "Jon",
    contact: "xxxxxxxxxx",
    location: "mumbai",
    orders: 201,
    amountSpent: "15000000",
  },
];

const paginationModel = { pmrp: 0, pmrpSize: 5 };

const AddCustomer = () => {
  return (
    <div className="bg-[#9a616d] min-h-screen flex flex-col gap-3 justify-center py-5 md:py-0 px-3">
      <div className="flex items-center justify-between w-full mt-3">
        <h1 className="text-white text-3xl">Customers</h1>
        <button
          type="submit"
          className="p-3 bg-[#312729] hover:text-gray-300 text-white text-xl flex items-center justify-center rounded-full"
        >
          Add Customer
        </button>
      </div>
      <div className="grid place-items-end">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none px-2 py-1 rounded"
        />
      </div>
      {/* DataTable */}
      <div className="my-6 px-3">
        <Paper sx={{ height: 550, width: "100%", backgroundColor: "" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pmrpSizeOptions={[5, 10]}
            // checkboxSelection
            sx={{ border: 0, padding: 3 }}
          />
        </Paper>
      </div>
    </div>
  );
};

export default AddCustomer;
