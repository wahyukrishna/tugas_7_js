var tinggiBadan = [155,160,158,175,174,182,165,166,162,170];

for(i=0;i<tinggiBadan.length;i++){
    console.log(tinggiBadan[i])
}

// hasil console.log
// 155
// 160
// 158
// 175
// 174
// 182
// 165
// 166
// 162
// 170

for(let x of tinggiBadan){
    console.log(x);
}

// hasil console.log
// 155
// 160
// 158
// 175
// 174
// 182
// 165
// 166
// 162
// 170

// secara hasil akan terlihat sama,kecuali apabila untuk perulangan for pada i<panjang array yang tidak sama dengan array tinggiBadan(misal i<5)