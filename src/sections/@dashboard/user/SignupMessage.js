import { Link as RouterLink } from 'react-router-dom'
import { Link, Card, Typography, Grid } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import Iconify from '../../../components/iconify'
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
export default function SignupMessage({setSignupMessageIgnore}) {

  return (
    <Grid container spacing={3} justifyContent='space-around' sx={{mb:3, mt:0}}>
      <Grid item xs={12} md={12}>
        <Card
          sx={{
            py: 3,
            boxShadow: 10,
            textAlign: 'center',
            color: (theme) => theme.palette.primary.dark,
            bgcolor: (theme) => theme.palette.error.lighter,
          }}
          
        >
          <Grid container>
            <Grid item xs={12}>
              <Iconify icon={'mdi:account-alert-outline'} width={48} height={48} />
              <Typography variant="h4">{'Are you a user? 🤔'}</Typography>
              <Typography variant="body2" sx={{ opacity: 0.84 }} style={{marginBottom:'25px'}}>
                {'It seems that you are not a user! Please create your account or login to use all the features.'}
              </Typography>
              <Link component={RouterLink} to='/login'>
                <LoadingButton sx={{mr:1}} size="large" type="submit" variant="contained">
                  Login
                </LoadingButton>
              </Link>
              <Link component={RouterLink} to='/signup'>
                <LoadingButton sx={{mr:1}} size="large" type="submit" variant="text">
                  Signup
                </LoadingButton>
              </Link>
              <LoadingButton onClick={()=>setSignupMessageIgnore(true)} size="large" type="submit" color='error' variant="outlined">
                Ignore
              </LoadingButton>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
