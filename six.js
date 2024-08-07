let name = "Mithun";
let email = "mithun.s@pw.live";
let age = 21;

if (typeof name !== "string") {
    console.log(`name should be a string`);
}   else if (typeof email !== "string") {
    console.log(`email should be a string`);
}   else if (typeof age !== "number") {
    console.log(`Age should be a number`);
}   else {
    console.log("Yahh!! All the fields are proper");
}

