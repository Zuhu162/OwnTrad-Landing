import { Button } from "@mui/material"
import palette from "../pallete"

const ConnectButton = ({connectWallet}) => {
    return(
        <Button sx={{backgroundColor: palette.purple, color: "white"}} onClick ={connectWallet}>
           CONNECT MYALGO WALLET
        </Button>
    )
}

export default ConnectButton