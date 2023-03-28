import { useState } from "react";
import { Box, Checkbox, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Typography, Button, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import { ExpandMore, Edit, DeleteOutline, LocalPrintshopOutlined } from "@mui/icons-material";
import { ITableItem } from "@/types/ITableTypes";
import tableData from "../data/tableData.json";

const TableComponent = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Typography fontSize="30px" fontWeight="600" marginBottom="20px" component="h1">
        Currently Selling Listings
      </Typography>
      <TableContainer component={Paper}>
        <Table
          sx={{
            minWidth: "1100px",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.rows.map((row: ITableItem) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Box display="flex" alignItems="center" component="div">
                    <Checkbox />
                    <Box width="100px" margin="0 20px" borderRadius="4px" component="img" alt={row.title} src={row.image} />
                    {row.title}
                  </Box>
                </TableCell>
                <TableCell align="left" width={150}>
                  ${row.price}
                </TableCell>
                <TableCell align="left" width={150}>
                  <Box component="div">
                    <Typography fontSize="0.875rem" color="#8f9090">
                      {row.closes}
                      <br />
                      {row.time}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="left" width={200}>
                  <Button
                    sx={{
                      color: "black",
                      fontSize: "0.875rem",
                      textTransform: "none",
                    }}
                    id={`actions-button-${row.id}`}
                    aria-controls={open ? `actions-menu-${row.id}` : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    Manage Listing
                    <ExpandMore />
                  </Button>

                  <Menu
                    id={`actions-menu-${row.id}`}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": `actions-button-${row.id}`,
                    }}
                  >
                    <MenuItem
                      onClick={() => {
                        alert(`Edit Clicked`);
                      }}
                    >
                      <ListItemIcon>
                        <Edit fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Edit Listing</ListItemText>
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        alert(`Delete Clicked`);
                      }}
                    >
                      <ListItemIcon>
                        <DeleteOutline fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Delete Listing</ListItemText>
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        alert(`Withdraw Clicked`);
                      }}
                    >
                      <ListItemIcon>
                        <LocalPrintshopOutlined fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Withdraw Listing</ListItemText>
                    </MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default TableComponent;
