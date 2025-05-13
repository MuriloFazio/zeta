"use client";

import {
  Avatar,
  Popover,
  Divider,
  IconButton,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import { Settings, Logout } from "@mui/icons-material";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import {
  UserInfoContainer,
  UserName,
  UserEmail,
  InfoWrapper,
  AvatarInfoWrapper,
  UserMenuContainer,
} from "./styles";
import { useRouter } from "next/navigation";

export const UserMenu = () => {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const IsOpen = Boolean(anchorEl);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!session) {
    return null;
  }

  const { user } = session;

  return (
    <UserMenuContainer>
      <IconButton onClick={handleClick} size="small">
        <Avatar alt={user?.name || ""} src={user?.image || ""} />
      </IconButton>
      <Popover
        open={IsOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#333",
            color: "#fff",
            borderRadius: "4px",
          },
        }}
      >
        <UserInfoContainer>
          <AvatarInfoWrapper>
            <Avatar src={user?.image || ""} />
            <InfoWrapper>
              <UserName>{user?.name}</UserName>
              <UserEmail>{user?.email}</UserEmail>
            </InfoWrapper>
          </AvatarInfoWrapper>
        </UserInfoContainer>

        <Divider />

        <MenuItem onClick={() => router.push("/settings")}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Configurações
        </MenuItem>

        <Divider />

        <MenuItem onClick={() => signOut({ callbackUrl: "/" })}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Sair
        </MenuItem>
      </Popover>
    </UserMenuContainer>
  );
};
