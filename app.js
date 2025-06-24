for (let i = 10; i <= 25; i++) {
  console.log(i);
}

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 15);

const numbers = [23, 44, 123, 234, 765, 1023, 2368];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    console.log(numbers[i]);
  }
}

const currentDay = new Date().getDay();

switch (currentDay) {
  case 0:
    console.log("კვირა");
    break;
  case 1:
    console.log("ორშაბათი");
    break;
  case 2:
    console.log("სამშაბათი");
    break;
  case 3:
    console.log("ოთხშაბათი");
    break;
  case 4:
    console.log("ხუთშაბათი");
    break;
  case 5:
    console.log("პარასკევი");
    break;
  case 6:
    console.log("შაბათი");
    break;
  default:
    console.log("Invalid day");
}
////

const items = data.items;

for (let i = 0; i < items.length; i++) {
  if (items[i].storageQuantity > 10) {
    console.log("Product:", items[i].productName);
    console.log("   Storage Quantity:", items[i].storageQuantity);
    console.log("---------------------------");
  }
}
