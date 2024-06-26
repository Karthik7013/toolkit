import { AppBar, Avatar, Badge, Box, Divider, Icon, IconButton, List, ListItem, ListItemAvatar, ListItemText, Menu, MenuItem, Stack, Toolbar, Typography } from "@mui/material"
import ClassRoundedIcon from '@mui/icons-material/ClassRounded';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar>
            <Toolbar sx={{ justifyContent: 'space-between' }} >
                <Stack direction='row' alignItems='center' gap={1}><LocalMallIcon /><Typography variant="h6">CART + REDUX TOOLKIT</Typography></Stack>
                <Box component={Stack} flexDirection="row" gap={2} alignItems={'center'}>
                    <IconButton
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <Badge badgeContent={2} color="primary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <Box sx={{ width: 290 }}>
                            <Box px={2} pb={1}>
                                <Typography variant="h6">Cart (Total 9 Items)</Typography>
                            </Box>
                            <Divider />
                            <List sx={{ maxHeight: 280, overflowY: 'scroll' }}>
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((item, _) => {
                                    return <ListItem key={_} secondaryAction={
                                        <IconButton size="small">
                                            <DeleteIcon color="error" />
                                        </IconButton>

                                    }>
                                        <ListItemAvatar>
                                            <Avatar variant="rounded"></Avatar >
                                        </ListItemAvatar>
                                        <ListItemText primary={<Typography variant="body2" noWrap>Redmi Note 7 pro</Typography>} secondary="Price : $ 123" />


                                    </ListItem>

                                })}
                            </List>
                        </Box>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar >
    )
}

export default Header