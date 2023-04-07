 const minDistances =(a)=>{
    let distances = []

// loop through the given array and for each value check whether the first occurence and the last occurence are the same.
 for(let i=0;i<a.length;i++){
    if(a.indexOf(a[i])!==a.lastIndexOf(a[i])){
        let minDistance = a.lastIndexOf(a[i])-a.indexOf(a[i]);
        distances.push(minDistance);
    }
 }
//if not i need to calculate the distance and stro in the distance array
// check the length of the array if empty return -1

if (distances.length ===0){
    return -1
}else{
    return Math.min(...distances)
}


 }

  return minDistances( [7, 1, 3, 4, 1, 7]);