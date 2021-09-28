// Forma de especificarle a hardhat como correr un smart contract
// hre -> hardhat runtime environment
const main = async() => {
    const [owner, randomPerson] = await hre.ethers.getSigners()
    // Funciones que en primer lugar recuperan el smart contract de la carpeta contracts
    // para después hacer un deploy a la blockchain local provista por hardhat
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal")
    // Cad vez que se ejecuta crea una red local de ethereum solo para el contracto 
    const waveContract = await waveContractFactory.deploy({
        value: hre.ethers.utils.parseEther('0.1')
    })
    await waveContract.deployed()
    
    console.log("Contract deployed to --", waveContract.address)
    console.log("Contract deployed by:", owner.address)

    let contractBalance = await hre.ethers.provider.getBalance(waveContract.address)
    console.log("Contract balance: ", hre.ethers.utils.formatEther(contractBalance))
    // Llamamos manualmente a las funciones del smart contract
    // Tal como haríamos con una API normal, buena analogía
    let waveCount
    waveCount = await waveContract.getTotalWaves()
    console.log(waveCount.toNumber())

    let waveTxn = await waveContract.wave("Wave #1")
    await waveTxn.wait()

    contractBalance = await hre.ethers.provider.getBalance(waveContract.address)
    console.log("Contract balance: ", hre.ethers.utils.formatEther(contractBalance))

    waveTxn = await waveContract.connect(randomPerson).wave("Wave #2")
    await waveTxn.wait()

    contractBalance = await hre.ethers.provider.getBalance(waveContract.address)
    console.log("Contract balance: ", hre.ethers.utils.formatEther(contractBalance))

    let allWaves
    allWaves = await waveContract.getAllWaves()
    console.log(allWaves)
}

const runMain = async () => {
    try {
        await main()
    } catch (error) {
        console.error(error)
    }
}

runMain()