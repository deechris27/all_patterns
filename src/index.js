

/**
 * Pattern 1 square
 
*****
*****
*****
*****
*****
   
 */

const square = () => {
    for(let i = 1; i<=5; i++){
        for(let j = 1; j<=5; j++){
            globalThis.process.stdout.write("*");
        }
        console.log('');
    }
};

/**
 * Triangle Pattern 1
 
*
**
***
****
*****
   
 */

const trianglePatternOne = () => {
    for(let i=1; i<=5; i++){
        for(let j = 1; j<=i; j++){
            globalThis.process.stdout.write("*");
        }
        console.log('');
    }
}

/**
 * Triangle Pattern 2
 
   *****
   ****
   ***
   **
   *
   
 */

const trianglePatternTwo = () => {
    for(let i=1; i<=5; i++){
        globalThis.process.stdout.write("");
        for(let j = 5; j>=i; j--){
            globalThis.process.stdout.write("*");
        }
        console.log('');
    }
}

/**
 * Triangle Pattern 3
 
    *
   **
  ***
 ****
*****
   
 */

const trianglePatternThree = () => {
    const size = 5;
    for(let i=1; i<=size; i++) {

       for(let j = size-1; j>=i; j--){
         globalThis.process.stdout.write(" ");
       }

        for(let k = 1; k<=i; k++) {
            globalThis.process.stdout.write("*");
        }
        console.log('');
    }
}

/**
 * Triangle Pattern 4
 
*****
 ****
  ***
   **
    *
   
 */

const trianglePatternFour = () => {
    const size = 5;
    for(let i = size; i>=1; i--) {

      for(let j=size-1; j>=i; j--){
          globalThis.process.stdout.write(" ");
      }
        for(let k = 1; k<=i; k++) {
            globalThis.process.stdout.write("*");
        }
        console.log('');
    }
 }


/**
 * Triangle Pattern 5
 
   * 
   * *
  * * *
 * * * *
* * * * *
   
 */

const trianglePatternFive = () => {
    const size = 5;
    for(let i = 1; i<=size; i++) {

      for(let j=size; j>=1; j--){
          if(i>=j){
            globalThis.process.stdout.write("* ");
          }else{
            globalThis.process.stdout.write(" ");
          }
      }
        console.log('');
    }
  }

  trianglePatternFive();



const mainExport = {
   squarePattern: square
};

export default mainExport;
module.exports = mainExport;