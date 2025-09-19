import { useState, useCallback } from "react";
import { readContract, readContracts } from "@wagmi/core";
import { presaleContractABI } from "../config/abi/presaleContractABI";
import { erc20ContractABI } from "../config/abi/ERC20ABI";
import { PresaleConfig } from "../config/presaleConfig";
import { IPoolStakerInfo, IPresale, IStakeInfo } from "../interface";
import {
  createPublicClient,
  formatEther,
  formatUnits,
  http,
  parseEther,
  parseUnits,
} from "viem";
import { mainnet } from "viem/chains";
import { wagmiConfig } from "@/app/providers";
import { stakingContractABI } from "../config/abi/stakingContractABI";
import { calculateTokenPrice } from "@/utils";

export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http("https://eth-mainnet.g.alchemy.com/v2/EtVYMgRbi4G3iaEcCLWTC"),
});

export const fetchRaisedAmount = () => {
  const [raisedAmount, setRaisedAmount] = useState(0);

  const handleRaisedAmount = useCallback(async () => {
    try {
      const data = await publicClient.readContract({
        address: PresaleConfig.presaleAddress as `0x${string}`,
        abi: presaleContractABI,
        functionName: "totalUsdRaised",
      });
      setRaisedAmount(Number(data) / 10 ** PresaleConfig.usdtDecimal);
    } catch (error) {
      console.error("Error fetching contract data:", error);
    }
    return false;
  }, []);
  return { onRaisedAmount: handleRaisedAmount, raisedAmount };
};

export const fetchTokenSoldAmount = () => {
  const [tokenSoldAmount, setTokenSoldAmount] = useState(0);

  const handleTokenSoldAmount = useCallback(async () => {
    try {
      const data = await publicClient.readContract({
        address: PresaleConfig.presaleAddress as `0x${string}`,
        abi: presaleContractABI,
        functionName: "totalTokenSold",
      });
      setTokenSoldAmount(Number(data) / 10 ** PresaleConfig.tokenDecimal);
    } catch (error) {
      console.error("Error fetching contract data:", error);
    }
    return false;
  }, []);
  return { onTokenSoldAmount: handleTokenSoldAmount, tokenSoldAmount };
};

export const fetchPresale = () => {
  const [presale, setPresale] = useState<IPresale>();

  const handlePresale = useCallback(async (id: number) => {
    try {
      const data = await publicClient.readContract({
        address: PresaleConfig.presaleAddress as `0x${string}`,
        abi: presaleContractABI,
        functionName: "presale",
        args: [BigInt(id)],
      });
      setPresale({
        startTime: data[0],
        endTime: data[1],
        price: data[2],
        nextStagePrice: data[3],
        tokensSold: data[4],
        tokensToSell: data[5],
        usdtHardcap: data[6],
        amountRaised: data[7],
        active: data[8],
      });
    } catch (error) {
      console.error("Error fetching contract data:", error);
    }
    return false;
  }, []);

  return { presale, onPresale: handlePresale };
};

export const fetchEthToToken = () => {
  const [ethToToken, setEthToToken] = useState(0);

  const handleEthToToken = useCallback(async (id: number, amount: number) => {
    try {
      const data = await readContracts(wagmiConfig, {
        contracts: [
          {
            address: PresaleConfig.presaleAddress as `0x${string}`,
            abi: presaleContractABI,
            functionName: "presale",
            args: [BigInt(id)],
          },
          {
            address: PresaleConfig.presaleAddress as `0x${string}`,
            abi: presaleContractABI,
            functionName: "getLatestPrice",
          },
        ],
      });

      if (data[0].result && data[1].result) {
        const tokenAmount = (amount * Number(formatEther(data[1].result))) / calculateTokenPrice(data[0].result[2])
        setEthToToken(tokenAmount)
        return Number(tokenAmount);
      }
      setEthToToken(0);
      return Number(0);
    } catch (error) {
      console.error("Error fetching contract data:", error);
    }
    return 0;
  }, []);

  return { ethToToken, onEthToToken: handleEthToToken };
};

