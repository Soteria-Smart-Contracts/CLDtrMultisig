let account;
const TreasuryABI = window.Treasury;
const SupplyABI = window.Supply;
let netID;
const TreasuryAddress = "0x86a60D59C81461E1187eACAb011302Fa45e91C6c";
const SupplyAddress = "0xA9bD833225FA0c46ed76dF5A7AC89065213eA057";
let LoggedIn = false;

loginWithEth();

LoginText = document.getElementById('LoggedIn');
Signer = document.getElementById('Signer');
NewIDETC = document.getElementById('NewIDETC');
NewIDSH = document.getElementById('NewIDSH');

async function loginWithEth(){
    if(LoggedIn == false){
    if(window.ethereum){
        await ethereum.request({ method: 'eth_requestAccounts' });
        window.web3 = await new Web3(ethereum);
        await getID();
        if (netID != 61){
            console.log("The current Metamask/Web3 network is not Ethereum Classic, please connect to the Ethereum Classic."); 
            alert("The current Metamask/Web3 network is not Ropsten, please connect to the Ethereum Classic network.");
            return("Failed to connect")
        }
        accountarray = await web3.eth.getAccounts();
        Treasury = new window.web3.eth.Contract(TreasuryABI, TreasuryAddress, window.web3);
        Supply = new window.web3.eth.Contract(SupplyABI, SupplyAddress, window.web3);
        account = accountarray[0];
        CanSign = await IsSigner();
        console.log('Logged In')
        LoginText.innerHTML = "Connected with:" + '<br>' + account.substring(0, 7) + '...';
        if(CanSign == true){
            Signer.innerText = "This account is a signer"
        }else{
            Signer.innerText = "This account is not a signer"
        }
        LoggedIn = true;
    } else { 
        alert("No ETHER Wallet available")
    }
    }
}

async function getID(){
    let idhex = web3.eth._provider.chainId;
    netID = parseInt(idhex, 16);

    return(netID);
}

async function CreateETCProp(){
    let Amount = BigInt(web3.utils.toWei(document.getElementById('ETCAMM').value));
    let Receiver = document.getElementById('ETCrec').value;
    let Memo = document.getElementById('ETCmemo').value;
    console.log(Amount, Receiver, Memo);

    gas = await Treasury.methods.CreateProposal(Amount, Receiver, Memo).estimateGas({from: account, value: 0});
    ID = await Treasury.methods.CreateProposal(Amount, Receiver, Memo).send({from: account, value: 0, gas: gas});
    console.log(ID);
    NewIDETC.innerText = "Your New proposal ID is" + ID;
}

async function SignProposal(){
    let ID = document.getElementById('SignID').value;
    gas = await Treasury.methods.SignProposal(ID).estimateGas({from: account, value: 0});
    ID = await Treasury.methods.SignProposal(ID).send({from: account, value: 0, gas: gas});
}

async function SignProposalSupply(){
    let ID = document.getElementById('SignIDS').value;
    gas = await Treasury.methods.SignProposal(ID).estimateGas({from: account, value: 0});
    ID = await Treasury.methods.SignProposal(ID).send({from: account, value: 0, gas: gas});
}

async function CreateCLDProp(){
    let Amount = BigInt(web3.utils.toWei(document.getElementById('CLDAMM').value));
    let Receiver = document.getElementById('CLDrec').value;
    let Memo = document.getElementById('CLDmemo').value;
    console.log(Amount, Receiver, Memo);

    gas = await Supply.methods.CreateProposal(Amount, Receiver, Memo).estimateGas({from: account, value: 0});
    ID = await Supply.methods.CreateProposal(Amount, Receiver, Memo).send({from: account, value: 0, gas: gas});
    console.log(ID);
    NewIDETC.innerText = "Your New proposal ID is" + ID;
}

async function IsSigner(){
    let One = await Treasury.methods.SignerOne().call();
    let Two = await Treasury.methods.SignerTwo().call();
    let Three = await Treasury.methods.SignerThree().call();

    if(account === One || account === Two || account === Three || account === Four){
        return(true);
    }
}

