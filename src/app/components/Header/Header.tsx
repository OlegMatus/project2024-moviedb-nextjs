'use client'

import React, {useState} from 'react';
import NavLink from "@/app/components/NavLink/NavLink";
import {
    alpha,
    AppBar,
    Box,
    Divider,
    Drawer,
    IconButton,
    InputBase,
    ListItem,
    ListItemButton,
    ListItemText,
    styled,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {List} from "reactstrap";


import css from './Header.module.css';
import {getGenres} from "@/app/actions/getGenres";
import {IGenre} from "@/app/models/IGenre";
import {useRouter, useSearchParams} from "next/navigation";

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
    {label: 'HOME', path: '/'},
    {label: 'MOVIES', path: '/movies'},
];
const navElements = [
    {label: 'POPULAR', path: '/movies/popular'},
    {label: 'NOW PLAYING', path: '/movies/now_playing'},
    {label: 'TOP RATED', path: '/movies/top_rated'},
    {label: 'UPCOMING', path: '/movies//upcoming'},
];

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [genres, setGenres] = useState<IGenre[]>([]);
    const [genresLoaded, setGenresLoaded] = useState(false);

    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get('query') || '';

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;

        if (query.trim()) {
            router.push(`/searchMovie?query=${query}&page=1`);
        } else {
            router.push(`/searchMovie`);
        }
    };
    const handleDrawerToggle = (forceClose = true, resetGenres = false) => {
        if (forceClose) {
            setMobileOpen(!mobileOpen);
        }

        if (!resetGenres) {
            setGenres([]);
            setGenresLoaded(false);
        }
    };

    const handleGenresClick = async () => {
        if (!genresLoaded) {
            try {
                const fetchedGenres = await getGenres();
                setGenres(fetchedGenres);
                setGenresLoaded(true);
            } catch (e) {
                console.error('Fetching genres failed', e);
            }
        }
    };

    const drawer = (
        <Box sx={{textAlign: 'center'}}>
            <Typography variant="h6" sx={{my: 2}} className={css.gradientText}>
                MENU
            </Typography>
            <Divider/>
            <List>
                <List>
                    {navItems.map((item) => (
                        <ListItem key={item.label} disablePadding>
                            <ListItemButton onClick={() => handleDrawerToggle(false, false)} sx={{textAlign: 'center'}}
                                            component={NavLink}
                                            path={item.path}>
                                <ListItemText primary={item.label}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
                <ListItem disablePadding>
                    <ListItemButton onClick={handleGenresClick}>
                        <ListItemText primary="GENRES" className={css.gradientText}/>
                    </ListItemButton>
                </ListItem>
                {genres.map((genre) => (
                    <ListItem key={genre.id} disablePadding>
                        <ListItemButton onClick={() => handleDrawerToggle(false, false)} component={NavLink}
                                        path={`/genres/${genre.id}`}>
                            <ListItemText primary={genre.name}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div className={css.HeaderBox}>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static" color="transparent" >
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="secondary"
                            aria-label="open drawer"
                            sx={{mr: 2}}
                            onClick={() => handleDrawerToggle(true, true)}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography
                            className={css.gradientText}
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                            fontSize={35}
                        >
                            Lanex
                        </Typography>
                        <Box sx={{display: {xs: 'none', sm: 'block'}}} className={css.btn}>
                            {navElements.map((item) => (
                                <ListItem key={item.label} disablePadding>
                                    <ListItemButton sx={{textAlign: 'center'}} component={NavLink} path={item.path}>
                                        <ListItemText primary={item.label}/>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </Box>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon/>
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{'aria-label': 'search'}}
                                onChange={handleInputChange}
                                value={query}
                            />
                        </Search>
                    </Toolbar>
                </AppBar>
                <nav>
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={() => handleDrawerToggle(true, false)}
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
        </div>
    );
};

export default Header;