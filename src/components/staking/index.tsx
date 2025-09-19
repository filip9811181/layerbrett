'use client';

import React, { useEffect, useState } from 'react';
import { Graph } from '../ui/graph';
import WebmImage from '../ui/WebmImage';
import millify from 'millify';
import { useAccount } from 'wagmi';
import { waitForTransactionReceipt, writeContract } from '@wagmi/core';
import { fetchPoolStakerInfo, fetchStakeable, fetchStakeInfo, fetchTotalReward } from '../../../hooks/useContractData';
import { PresaleConfig } from '../../../config/presaleConfig';
import { wagmiConfig } from '@/app/providers';
import { presaleContractABI } from '../../../config/abi/presaleContractABI';
import { toast } from 'react-toastify';
import { TOTAL_STAKE_REWARD } from '../../../config/stakingConfig';
import { stakingContractABI } from '../../../config/abi/stakingContractABI';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function SpinIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 50 50" {...props}>
      <circle cx="25" cy="10" r="2" fill="#fff"></circle>
      <circle cx="25" cy="40" r="2" fill="#fff" opacity=".3"></circle>
      <circle cx="32.5" cy="12" r="2" fill="#fff" opacity=".3"></circle>
      <circle cx="17.5" cy="38" r="2" fill="#fff" opacity=".3"></circle>
      <circle cx="17.5" cy="12" r="2" fill="#fff" opacity=".93"></circle>
      <circle cx="32.5" cy="38" r="2" fill="#fff" opacity=".3"></circle>
      <circle cx="10" cy="25" r="2" fill="#fff" opacity=".65"></circle>
      <circle cx="40" cy="25" r="2" fill="#fff" opacity=".3"></circle>
      <circle cx="12" cy="17.5" r="2" fill="#fff" opacity=".86"></circle>
      <circle cx="38" cy="32.5" r="2" fill="#fff" opacity=".3"></circle>
      <circle cx="12" cy="32.5" r="2" fill="#fff" opacity=".44"></circle>
      <circle cx="38" cy="17.5" r="2" fill="#fff" opacity=".3"></circle>
    </svg>
  );
}

