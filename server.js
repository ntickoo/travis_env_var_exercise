
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    console.log("Favourite food is ", process.env.FAV_FOOD);

    await sleep(5000);
  }
}

main();
