import { Stack,Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
  
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src="https://scontent.fblr11-1.fna.fbcdn.net/v/t39.30808-6/289009125_3142928582639719_838304156814769403_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=acSAuGi_J_8AX_xXx0P&_nc_ht=scontent.fblr11-1.fna&oh=00_AT-n1u8TIEMl19AxtL4HvJ7kjEeyqrsRcNAqfbbyyL-mUA&oe=63371C9C" style={{borderRadius:"50%"}} alt="logo" height={45} />
      <Typography style={{color:"white",marginLeft:"5px"}}>VUS-Tube</Typography>
    </Link>
    
    <SearchBar />
  </Stack>
);

export default Navbar;
