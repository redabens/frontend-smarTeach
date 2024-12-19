import Box from '@mui/material/Box';

export default function ChatBox({answer}) {
  return (
    <Box component="section" sx={{ p: 2, border: '1px solid grey', borderRadius: '5px', width: '100%', height: '100%', overflowY: 'auto' }}>
        {answer}
    </Box>
  );
}