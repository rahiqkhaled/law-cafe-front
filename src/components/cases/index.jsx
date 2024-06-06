import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataCases } from "../../data/mockData";
import Header from "../header/Header";

const Cases = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "caseName",
      headerName: "caseName",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "caseNumber",
      headerName: "caseNumber",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "clientName",
      headerName: "clientName",
      flex: 1,
    },
    {
      field: "lawyerId",
      headerName: "lawyerId",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Cases" subtitle="List of Cases" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataCases} columns={columns} />
      </Box>
    </Box>
  );
};

export default Cases;
