import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers'
import { contractAddress, contractAbi } from '../../../../contracts/contracts.json';
const { ethers } = window;
const TransactionsContext = React.createContext();

