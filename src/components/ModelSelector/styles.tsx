import styled from "styled-components";
import { Select, MenuItem } from "@mui/material";

export const StyledSelect = styled(Select)`
  width: 120px;
  height: 40px;
  background-color: #333;
  color: #fff !important;
  border-radius: 8px;
  
  /* Estilizar a borda padrão */
  .MuiOutlinedInput-notchedOutline {
    border-color: #555;
  }
  
`;

export const StyledMenuItem = styled(MenuItem)`
  background-color: #333 !important;
  
  &:hover {
    background-color: #444 !important;
  }
  
  &.Mui-selected {
    background-color: #555 !important;
  }
  
  &.Mui-selected:hover {
    background-color: #555 !important;
  }
  width: 120px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  gap: 8px;
  width: 100%;
  font-size: 14px;
  
  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`;