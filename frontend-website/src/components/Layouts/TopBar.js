import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { SiInstacart } from "react-icons/si";
import Link from "next/link";

function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "black" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link href="/">
            <Box
              sx={{
                display: "flex",
                cursor: "pointer",
                caretColor: "black",
                color: "#FF2E63",
                ":hover": { color: "#08D9D6" },
              }}
            >
              <SiInstacart
                style={{ margin: "auto", marginRight: 20 }}
                size={45}
              />
              <Typography variant="h2">M-Kart</Typography>
            </Box>
          </Link>
          <Typography>hello</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopBar;
