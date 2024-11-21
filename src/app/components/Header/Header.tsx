'use client'

import React, {useState} from 'react';
import {
    alpha,
    AppBar,
    Box,
    Divider,
    Drawer,
    IconButton, InputBase,
    ListItem,
    ListItemButton, ListItemText, styled,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {List} from "reactstrap";
import NavLink from "@/app/components/NavLink/NavLink";

import  css from './Header.module.css';

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const drawerWidth = 240;
const navItems = [
    {label: 'MOVIES', path: '/movies'},
    {label: 'GENRES', path: '/genres'},
    {label: 'SEARCH MOVIE', path: '/searchMovie'},
];

const Header = () => {
    // const {theme,  setTheme} = useState();
    // const dispatch = useAppDispatch();

    const [mobileOpen, setMobileOpen] = useState(false);

    // useEffect(() => {
    //     localStorage.setItem('theme', theme);
    // }, [theme]);

    // const handleChange = () => {
    //     if (theme === 'light'){
    //         dispatch(setTheme(theme));
    //     }else if(theme === 'dark'){
    //         dispatch(setTheme(theme));
    //     }else
    //     dispatch( theme === 'light' ? 'dark' : 'light';)
    // }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
        console.log('Drawer state:', !mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Typography variant="h6" sx={{my: 2}}>
                MUI
            </Typography>
            <Divider/>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton sx={{textAlign: 'center'}} component={NavLink} path={item.path}>
                            <ListItemText primary={item.label}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    // const container = () => document.body;

    return (
        <div className={css.main}>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{mr: 2}}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                        >
                            MUI
                        </Typography>
                        {/*<Box sx={{display: {xs: 'none', sm: 'block'}}}>*/}
                        {/*    {navItems.map((item) => (*/}
                        {/*        <Button key={item.label} color="inherit" component={NavLink} to={item.path}>*/}
                        {/*            {item.label}*/}
                        {/*        </Button>*/}
                        {/*    ))}*/}
                        {/*</Box>*/}
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon/>
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{'aria-label': 'search'}}
                            />
                        </Search>
                    </Toolbar>
                </AppBar>
                <nav>
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                            disableScrollLock: true
                        }}
                        sx={{
                            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>
            </Box>

            {/*<div className={css.Switch}>*/}
            {/*    <Switch*/}
            {/*        checked={theme === 'dark'}*/}
            {/*        onChange={handleChange}*/}
            {/*        inputProps={{'aria-label': 'controlled'}}*/}
            {/*    />*/}
            {/*    /!*<UserInfo/>*!/*/}
            {/*</div>*/}
        </div>
    );
};

export default Header;