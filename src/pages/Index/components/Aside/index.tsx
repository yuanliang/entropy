import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import Icon from "@material-ui/core/Icon";

import "./index.css";

type Props = {
  className?: string;
};

const Aside: React.FC = props => {
  return (
    <div className="Aside">
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <Typography variant="inherit">项目</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PriorityHighIcon />
          </ListItemIcon>
          <Typography variant="inherit">模版</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            区块
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            组件
          </Typography>
        </MenuItem>
        <MenuItem>
          <Icon className="work" color="primary">
            设置
          </Icon>
        </MenuItem>
      </MenuList>
    </div>
  );
};

export default Aside;
