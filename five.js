let typeOfPackage = "overnight";

switch (typeOfPackage) {
    case "standard":
        console.log("Your Order will be delivered within 3-5 days");
        break;
    case "express":
        console.log("Your Order will be delivered within 1-2 days");
        break;
    case "overnight":
        console.log("Your Order will be delivered by tomorrow");
        break;
    default:
        console.log("Invalid package type!!");
        break;
}

