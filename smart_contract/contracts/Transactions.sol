// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract Transactions {
    uint256 transactionsCount = 0;

    event Tranfer(
        address indexed from,
        address indexed to,
        uint256 amount,
        string message,
        uint256 timestamp,
        string keyword
    );

    struct TransactionStruct {
        address from;
        address to;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }
    TransactionStruct[] transactions;

    function addToBlockchain(
        address payable reciever,
        uint256 amount,
        string memory message,
        string memory keyword
    ) public {
        transactionsCount += 1;
        transactions.push(
            TransactionStruct(
                msg.sender,
                reciever,
                amount,
                message,
                block.timestamp,
                keyword
            )
        );
        emit Tranfer(
            msg.sender,
            reciever,
            amount,
            message,
            block.timestamp,
            keyword
        );
    }

    function getAllTransactions()
        public
        view
        returns (TransactionStruct[] memory)
    {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionsCount;
    }
}
