//SPDX-License-Identifier:UNLICENSE
pragma solidity ^0.8.19;

contract VLNDReceiverMinter{
    address constant Handler = 0x0E3239277501d215e17a4d31c487F86a425E110B;

    struct TX{
        address Sender;
        uint256 Payout;
    }
    
    //abi.decode(data, (BridgeRequest))
    function handle( uint32 _origin, bytes32 _sender, bytes calldata _body ) external onlyMailbox {
        TX memory tx = abi.decode(_body, (TX));
        payable(tx.Sender).transfer(tx.Payout);
    };

}

interface IMessageRecipient {
    function handle( uint32 _origin, bytes32 _sender, bytes calldata _body ) external;
}