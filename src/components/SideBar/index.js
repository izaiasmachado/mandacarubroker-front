import * as S from "./styles";
import Balance from "../BalanceGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import {
    ContainerProfile,
    ContainerUser,
    InformationUser,
    Name,
    UserName,  
  } from "./styles";

const SideBar = () => (
    <S.SideBar> 
             <ContainerProfile>
          <ContainerUser>
            <S.Icon width={20} height={18}>
              <FontAwesomeIcon icon={faUser} />
            </S.Icon>
          </ContainerUser>
            <InformationUser>
              <Name>Iris Costa</Name>
              <UserName>coxtairis</UserName>
            </InformationUser>
        </ContainerProfile>
    </S.SideBar>
);

export default SideBar;
