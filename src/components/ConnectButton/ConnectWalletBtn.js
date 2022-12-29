import React, {useState, useRef} from 'react';
import { loadStdlib } from '@reach-sh/stdlib';
import {ALGO_MyAlgoConnect as MyAlgoConnect} from '@reach-sh/stdlib';
import ConnectButton from '.';
const reach = loadStdlib("ALGO");
reach.setWalletFallback(reach.walletFallback({providerEnv: 'TestNet', MyAlgoConnect })); 

const ConnectWalletButton = ({connectWallet,accountAddress, accountBal }) => {
    return(
        <div>
            <ConnectButton connectWallet = {connectWallet}/>
        </div>
    )
}

export default ConnectWalletButton