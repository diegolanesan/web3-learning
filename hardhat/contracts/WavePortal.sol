// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;

    // Tipo de dato que podemos definir nosotros, lo veo como una interfaz
    struct Wave {
        address waver;
        string message;
        uint256 timestamp;
    }
    
    // Un arreglo de tipo Wave
    Wave[] waves;

    // Variable que ayuda a generar un numero random
    uint256 private seed;

    mapping(address => uint256) public lastWavedAt;

    // Que son los eventos en solidity?
    event NewWave(address indexed from, uint256 timestamp, string message);

    constructor() payable {
        console.log("I'm a contract being deployed!");
    }

    function wave(string memory _message) public {
        // Chequea si pasaron al menos 15 minutos desde la ultima wave
        require(
            lastWavedAt[msg.sender] + 15 minutes < block.timestamp,
            "Wait 15 minutes"
        );

        // Guarda la fecha y hora en la que se hizo la ultima wave
        lastWavedAt[msg.sender] = block.timestamp;

        totalWaves += 1;
        console.log("%s has waved!", msg.sender); //msg.sender es la address que llamó la función

        // Guardando datos en el array
        waves.push(Wave(msg.sender, _message, block.timestamp));

        // Generando un numero random entre 0 y 100
        uint256 randomNumber = (block.difficulty + block.timestamp + seed) % 100;
        console.log("Random number: %s", randomNumber);

        // De esta manera dejamos una referencia para la proxima vez que se llame a la función
        seed = randomNumber;

        if(randomNumber < 5) {
            console.log("%s won!", msg.sender);

            uint256 prizeAmount = 0.0001 ether;
            require(
                prizeAmount <= address(this).balance,
                "Trying to withdraw more money than the contract has!"
            );
            (bool success, ) = (msg.sender).call{value: prizeAmount}("");
            require(success, "Failed to withdraw money from contract.");
        }

    
        emit NewWave(msg.sender, block.timestamp, _message);
    }

    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
    }

    function getTotalWaves() public view returns (uint256) {
        return totalWaves;
    }
}