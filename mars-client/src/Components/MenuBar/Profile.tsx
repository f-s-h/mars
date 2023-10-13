import { useOidc } from '@axa-fr/react-oidc'
import { Box } from '@mui/material';

export const Profile = () => {
    const {isAuthenticated} = useOidc();
  return (
    <>
        <Box
            sx={{
                position: "fixed",
                bottom: "0%",    
            }}
        >
            {isAuthenticated?
            <>Login</>
            :
            <>Logout</>
            }
        </Box>
    </>
  )
}
