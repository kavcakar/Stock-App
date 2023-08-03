import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

const MenuListItem = () => {
  return (
    <div>
    <List>
    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
      <ListItem key={text} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
    </div>
  )
}

export default MenuListItem