export const fetchUsdToToken = () => {
  const [usdToToken, setUsdToToken] = useState(0);

  const handleUsdToToken = useCallback(async (id: number, amount: number) => {
    try {
      const data = await publicClient.readContract({
        address: PresaleConfig.presaleAddress as `0x${string}`,
        abi: presaleContractABI,
        functionName: "presale",
        args: [
          BigInt(id)
        ],
      });

      if (data) {
        const tokenAmount = amount / calculateTokenPrice(data[2])
        setUsdToToken(tokenAmount)
        return Number(tokenAmount);
      }
      setUsdToToken(0);
      return Number(0);
    } catch (error) {
      console.error("Error fetching contract data:", error);
    }
    return 0;
  }, []);

  return { usdToToken, onUsdToToken: handleUsdToToken };
};

export const fetchPresaleId = () => {
  const [presaleId, setPresaleId] = useState(0);
  const [currentPresale, setCurrentPresale] = useState(0);

  const handlePresaleId = useCallback(async () => {
    try {
      const data = await readContracts(wagmiConfig, {
        contracts: [
          {
            address: PresaleConfig.presaleAddress as `0x${string}`,
            abi: presaleContractABI,
            functionName: "presaleId",
          },
          {
            address: PresaleConfig.presaleAddress as `0x${string}`,
            abi: presaleContractABI,
            functionName: "currentSale",
          },
        ],
      });
      setPresaleId(Number(data[0].result));
      setCurrentPresale(Number(data[1].result));
    } catch (error) {
      console.error("Error fetching contract data:", error);
    }
    return false;
  }, []);

  return { presaleId, currentPresale, onPresaleId: handlePresaleId };
};

export const fetchUSDTBal = () => {
  const [usdtBal, setUSDBal] = useState(0);
  const handleUSDTBal = useCallback(async (address: any) => {
    if (address) {
      try {
        const data = await publicClient.readContract({
          address: PresaleConfig.usdtAddress as `0x${string}`,
          abi: erc20ContractABI,
          functionName: "balanceOf",
          args: [address as `0x${string}`],
        });

        setUSDBal(Number(data) / 10 ** PresaleConfig.usdtDecimal);
      } catch (error) {
        console.error("Error fetching contract data:", error);
      }
    }
    return false;
  }, []);

  return { usdtBal, onUSDTBal: handleUSDTBal };
};

export const fetchTokenBal = () => {
  const [tokenBal, setTokenBal] = useState(0);
  const handleTokenBal = useCallback(async (address: any) => {
    if (address) {
      try {
        const data = await publicClient.readContract({
          address: PresaleConfig.tokenAddress as `0x${string}`,
          abi: erc20ContractABI,
          functionName: "balanceOf",
          args: [address as `0x${string}`],
        });

        setTokenBal(Number(data) / 10 ** PresaleConfig.tokenDecimal);
      } catch (error) {
        console.error("Error fetching contract data:", error);
      }
    }
    return false;
  }, []);

  return { tokenBal, onTokenBal: handleTokenBal };
};

export const fetchAllowance = () => {
  const [allowance, setAllowance] = useState(0);

  const handleAllowance = useCallback(async (address: any) => {
    if (address) {
      try {
        const data = await publicClient.readContract({
          address: PresaleConfig.usdtAddress as `0x${string}`,
          abi: erc20ContractABI,
          functionName: "allowance",
          args: [
            address as `0x${string}`,
            PresaleConfig.presaleAddress as `0x${string}`,
          ],
        });

        setAllowance(Number(data) / 10 ** PresaleConfig.usdtDecimal);
      } catch (error) {
        console.error("Error fetching contract data:", error);
      }
    }
    return false;
  }, []);

  return { allowance, onAllowance: handleAllowance };
};

//////      Fetch Staking Contract Data     ////////

export const fetchStakeable = () => {
  const [stakeable, setStakeable] = useState<number | undefined>();

  const handleStakeable = useCallback(async (address: string) => {
    try {
      const data = await publicClient.readContract({
        address: PresaleConfig.presaleAddress as `0x${string}`,
        abi: presaleContractABI,
        functionName: "userData",
        args: [address as `0x${string}`],
      });
      setStakeable(Number(formatUnits(data[1], PresaleConfig.tokenDecimal)));
    } catch (error) {
      console.error("Error fetching contract data:", error);
    }
    return false;
  }, []);

  return { stakeable, onStakeable: handleStakeable };
};

