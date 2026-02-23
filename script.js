const arr = [1, 2, 3, 4, 1, 0, 2, 2];
let z=o;
let arr2=[];
	let arr3=[];

const divide = (arr, n) => {
	

const divide = (arr, n) => {
	or (let i = 0;i< arr.length; i++){
		z=z+arr[i];
		if(z<=n){
		   arr2.push(arr[i])
		   
		}else{
		    arr3.push(arr2)
		    
		    arr2=[]
		  
		    z=0
		    i--;
		}
		
	}
	if(arr2.length>0){
	    arr3.push(arr2)
	}
	console.log(arr3)



	
  // Write your code here
	
};

const n = prompt("Enter n: ");
	
alert(JSON.stringify(divide(arr, n)));

	
  // Write your code here
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
