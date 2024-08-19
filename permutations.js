function run (value){
    console.log(`With input '${value}'`);
    console.log(`Your function should return: [${permutations(value)}]`);
}
function permutations(str) {
    if (str.length < 2) return str;
    let result = [];
    for (let i = 0; i < str.length; i++) {
        for (let str2 of permutations(`${str.slice(0, i)}${str.slice(i + 1, str.length)}`)) {
            result.push(str[i] + str2);
        }
    }
    return result.filter((e,i,a)=>a.indexOf(e) === i);
}

run('a');
// With input 'a':
// Your function should return: ['a']
run('ab');
// With input 'ab':
// Your function should return ['ab', 'ba']
run('abc');
// With input 'abc':
// Your function should return ['abc','acb','bac','bca','cab','cba']
run('aabb');
// With input 'aabb':
// Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']