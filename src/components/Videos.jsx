import { Stack, Box } from "@mui/material"

import { VideoCard, ChannalCard } from "./"

const Videos = ({ videos }) => {
  return (
    <div>
      <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannalCard channalDetail={item} />}
          </Box>
        ))}
      </Stack>
    </div>
  )
}

export default Videos