export const fetchTotalReward = () => {
  const [reward, setReward] = useState<string | undefined>();

  const handleReward = useCallback(async (address: string) => {
    try {
      const data = await publicClient.readContract({
        address: PresaleConfig.stakingAddress as `0x${string}`,
        abi: stakingContractABI,
        functionName: "getRewards",
        args: [address as `0x${string}`],
      });
      setReward(formatUnits(data, PresaleConfig.tokenDecimal));
    } catch (error) {
      console.error("Error fetching contract data:", error);
    }
    return false;
  }, []);

  return { reward, onReward: handleReward };
};

export const fetchStakeInfo = () => {
  const [stakeInfo, setStakeInfo] = useState<IStakeInfo>();

  const handleStakeInfo = useCallback(async () => {
    try {
      const data = await readContracts(wagmiConfig, {
        contracts: [
          {
            address: PresaleConfig.stakingAddress as `0x${string}`,
            abi: stakingContractABI,
            functionName: "harvestLock",
          },
          {
            address: PresaleConfig.stakingAddress as `0x${string}`,
            abi: stakingContractABI,
            functionName: "claimStart",
          },
          {
            address: PresaleConfig.stakingAddress as `0x${string}`,
            abi: stakingContractABI,
            functionName: "lockedTime",
          },
          {
            address: PresaleConfig.stakingAddress as `0x${string}`,
            abi: stakingContractABI,
            functionName: "rewardTokensPerBlock",
          },
          {
            address: PresaleConfig.stakingAddress as `0x${string}`,
            abi: stakingContractABI,
            functionName: "tokensStaked",
          },
        ],
      });
      setStakeInfo({
        harvestLock: data[0].result ?? false,
        claimStart: Number(data[1].result),
        lockTime: Number(data[2].result),
        rewardPerBlock: Number(
          formatUnits(data[3].result || BigInt(0), PresaleConfig.tokenDecimal)
        ),
        totalStaked: Number(
          formatUnits(data[4].result || BigInt(0), PresaleConfig.tokenDecimal)
        ),
      });
    } catch (error) {
      console.error("Error fetching contract data:", error);
    }
    return false;
  }, []);

  return { stakeInfo, onStakeInfo: handleStakeInfo };
};

export const fetchPoolStakerInfo = () => {
  const [poolStakerInfo, setPoolStakerInfo] = useState<IPoolStakerInfo>();

  const handlePoolStakerInfo = useCallback(async (address: string) => {
    try {
      const data = await publicClient.readContract({
        address: PresaleConfig.stakingAddress as `0x${string}`,
        abi: stakingContractABI,
        functionName: "poolStakers",
        args: [address as `0x${string}`],
      });
      setPoolStakerInfo({
        amount: Number(formatUnits(data[0], PresaleConfig.tokenDecimal)),
        stakedTime: Number(data[1]),
        lastUpdatedBlock: Number(data[2]),
        Harvestedrewards: Number(
          formatUnits(data[3], PresaleConfig.tokenDecimal)
        ),
        rewardDebt: Number(formatUnits(data[4], PresaleConfig.tokenDecimal)),
      });
    } catch (error) {
      console.error("Error fetching contract data:", error);
    }
    return false;
  }, []);

  return { poolStakerInfo, onPoolStakerInfo: handlePoolStakerInfo };
};


export const fetchTokenHolder = () => {
  const [tokenHolder, setTokenHolder] = useState(0);
  const handleTokenHolder = useCallback(async () => {
    try {
      const data = await publicClient.readContract({
        address: PresaleConfig.presaleAddress as `0x${string}`,
        abi: presaleContractABI,
        functionName: "uniqueBuyers"
      });

      setTokenHolder(Number(data));
      return Number(data);
    } catch (error) {
      console.error("Error fetching contract data:", error);
    }
    return 0;
  }, []);

  return { tokenHolder, onTokenHolder: handleTokenHolder };
};
