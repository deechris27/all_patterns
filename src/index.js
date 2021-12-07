

const square = () => {
    for(let i = 1; i<=5; i++){
        for(let j = 1; j<=5; j++){
            globalThis.process.stdout.write("*");
        }
        console.log('');
    }
};


const mainExport = {
   squarePattern: square
};

export default mainExport;
module.exports = mainExport;