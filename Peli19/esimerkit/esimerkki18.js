numerot = [1,2,3,4];

numerot.push(5);
numerot.push(8);

numerot.pop();
numerot.pop();
numerot.pop();

numerot[1] = 3;

for (let i = 0; i < numerot.length; i++) {
    console.log(numerot[i]);
    
}