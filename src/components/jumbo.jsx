import React,{useState, useRef} from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import ConnectWalletButton from './ConnectButton/ConnectWalletBtn';
import { loadStdlib } from '@reach-sh/stdlib'
import MyAlgoConnect from '@reach-sh/stdlib/ALGO_MyAlgoConnect';
const reach = loadStdlib("ALGO")

reach.setWalletFallback(reach.walletFallback({providerEnv: 'TestNet', MyAlgoConnect })); 
const Jumbo = () => {
  const account = useRef()
  const balance = useRef()

  const [accountBal, setAccountBal] = useState(0);
  const [accountAddress, setAccountAddress] = useState('');
  const connectWallet = async () =>{
      try{
          await getAccount()
          await getBalance()
              
      }catch(err){
          console.log(err)
      }
  }

  const getAccount = async () => {
      try{
         account.current = await reach.getDefaultAccount()
          setAccountAddress(account.current.networkAccount.addr)
          console.log("Account :" + account.current.networkAccount.addr)
      }catch(err){
          console.log(err)
      }
  }

  const getBalance = async () => {
      try{
            let rawBalance = await reach.balanceOf(account.current)
              balance.current = reach.formatCurrency(rawBalance, 4)
              setAccountBal(balance.current)
          console.log("Balance :" + balance.current)
      }catch(err){
          console.log(err)
      }
  }
  return (
    <div className="jumbo">
      <Grid container>
        <Grid item xs="12">
          <Typography variant="h4" fontWeight="bold">
            OWNTRAD
          </Typography>
        </Grid>
        <Grid item xs="12">
          <Typography variant="h5">
            Buy and Sell your Product Wherever, Whenever!
          </Typography>
        </Grid>
        <Grid item xs="12">
          <a href="http://localhost:3000/">
            <button className="jumboButton2">PROCEED</button>
          </a>
        </Grid>
        <Grid item xs="12">
        <ConnectWalletButton accountAddress={accountAddress} connectWallet = {connectWallet} accountBal = {accountBal}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Jumbo;
