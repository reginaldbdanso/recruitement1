import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Jobsearch
                </Typography>
                <Box>
                    <Button color="inherit" component={Link} to="/">
                    Home
                    </Button>
                    <Button color='inherit' component={Link} to="/jobs">
                        Jobs
                    </Button>
                    <Button color='inherit' component={Link} to="/blog">
                        Blog
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;