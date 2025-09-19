export interface IPresale {
  startTime: bigint;
  endTime: bigint;
  price: bigint;
  nextStagePrice: bigint;
  tokensSold: bigint;
  tokensToSell: bigint;
  usdtHardcap: bigint;
  amountRaised: bigint;
  active: boolean;
}

export interface IStakeInfo {
  harvestLock: boolean;
  claimStart: number;
  lockTime: number;
  rewardPerBlock: number;
  totalStaked: number;
}

export interface IPoolStakerInfo {
  amount: number;
  stakedTime: number;
  lastUpdatedBlock: number;
  Harvestedrewards: number;
  rewardDebt: number;
}
