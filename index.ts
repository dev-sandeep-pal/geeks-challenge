var findRotateString = (target: string, value: string, rotateIndex: number): number => {
    if (target === value) {
        return rotateIndex;
    }

    value = value.substring(value.length - 1) + value.substring(0, value.length - 1);

    if (value.length === rotateIndex) {
        return -1;
    } else {
        return findRotateString(target, value, rotateIndex + 1);
    }

}
let target: string = "COFFEE";
let value: string = "ffeeco";

let rotateIndexResult: number = findRotateString(target.toLowerCase(), value.toLowerCase(), 0);

if (rotateIndexResult !== -1) {
    console.log("Rotation Index : " + rotateIndexResult);
} else {
    console.log("Both strings are different");
}