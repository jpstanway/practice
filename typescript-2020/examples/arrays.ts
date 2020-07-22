const carMakers: string[] = ["ford", "toyota", "chevy"];

const dates: Date[] = [new Date(), new Date()];

const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];

carMakers.map((car: string): string => {
  return car;
});

// flexible types
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
