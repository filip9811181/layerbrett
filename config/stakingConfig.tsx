export const StakingData: {
  data: number[];
  labels: string[];
  background: string[];
  border: string[];
} = {
  data: [],
  labels: [],
  background: [],
  border: [],
};

const getDateString = (date: Date) => {
  const month = date.getMonth();
  const year = date.getUTCFullYear();
  return `${MONTH[month]}-${year}`;
};

export const TOTAL_STAKE_REWARD = 2_500_000_000;

let startMonth = new Date("2025-8-1");
let current = new Date();
let MONTH = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

for (let i = 0; i < 24; ++i) {
  StakingData.labels.push(getDateString(startMonth));
  StakingData.data.push(
    7_500_000_000 + Math.floor((i + 1) * (TOTAL_STAKE_REWARD / 24))
  );
  if (
    current.getMonth() === startMonth.getMonth() &&
    current.getFullYear() === startMonth.getFullYear()
  ) {
    StakingData.background.push("#ff80c0");
    StakingData.border.push("#ffb7e0");
  } else {
    StakingData.background.push("#00a3d7");
    StakingData.border.push("#003E58");
  }
  startMonth.setMonth(startMonth.getMonth() + 1);
}
