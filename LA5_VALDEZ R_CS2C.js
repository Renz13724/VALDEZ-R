// Simple hash function (replace with a more robust function for production)
function hash(name) {
    return name.length % 5; // Modulo 5 to fit within a table of size 5
}

// Initialize the hash table (array of arrays to handle collisions)
let hashTable = Array.from({ length: 5 }, () => []);

// Add customers to the hash table
let customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
for (let customer of customers) {
    let index = hash(customer);
    hashTable[index].push(customer);
}

// Function to display the hash table
function displayHashTable() {
    console.log("Current Hash Table:");
    for (let i = 0; i < hashTable.length; i++) {
        if (hashTable[i].length > 0) {
            console.log(`${i + 1}: ${hashTable[i].join(", ")}`);
        } else {
            console.log(`${i + 1}: Empty`);
        }
    }
}

// Main program loop
while (hashTable.some(bucket => bucket.length > 0)) { // Continue until all buckets are empty
    displayHashTable();
    let serviceNumber = parseInt(prompt("Enter the number of the customer to be serviced:"));

    // Input validation
    if (isNaN(serviceNumber) || serviceNumber < 1 || serviceNumber > 5) {
        alert("Invalid input. Please enter a number between 1 and 5.");
        continue;
    }

    let bucketIndex = serviceNumber -1;
    if (hashTable[bucketIndex].length === 0) {
        alert(`No customer assigned to number ${serviceNumber}`);
        continue;
    }

    let servicedCustomer = hashTable[bucketIndex].shift(); //Remove from the beginning of the bucket
    console.log(`Serviced customer: ${servicedCustomer}`);
    displayHashTable();
}

console.log("All customers have been serviced.");

