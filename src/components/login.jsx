import { Box, Button, Grid, Typography } from "@mui/material";
import React,{useState, useRef} from "react";
import palette from "./pallete";
import ConnectWalletButton from './ConnectButton/ConnectWalletBtn';
import { loadStdlib } from '@reach-sh/stdlib'
import MyAlgoConnect from '@reach-sh/stdlib/ALGO_MyAlgoConnect';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

const reach = loadStdlib("ALGO")

reach.setWalletFallback(reach.walletFallback({providerEnv: 'TestNet', MyAlgoConnect })); 
const Login = (props) => {
  const account = useRef()
  const balance = useRef()

  const [loggedIn, setLoggedIn] = useState(false);
  const [accountBal, setAccountBal] = useState(0);
  const [accountAddress, setAccountAddress] = useState('');
  const connectWallet = async () =>{
      try{
        await getAccount();
        await getBalance();
        props.loggedIn();
      }catch(err){
          console.log(err)
      }
  }


  // redirectHome=()=>{

  // }
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
  let buttonColor = palette.purple;
  return (
    <div>
      <Box
        sx={{
          backgroundColor: palette.background,
          height: "85vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "10px",
            height: "60vh",
          }}
        >
          <Grid container spacing={2.5}>
            <Grid item xs={12}>
              <Typography variant="h5">OWNTRAD</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Hi, Welcome Back</Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography
                sx={{
                  color: buttonColor,
                  cursor: "pointer",
                }}
                variant="p"
              >
                SIGN UP
              </Typography>
              <Grid item xs={12} sx={{ marginTop: 2 }}>
                <Typography variant="caption">OR</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
            <ConnectWalletButton accountAddress={accountAddress} connectWallet = {connectWallet} accountBal = {accountBal}/>
            {/* <Button
                variant="contained"
                sx={{ backgroundColor: buttonColor, color: "white" }}
              >
                Click here to Login
              </Button> 
              </ConnectWalletButton> */}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
