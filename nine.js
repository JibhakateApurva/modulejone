const arr = [
    121, 179, 17.65, 'apurva', 'bhavik', 'chhagan', 'bhargav',
];

for (let i =0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') { 
        console.log(arr[i]);
        break;
    }   
}