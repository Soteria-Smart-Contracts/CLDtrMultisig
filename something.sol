//SPDX-License-Identifier:UNLICENSE
pragma solidity ^0.8.19;

contract VLNDReceiverMinter{
    address constant Handler = 0x0E3239277501d215e17a4d31c487F86a425E110B;

    event ReceivedAndMinted(address indexed User, uint256 amount, uint32 OriginChain);

    struct TX{
        address Sender;
        uint256 Payout;
    }
    
    //abi.decode(data, (BridgeRequest))
    function handle(uint32 _origin, bytes32 _sender, bytes calldata _body ) external {
        TX memory Info = abi.decode(_body, (TX));
        payable(Info.Sender).transfer(Info.Payout);

        emit ReceivedAndMinted(bytes32ToAddress(_sender), Info.Payout, _origin);
    }

    //Pure functions

    function addressToBytes32(address _addr) internal pure returns (bytes32) {
        return bytes32(uint256(uint160(_addr)));
    }   
    function bytes32ToAddress(bytes32 _buf) internal pure returns (address) {
        return address(uint160(uint256(_buf)));
    }

}

interface ERC20 {
  function balanceOf(address owner) external view returns (uint256);
  function allowance(address owner, address spender) external view returns (uint256);
  function approve(address spender, uint value) external returns (bool);
  function Mint(address _MintTo, uint256 _MintAmount) external;
  function transfer(address to, uint value) external returns (bool);
  function transferFrom(address from, address to, uint256 value) external returns (bool); 
  function totalSupply() external view returns (uint);
}

interface IMessageRecipient {
    function handle( uint32 _origin, bytes32 _sender, bytes calldata _body ) external;
}