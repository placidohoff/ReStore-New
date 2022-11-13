import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Toolbar, IconButton, Typography, Switch, List, Badge, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import './Header.css'

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void
}

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' }
]

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' }

]

// const navStyles = {
//     color: 'inherit',
//     '&:hover':{
//         color: 'grey.500'
//     },
//     textDecoration: 'none'
// }

export default function Header({ darkMode, handleThemeChange }: Props) {
    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            <Toolbar>
                <Typography variant="h6" component={NavLink} to="/" style={{color: 'inherit', textDecoration:'none'}}>RE-STORE</Typography>
                <Switch checked={darkMode} onChange={handleThemeChange} />
                <Box className="nav-links" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width:'80%'}}>
                    <List>
                        {midLinks.map(({ title, path }) => (
                            <NavLink key={Math.random()} to={path} style={{ color: 'inherit', padding: '5px', textDecoration: 'none'}}>
                                {title.toUpperCase()}

                            </NavLink>
                        ))}
                    </List>
                    
                    <List>
                    <IconButton sx={{color: 'inherit', mr:3}} size='large'>
                        <Badge badgeContent={4} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                        {rightLinks.map(({ title, path }) => (
                            <NavLink className='nav-link' key={Math.random()} to={path} style={{ color: 'inherit', padding: '5px', textDecoration:'none' }}>
                                {title.toUpperCase()}

                            </NavLink>
                        ))}
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
