import { faWallet, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as S from "./styles";

const Balance = () => (
    <S.Balance>
        <S.BalanceLeftContent>
            <S.Icon width={21} height={18}>
                <FontAwesomeIcon icon={faWallet}/>
            </S.Icon>
        </S.BalanceLeftContent>
        <S.BalanceRightcontent>
            <div>
                <h3>Saldo</h3>
                <h2>R$ 0,00</h2>
            </div>
            <S.Extrato>
            <S.Icon width={14} height={18}>
                <FontAwesomeIcon icon={faEye}/>
            </S.Icon>
            <button>Extrato</button>
            </S.Extrato>
        </S.BalanceRightcontent>
    </S.Balance>
);

export default Balance;
