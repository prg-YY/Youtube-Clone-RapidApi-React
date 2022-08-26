import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Paper, IconButton } from "@mui/material"
import { SavedSearch } from "@mui/icons-material"

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        value=""
        className="search-bar"
        placeholder="Search..."
        onChange={() => {}}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "#000" }}>
        <SavedSearch />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
