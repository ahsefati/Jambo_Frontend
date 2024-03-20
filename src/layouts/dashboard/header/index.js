import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar } from '@mui/material';
// utils
import { bgBlur } from '../../../utils/cssStyles';

//
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';

// ----------------------------------------------------------------------
const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header({ onOpenNav }) {
  
  let user;
  if (localStorage.getItem('profile')){
    user = JSON.parse(localStorage.getItem('profile'))
    // user.result.avatar = `/assets/images/avatars/${user?.result?.avatar}` || "/assets/images/avatars/avatar_13.jpg"
  }else{
    user = false
  }

  return (
    <StyledRoot>
      <StyledToolbar>
        <Box sx={{display:{xs:'none', lg:'block'}}}>
          <h3 style={{color:'black'}}>Live weather for popular destinations will be here...!</h3>
        </Box>
        <Box sx={{display:{xs:'block', lg:'none'}}}>
          <h3 style={{color:'black'}}>Jambo</h3>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <LanguagePopover />
          <AccountPopover />
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
