
/*
Code run ---> Excution context create hota hai

Execution context--:
                    1.Memory allocation
                    2.Execution phase                        GEC--Global execution context

                                                           memory allocation    |      Execution
                                                            a=undefined-------------------10
                                                            b=undefined------------------>20
                                                            addNumber:{function code}
                                                            semResult=undefined---------->30---<--|
                                                            semresult2=undefined---------->9< |   |
                                                                                              |   |
                                                                                              |   |
                                           memory allocation | Execution                      |   |
                                           num1=undefined---->   10                           |   |
                                           num2=undefined---->   20                           |   |
                                           sum=undefined ---->   30 return------------------------|
                                                                                              |
                                           memory allocation | Execution                      |
                                           num1=undefined---->   4                            |
                                           num2=undefined---->   5                            |
                                           sum=undefined ---->   9 return----------------------
                                                            



    var a=10;
    var b=20;
   function addNumber(num1,num2){
        sum=num1+num2;
        return sum;
   }
        var sumResult1=addNumber(a,b);
        var sumResult2=addNumber(4,5);
        console.log(sumResult1,sumResult2)
*/
//   console.log(a)
//     var a=10;
//     var b=20;
//    function addNumber(num1,num2){
//         sum=num1+num2;
//         return sum;
//    }
//         var sumResult1=addNumber(a,b);
//         var sumResult2=addNumber(4,5);
//         console.log(sumResult1,sumResult2)

// let const
// Memory allocation
// int a=<uninitialized>  (temporal dead zone)
// int b=<unintialized>   (temporal dead zone)
// Execution

// console.log(b)
// let a=10;
// const b=20;




 //a= <uninitialized> --10
 //b=<uninitialized>--20
//addNumber:<uninitialized>--fun()code
//res=<uninitialized>--- 30
 
 const a=10
 const b=20
 const res=addNumber(a,b);
  console.log(res)        //error because it is not initialized
const addNumber=function(num1,num2){
    const sum=num1+num2;
    return sum;
}
// const res=addNumber(a,b);
// console.log(res)
