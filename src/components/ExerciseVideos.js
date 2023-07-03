import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
const ExerciseVideos = ({exerciseVideos,name}) => {
    if (!exerciseVideos.length) return 'loading..';
  return (
    <Box sx={{ mt: {lg: '200px', xs: '20px'}}} p='20px'>

      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">

          Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>

      <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center'
       sx={{
         flexDirection:{ lg: 'row' },
         gap:{ lg: '110px', xs: '0' }
       }}>
        {exerciseVideos?.slice(0,3).map((item,i)=>(
            <a 
             key={i}
             className='exercise-video'
             href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
             target="_blank"
             rel="noreferrer"
            >
             <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />  
             <Box>
                <Typography variant='h5' color='#000'>
                    {item.video.title}
                </Typography>
                <Typography variant='h6' color='#FF2625'>
                    {item.video.channelName}
                </Typography>
             </Box>
           </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos