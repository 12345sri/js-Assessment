/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let nfts = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(id, name, company, department, salary, ) {
    const nft = {
        id: id,
        name: name,
        metadata: {
            company:company,
            department:department,
            salary:salary,
        }
    };
    nfts.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    nfts.forEach(nft => {
        console.log("ID: " + nft.id);
        console.log("Name: " + nft.name);
        console.log("Creator: " + nft.metadata.company);
        console.log("Value: " + nft.metadata.department);
        console.log("Description: " + nft.metadata.salary);
        console.log('---------------------');
    });
}


// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;
}

// call your functions below this line
// Minting some NFTs
mintNFT(1, "Sriporna", "Microsoft", "Engineering", "80,000 INR");
mintNFT(2, "Nijhum", "Samsung", "Marketing", "82,000 INR");
mintNFT(3, "Gunjan", "PrimeCARE", "HR", "67,000 INR");
listNFTs();
getTotalSupply();

