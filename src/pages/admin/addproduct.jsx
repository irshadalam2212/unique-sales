import * as React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { BsPlus } from "react-icons/bs";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
  },
  {
    field: "image",
    headerName: "Product",
    width: 150,
    type: "file",
  },
  {
    field: "productName",
    headerName: "Product name",
    width: 200,
  },
  {
    field: "category",
    headerName: "Category",
    width: 150,
  },
  {
    field: "mrp",
    headerName: "MRP",
    type: "number",
    width: 150,
  },
  {
    field: "sellingPrice",
    headerName: "Selling Price",
    type: "number",
    width: 150,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    type: "number",
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
    image: "",
    category: "Snow",
    productName: "Jon",
    mrp: 35,
    sellingPrice: 20,
    quantity: 201,
    // action: <button>Delete</button>,
  },
  {
    id: 2,
    image: "",
    category: "Lannister",
    productName: "Cersei",
    mrp: 42,
    sellingPrice: 20,
    quantity: 201,
  },
  {
    id: 3,
    image: "",
    category: "Lannister",
    productName: "Jaime",
    mrp: 45,
    sellingPrice: 20,
    quantity: 201,
  },
  {
    id: 4,
    image: "",
    category: "Stark",
    productName: "Arya",
    mrp: 16,
    sellingPrice: 20,
    quantity: 201,
  },
  {
    id: 5,
    image: "",
    category: "Targaryen",
    productName: "Daenerys",
    mrp: 99,
    sellingPrice: 20,
    quantity: 201,
  },
  {
    id: 6,
    image: "",
    category: "Melisandre",
    productName: "null",
    mrp: 150,
    sellingPrice: 20,
    quantity: 201,
  },
  {
    id: 7,
    image: "",
    category: "Clifford",
    productName: "Ferrara",
    mrp: 44,
    sellingPrice: 20,
    quantity: 201,
  },
  {
    id: 8,
    image: "",
    category: "Frances",
    productName: "Rossini",
    mrp: 36,
    sellingPrice: 20,
    quantity: 201,
  },
  {
    id: 9,
    image: "",
    category: "Roxie",
    productName: "Harvey",
    mrp: 65,
    sellingPrice: 20,
    quantity: 201,
  },
];

const paginationModel = { pmrp: 0, pmrpSize: 5 };

export default function AddProducts() {
  const [formData, setFormData] = useState({
    productName: "",
    mrp: "",
    price: "",
    category: "",
    quantity: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // You can add form submission logic here
  };
  return (
    <div className="mx-3 mt-6 rounded-sm bg-[#9a616d]">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between px-3 py-2"
      >
        <input
          type="file"
          className="border border-gray-300 p-3 rounded-md bg-transparent w-2/12 text-gray-300 outline-none"
        />
        <input
          type="text"
          id="productName"
          value={formData.productName}
          onChange={handleInputChange}
          placeholder="Product Name"
          className="border border-gray-300 p-3 rounded-md bg-transparent text-gray-300 outline-none"
        />
        <input
          type="number"
          id="mrp"
          value={formData.mrp}
          onChange={handleInputChange}
          placeholder="MRP"
          className="border border-gray-300 p-3 rounded-md bg-transparent text-gray-300 outline-none"
        />
        <input
          type="number"
          id="price"
          value={formData.price}
          onChange={handleInputChange}
          placeholder="Selling Price"
          className="border border-gray-300 p-3 rounded-md bg-transparent text-gray-300 outline-none"
        />
        <input
          type="text"
          id="category"
          value={formData.category}
          onChange={handleInputChange}
          placeholder="Category"
          className="border border-gray-300 p-3 rounded-md bg-transparent text-gray-300 outline-none"
        />
        <input
          type="number"
          id="quantity"
          value={formData.quantity}
          onChange={handleInputChange}
          placeholder="Quantity"
          className="border border-gray-300 p-3 rounded-md bg-transparent text-gray-300 outline-none"
        />
        <button
          type="submit"
          className="p-3 bg-[#312729] hover:text-gray-300 text-white text-xl flex items-center justify-center rounded-full"
        >
          <BsPlus />
        </button>
      </form>

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
}