export const StakingIndex = () => {
  const { t } = useTranslation();

  const { address, isConnected } = useAccount();

  const { reward, onReward } = fetchTotalReward();
  const { stakeInfo, onStakeInfo } = fetchStakeInfo();
  const { poolStakerInfo, onPoolStakerInfo } = fetchPoolStakerInfo();
  const { stakeable, onStakeable } = fetchStakeable();

  const [staking, setStaking] = useState(false);
  const [claiming, setClaiming] = useState(false);
  const [withdrawing, setWithdrawing] = useState(false);

  const handleWithdraw = async () => {
    if (!address || !isConnected) {
      toast.error(t('Connectwallet'));
    } else if (stakeInfo?.harvestLock) {
      toast.error(t('Claimnotlive'));
    } else {
      setWithdrawing(true);
      try {
        const hash = await writeContract(wagmiConfig, {
          address: PresaleConfig.stakingAddress as `0x${string}`,
          abi: stakingContractABI,
          functionName: 'withdraw',
        });
        const res = await waitForTransactionReceipt(wagmiConfig, {
          hash,
        });

        console.log('data ==> ', res, hash);

        if (res?.blockHash) {
          console.log(res?.blockHash);

          toast.success(t('trxcomplete'));

          onStakeInfo();
        }
      } catch (err: any) {
        console.log('err ==> ', err);
        if (!String(err).includes('User rejected the request.')) {
          toast.error(t('trxfailed'));
        }
      }
      setWithdrawing(false);
    }
  };

  const getContractData = async () => {
    onStakeInfo();

    if (address) {
      onReward(address);
      onStakeable(address);
      onPoolStakerInfo(address);
    }
  };

  const handleStake = async () => {
    if (stakeable && stakeable > 0) {
      setStaking(true);
      try {
        const hash = await writeContract(wagmiConfig, {
          address: PresaleConfig.presaleAddress as `0x${string}`,
          abi: presaleContractABI,
          functionName: 'claimAndStake',
        });
        const res = await waitForTransactionReceipt(wagmiConfig, {
          hash,
        });

        console.log('data ==> ', res, hash);

        if (res?.blockHash) {
          console.log(res?.blockHash);

          toast.success(t('trxcomplete'));

          getContractData();
        }
      } catch (err: any) {
        console.log('err ==> ', err);
        if (!String(err).includes('User rejected the request.')) {
          toast.error(t('trxfailed'));
        }
      }
      setStaking(false);
    } else {
      toast.warning(t('NeedBuyTokens'));
      return;
    }
  };

  const handleClaim = async () => {
    const current = Date.now() / 1000;
    if (stakeInfo?.harvestLock || current < (stakeInfo?.claimStart || 0)) {
      toast.error(t('claimnotlive'));
    } else {
      setClaiming(true);
      try {
        const hash = await writeContract(wagmiConfig, {
          address: PresaleConfig.stakingAddress as `0x${string}`,
          abi: stakingContractABI,
          functionName: 'harvestRewards',
        });
        const res = await waitForTransactionReceipt(wagmiConfig, {
          hash,
        });

        console.log('data ==> ', res, hash);

        if (res?.blockHash) {
          console.log(res?.blockHash);

          toast.success(t('trxcomplete'));

          getContractData();
        }
      } catch (err: any) {
        console.log('err ==> ', err);
        if (!String(err).includes('User rejected the request.')) {
          toast.error(t('trxfailed'));
        }
      }
      setClaiming(false);
    }
  };

  useEffect(() => {
    getContractData();
  }, [address]);

  return (
    <div className="relative px-4 min-h-[100vh] w-full z-[1] overflow-hidden">
      <Image
        width={1000}
        height={1000}
        priority
        src="/assets/background3 1.png"
        className="w-full h-full absolute z-[-1] top-0 left-0 right-0"
        alt=""
      />
      <img
        src="/assets/alien4 1.svg"
        className="max-w-[455px] w-full absolute bottom-0 right-[-150px] lg:block hidden z-[1]"
        alt=""
      />
      <img
        src="/assets/r2d2 1.svg"
        className="max-w-[108px] w-full absolute bottom-[20%] right-[35%] lg:block hidden z-[1]"
        alt=""
      />
      <img
        src="/assets/t fighter 1.svg"
        className=" max-w-[180px] 2xl:max-w-[224px] w-full absolute top-[48%] 2xl:top-[45%] right-[-20px] lg:block hidden z-[1]"
        alt=""
      />
      <WebmImage
        src="/gif/alien-dance3.webm"
        className="max-w-[161px] xl:block hidden bottom-0 left-0 absolute z-[1] -scale-x-100"
        alt=""
      />
      {/* <img
        src="/assets/alien9 1.svg"
        className="max-w-[206px] 2xl:block hidden bottom-0 left-0 absolute z-[1] top-[40%] rotate-[90deg] "
        alt=""
      /> */}
      <img
        src="/assets/maul 1.png"
        className="max-w-[500px] 2xl:max-w-[766px] w-full absolute bottom-0 right-[100px] lg:block hidden z-[2]"
        alt=""
      />
      <div className="max-w-[1625px] pb-10   w-full mx-auto pt-[140px] lg:pt-[200px]">
        <div className="flex lg:items-center flex-col lg:flex-row gap-6 lg:pl-7">
          <h2 className="stroked2 uppercase koulen font-normal max-lg:leading-[100%] text-[37.35px]">
            {t('staking_welcome')}
          </h2>
          <p className="text-white uppercase font-normal koulen  lg:text-[18px] leading-[100%]">
            {t('staking_title_sub1')} {stakeInfo?.rewardPerBlock || 0} $LBRETT {t('staking_title_sub2')} <br />
            {t('staking_title_sub3')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 pt-3">
          <div className=" rounded-[12.5px] bg-[#0487AB] border-[3.3px] border-[#003E58] pt-[14px] pb-[19px] px-3 shadow-mobIn lg:shadow-outerDesk ">
            <div className="  shadow-staking  rounded-[8.34px] h-full bg-[#005870] border-[3.3px] border-[#003E58] py-5 px-4">
              <div className="max-w-full 3xl:max-w-[222px] h-full w-full mr-auto max-3xl:pr-4">
                <div className="flex flex-col gap-3 lg:gap-1">
                  <span className="uppercase stroked2 text-[28px] font-normal leading-[100%] ">
                    {t('StakedBalance')}
                  </span>
                  <div className="w-full h-[38px] shadow-mobIn text-[24px] font-koulen leading-[100%]  flex pl-[14px] items-end bg-[#138DB1] rounded-[2.94px] border-[#003E58] border-[2.35px]">
                    {millify(poolStakerInfo?.amount || 0, { precision: 2 })} $LBRETT
                  </div>
                </div>
                <div className="flex flex-col gap-3 lg:gap-1 pt-3 lg:pt-2">
                  <span className="uppercase stroked2 text-[28px] font-normal leading-[100%] ">
                    {t('Yourstakeable')}
                  </span>
                  <div className="w-full h-[38px] shadow-mobIn text-[24px] font-koulen leading-[100%]  flex pl-[14px] items-end bg-[#138DB1] rounded-[2.94px] border-[#003E58] border-[2.35px]">
                    {millify(stakeable || 0, { precision: 2 })} $LBRETT
                  </div>
                </div>
                <button
                  className="bg-[#00D2ED] mt-3 text-[#003E57] rounded-[5px] w-full h-[47px] flex items-center justify-center koulen font-medium text-[20px] border-[4px] border-[#009BAF] transition-all duration-200 ease-in-out hover:bg-[#00c6e0] hover:shadow-[inset_-8px_8px_0px_0px_#003E58]"
                  style={{
                    boxShadow: '-8px 8px 0px 0px #003E58',
                  }}
                  onClick={handleStake}
                >
                  {staking ? `${t('staking')}...` : stakeable && stakeable > 0 ? t('ClaimAndStake') : t('BuyAndStake')}
                </button>
              </div>
            </div>
          </div>
          <div className=" rounded-[12.5px] bg-[#0487AB] border-[3.3px] border-[#003E58] lg:pt-[39px] py-5 lg:pb-[19px] px-5 shadow-mobIn lg:shadow-outerDesk ">
            <div className="max-w-full 3xl:max-w-[222px] w-full mr-auto max-3xl:pr-4">
              <div className="flex flex-col gap-3 lg:gap-1">
                <span className="uppercase stroked2 text-[28px] font-normal leading-[100%] ">% {t('ofpool')}</span>
                <div className="w-full h-[38px] shadow-mobIn text-[24px] font-koulen leading-[100%]  flex pl-[14px] items-end bg-[#005770] rounded-[2.94px] border-[#003E58] border-[2.35px]">
                  {millify(((poolStakerInfo?.amount || 0) * 100) / (stakeInfo?.totalStaked || 1), {
                    precision: 2,
                  })}
                  %
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:gap-1 pt-3 lg:pt-2">
                <span className="uppercase stroked2 text-[28px] font-normal leading-[100%] ">{t('TotalStaked')}</span>
                <div className="w-full h-[38px] shadow-mobIn text-[24px] font-koulen leading-[100%]  flex pl-[14px] items-end bg-[#005770] rounded-[2.94px] border-[#003E58] border-[2.35px]">
                  {millify(stakeInfo?.totalStaked || 0, { precision: 2 })} $LBRETT
                </div>
              </div>
              <button
                className="bg-[#00D2ED] mt-3 text-[#003E57] rounded-[5px] w-full h-[47px] flex items-center justify-center koulen font-medium lg:text-lg text-[20px] 2xl:text-[20px] border-[4px] border-[#009BAF] transition-all duration-200 ease-in-out hover:bg-[#00c6e0] hover:shadow-[inset_-8px_8px_0px_0px_#003E58]"
                style={{
                  boxShadow: '-8px 8px 0px 0px #003E58',
                }}
                onClick={handleWithdraw}
              >
                {withdrawing ? <SpinIcon className="animate-spin size-6" /> : t('WithdrawStakedTokens')}
              </button>
            </div>
          </div>

          <div className=" rounded-[12.5px] bg-[#0487AB] border-[3.3px] border-[#003E58] pt-[14px] pb-[19px] px-3 shadow-mobIn lg:shadow-outerDesk ">
            <div className=" h-full shadow-staking  rounded-[8.34px] bg-[#005870] border-[3.3px] border-[#003E58] py-5 px-4">
              <div className=" ">
                <div className="flex flex-col gap-3 lg:gap-1">
                  <span className="uppercase stroked2 text-[28px] font-normal leading-[100%] ">
                    {t('EstimatedRewards')}
                  </span>
                  <div className="w-full h-[38px] shadow-mobIn text-[24px] font-koulen leading-[100%]  flex pl-[14px] items-end bg-[#138DB1] rounded-[2.94px] border-[#003E58] border-[2.35px]">
                    {millify((TOTAL_STAKE_REWARD * 100) / (stakeInfo?.totalStaked || 1), {
                      precision: 2,
                    })}
                    % p/a
                  </div>
                </div>
                <div className="pt-[30px] flex flex-col gap-[18px]">
                  <div className="flex items-center gap-3">
                    <div className="w-[20px] h-[18px] rounded-[5px] bg-[#FFB3E8] border-[2px] border-[#EF53C0C0] shadow-pink "></div>
                    <span className="text-[#D6FF00] flex gap-1 text-sm leading-none items-baseline font-koulen uppercase">
                      {t('Rewardsrate')}{' '}
                      <span className=" text-white leading-none text-[21px] md:text-base 2xl:text-[21px]">
                        {t('dynamic')}
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-[20px] h-[18px] rounded-[5px] bg-[#FFB3E8] border-[2px] border-[#EF53C0C0] shadow-pink "></div>
                    <span className="text-[#D6FF00] flex gap-1 text-sm leading-none items-baseline font-koulen uppercase">
                      {t('Monthly')} = {''}{' '}
                      <span className=" text-white leading-none text-[21px] md:text-base 2xl:text-[21px]">
                        {t('Rewards')} % / 12
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-[20px] h-[18px] rounded-[5px] bg-[#FFB3E8] border-[2px] border-[#EF53C0C0] shadow-pink "></div>
                    <span className="text-[#D6FF00] flex gap-1 text-sm leading-none items-baseline font-koulen uppercase">
                      {t('Daily')} = {''}{' '}
                      <span className=" text-white leading-none text-[21px] md:text-base 2xl:text-[21px]">
                        {t('Rewards')} % / 365
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" rounded-[12.5px] relative bg-[#0487AB] border-[3.3px] border-[#003E58] lg:pt-[39px] py-5 lg:pb-[19px] px-5 shadow-mobIn lg:shadow-outerDesk ">
            <WebmImage
              src="/gif/alien-dance1.webm"
              className="max-w-[88px] w-full hidden lg:block absolute bottom-[-30%] -left-10 transform rotate-[-180deg]"
              alt=""
            />
            <div className="max-w-full 3xl:max-w-[222px] w-full mr-auto max-3xl:pr-4">
              <div className="flex flex-col gap-3 lg:gap-1">
                <span className="uppercase stroked2 text-[28px] font-normal leading-[100%] ">
                  {t('CurrentRewards')}
                </span>
                <div className="w-full h-[38px] shadow-mobIn text-[24px] font-koulen leading-[100%]  flex pl-[14px] items-end bg-[#005770] rounded-[2.94px] border-[#003E58] border-[2.35px]">
                  <span className="flex items-end gap-2">
                    {stakeInfo?.rewardPerBlock || 0}{' '}
                    <span className="text-base text-[#D6FF00]"> {t('PerETHBlock')}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" rounded-[12.5px] relative bg-[#0487AB] border-[3.3px] border-[#003E58] pt-[14px] pb-[19px] px-3 shadow-mobIn lg:shadow-outerDesk ">
            <img src="/assets/alien8.svg" className="-top-8 -right-5 absolute max-w-[64px]" alt="" />
            <div className=" h-full flex flex-col gap-4 justify-between shadow-staking  rounded-[8.34px] bg-[#005870] border-[3.3px] border-[#003E58] py-5 px-4">
              <div className="flex flex-col gap-3 lg:gap-1">
                <span className="uppercase stroked2 text-[28px] font-normal leading-[100%] ">{t('TotalRewards')}</span>
                <div className="w-full h-[38px] shadow-mobIn text-[24px] font-koulen leading-[100%]  flex pl-[14px] items-end bg-[#138DB1] rounded-[2.94px] border-[#003E58] border-[2.35px]">
                  {millify(Number(reward || 0), { precision: 2 })} $LBRETT
                </div>
              </div>

              <button
                className="bg-[#FFB3E8] text-[#003E57] rounded-[5px]   w-full h-[38px] flex items-center justify-center font-koulen font-normal text-[20px]  border-[4px] border-[#EF53C0C0]"
                style={{
                  boxShadow: '-8px 8px 0px 0px #003E58',
                }}
                onClick={handleClaim}
              >
                {claiming ? `${t('Claiming')}...` : t('ClaimRewards')}
              </button>
            </div>
          </div>
        </div>
        <div className="pt-[18px]">
          <Graph />
        </div>
      </div>
    </div>
  );
};
