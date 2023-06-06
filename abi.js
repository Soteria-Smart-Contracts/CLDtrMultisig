window.Treasury =[
	{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_1","internalType":"address"},{"type":"address","name":"_2","internalType":"address"},{"type":"address","name":"_3","internalType":"address"}]},{"type":"event","name":"FundsRecieved","inputs":[{"type":"uint256","name":"Amount","internalType":"uint256","indexed":false},{"type":"address","name":"From","internalType":"address","indexed":false}],"anonymous":false},{"type":"event","name":"ProposalCreated","inputs":[{"type":"uint256","name":"Amount","internalType":"uint256","indexed":false},{"type":"address","name":"Reciever","internalType":"address payable","indexed":false},{"type":"string","name":"Memo","internalType":"string","indexed":false}],"anonymous":false},{"type":"event","name":"ProposalExecuted","inputs":[{"type":"uint256","name":"Amount","internalType":"uint256","indexed":false},{"type":"address","name":"Reciever","internalType":"address payable","indexed":false},{"type":"string","name":"Memo","internalType":"string","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256","name":"ID","internalType":"uint256"}],"name":"CreateProposal","inputs":[{"type":"uint256","name":"Amount","internalType":"uint256"},{"type":"address","name":"Reciever","internalType":"address payable"},{"type":"string","name":"Memo","internalType":"string"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"Amount","internalType":"uint256"},{"type":"address","name":"Reciever","internalType":"address payable"},{"type":"string","name":"Memo","internalType":"string"},{"type":"uint256","name":"Votes","internalType":"uint256"}],"name":"Proposals","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"Executed","internalType":"bool"}],"name":"SignProposal","inputs":[{"type":"uint256","name":"ID","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"SignerOne","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"SignerThree","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"SignerTwo","inputs":[]},{"type":"receive","stateMutability":"payable"}
]

window.Supply = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_1",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_2",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_3",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "From",
				"type": "address"
			}
		],
		"name": "FundsRecieved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address payable",
				"name": "Reciever",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "Memo",
				"type": "string"
			}
		],
		"name": "ProposalCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address payable",
				"name": "Reciever",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "Memo",
				"type": "string"
			}
		],
		"name": "ProposalExecuted",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "Amount",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "Reciever",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "Memo",
				"type": "string"
			}
		],
		"name": "CreateProposal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "ID",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Proposals",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "Amount",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "Reciever",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "Memo",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "Votes",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ID",
				"type": "uint256"
			}
		],
		"name": "SignProposal",
		"outputs": [
			{
				"internalType": "bool",
				"name": "Executed",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SignerOne",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SignerThree",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SignerTwo",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Token",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]
