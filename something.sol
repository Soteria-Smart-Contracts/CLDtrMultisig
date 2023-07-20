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
    function handle(uint32 _origin, bytes32 _sender, bytes calldata _body ) external onlyMailbox {
        TX memory tx = abi.decode(_body, (TX));
        payable(tx.Sender).transfer(tx.Payout);

        emit ReceivedAndMinted(tx.Sender, tx.Payout, _origin);
    };

    //Pure functions

    function addressToBytes32(address _addr) internal pure returns (bytes32) {
        return bytes32(uint256(uint160(_addr)));
    }   
    function bytes32ToAddress(bytes32 _buf) internal pure returns (address) {
        return address(uint160(uint256(_buf)));
    }

}

interface IMessageRecipient {
    function handle( uint32 _origin, bytes32 _sender, bytes calldata _body ) external;
}