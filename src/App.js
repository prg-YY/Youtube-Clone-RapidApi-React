import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"

import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SeacrhFeed,
} from "./components"

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channal/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SeacrhFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
)

export default App
