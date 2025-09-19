'use client';
import React, { useEffect, useRef, useState } from 'react';
import Progress from './progress';
import CustomInput from './input';
import WebmImage from './WebmImage';
import { useAccount, useBalance, useBlockNumber } from 'wagmi';
import {
  fetchAllowance,
  fetchEthToToken,
  fetchPresale,
  fetchPresaleId,
  fetchRaisedAmount,
  fetchUsdToToken,
  fetchUSDTBal,
  fetchStakeInfo,
  fetchTokenSoldAmount,
  fetchTokenBal,
  fetchTokenHolder,
  fetchStakeable,
  fetchPoolStakerInfo,
} from '../../../hooks/useContractData';
import { wagmiConfig, web3Modal } from '@/app/providers';
import { erc20Abi, formatUnits, parseEther, parseUnits } from 'viem';
import { PresaleConfig } from '../../../config/presaleConfig';
import { TOTAL_STAKE_REWARD } from '../../../config/stakingConfig';
import { toast } from 'react-toastify';
import { presaleContractABI } from '../../../config/abi/presaleContractABI';
import { disconnect, waitForTransactionReceipt, writeContract } from '@wagmi/core';
import { calculateTokenPrice, getLeftDays, getLeftHours, getLeftMin, getLeftSecond, shortenAddress } from '../../utils';
import { useClickAway } from 'react-use';
import millify from 'millify';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import EthIcon from './EthIcon';
import UsdtIcon from './UsdtIcon';
import Link from 'next/link';

export const BuyToken = () => {
  const { t } = useTranslation();
  const options = ['eth', 'usdt'];
  const { address, isConnected } = useAccount();
  const { data } = useBalance({ address: address });
  const { dataUpdatedAt, refetch: refetchBlockNumber } = useBlockNumber();
  const { raisedAmount, onRaisedAmount } = fetchRaisedAmount();
  const { tokenSoldAmount, onTokenSoldAmount } = fetchTokenSoldAmount();
  const { currentPresale, onPresaleId } = fetchPresaleId();
  const { tokenHolder, onTokenHolder } = fetchTokenHolder();
  const { presale, onPresale } = fetchPresale();
  const { onEthToToken } = fetchEthToToken();
  const { onUsdToToken } = fetchUsdToToken();
  const { usdtBal, onUSDTBal } = fetchUSDTBal();
  const { allowance, onAllowance } = fetchAllowance();
  const { stakeInfo, onStakeInfo } = fetchStakeInfo();
  const [nextPrice, setNextPrice] = useState(0);
  const [ethBal, setBal] = useState(0);
  const [price, setPrice] = useState(0);
  const [selectToken, setSelectToken] = useState('eth');
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [isDepositloading, setDepositLoading] = useState(false);
  const [isApproveloading, setApproveLoading] = useState(false);
  const [isStakeDepositloading, setStakeDepositLoading] = useState(false);
  const [isStakeApproveloading, setStakeApproveLoading] = useState(false);
  const [delay, setDelay] = useState(0);
  const { stakeable, onStakeable } = fetchStakeable();
  const { poolStakerInfo, onPoolStakerInfo } = fetchPoolStakerInfo();

  const [timeCount, setTimeCount] = useState(0);
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  const handleChange = async (e: any) => {
    const RE = /^\d*\.?\d{0,18}$/;
    if (e.target.value === '.') setFromAmount('0');
    if (RE.test(e.currentTarget.value)) {
      setFromAmount(e.target.value as any);
    }
  };

  const getContractData = async () => {
    onRaisedAmount();
    onTokenSoldAmount();
    onPresaleId();
    onStakeInfo();
    onTokenHolder();

    if (address) {
      onStakeable(address);
      onUSDTBal(address);
      onAllowance(address);
      onPoolStakerInfo(address);
    }
  };

  const handleBuy = async (bStake: boolean = false) => {
    if (!address || !isConnected) {
      web3Modal.open();
      return;
    }

    if (!fromAmount || !Number(fromAmount)) {
      toast.error(t('invalidamount'));
      return;
    }

    if (selectToken === 'eth') {
      if (bStake) setStakeDepositLoading(true);
      else setDepositLoading(true);
      try {
        const hash = await writeContract(wagmiConfig, {
          address: PresaleConfig.presaleAddress as `0x${string}`,
          abi: presaleContractABI,
          functionName: 'buyWithEth',
          args: [bStake],
          value: parseEther(String(fromAmount)),
        });
        const res = await waitForTransactionReceipt(wagmiConfig, {
          hash,
        });

        console.log('data ==> ', res, hash);

        if (res?.blockHash) {
          console.log(res?.blockHash);

          toast.success(t('trxcomplete'));

          getContractData();
          onPresale(currentPresale);
          setFromAmount('');
        }
      } catch (err: any) {
        console.log('err ==> ', err);
        if (!String(err).includes('User rejected the request.')) {
          toast.error(t('trxfailed'));
        }
      }
      if (bStake) setStakeDepositLoading(false);
      else setDepositLoading(false);
    } else if (allowance < Number(fromAmount)) {
      if (bStake) setStakeApproveLoading(true);
      else setApproveLoading(true);
      try {
        const hash = await writeContract(wagmiConfig, {
          address: PresaleConfig.usdtAddress as `0x${string}`,
          abi: erc20Abi,
          functionName: 'approve',
          args: [PresaleConfig.presaleAddress as `0x${string}`, parseUnits(String(fromAmount), 6)],
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
      if (bStake) setStakeApproveLoading(false);
      else setApproveLoading(false);
    } else {
      if (bStake) setStakeDepositLoading(true);
      else setDepositLoading(true);
      try {
        const hash = await writeContract(wagmiConfig, {
          address: PresaleConfig.presaleAddress as `0x${string}`,
          abi: presaleContractABI,
          functionName: 'buyWithUSDT',
          args: [parseUnits(String(fromAmount), 6), bStake],
        });
        const res = await waitForTransactionReceipt(wagmiConfig, {
          hash,
        });

        console.log('data ==> ', res, hash);

        if (res?.blockHash) {
          console.log(res?.blockHash);

          toast.success(t('trxcomplete'));

          getContractData();
          onPresale(currentPresale);
          setFromAmount('');
        }
      } catch (err: any) {
        console.log('err ==> ', err);
        if (!String(err).includes('User rejected the request.')) {
          toast.error(t('trxfailed'));
        }
      }
      if (bStake) setStakeDepositLoading(false);
      else setDepositLoading(false);
    }
  };

  const fetchToAmount = () => {
    if (!fromAmount) {
      setToAmount('');
    } else {
      try {
        if (selectToken === 'eth') {
          onEthToToken(currentPresale, Number(fromAmount)).then((data) => {
            if (data) setToAmount(data.toFixed(2));
            else setToAmount('');
          });
        } else {
          onUsdToToken(currentPresale, Number(fromAmount)).then((data) => {
            if (data) setToAmount(data.toFixed(2));
            else setToAmount('');
          });
        }
      } catch (error) {}
    }
  };

  useEffect(() => {
    setBal(Number(data?.formatted || 0));
  }, [data]);

  useEffect(() => {
    if (!fromAmount) {
      setToAmount('');
    }

    if (delay > 0) {
      setTimeout(() => {
        setDelay((prev) => prev - 1);
      }, 300);

      if (delay === 1) {
        fetchToAmount();
      }
    }
  }, [delay]);

  useEffect(() => {
    setDelay(3);
  }, [fromAmount]);

  useEffect(() => {
    getContractData();
    if (address) {
      setBal(Number(data?.formatted));
    }
  }, [address]);

  useEffect(() => {
    if (currentPresale > 0) onPresale(currentPresale);
  }, [currentPresale]);

  useEffect(() => {
    if (presale) {
      setPrice(calculateTokenPrice(presale.price));
      setNextPrice(calculateTokenPrice(presale.nextStagePrice));
    }
  }, [presale]);

  useClickAway(ref, () => setOpen(false));

  const hasEnoughToken =
    selectToken == 'eth' ? (Number(fromAmount) < ethBal ? true : false) : Number(fromAmount) < usdtBal ? true : false;

  const rawPercent = Math.ceil(
    (Math.floor(presale ? Number(formatUnits(presale.tokensSold, PresaleConfig.tokenDecimal)) : 1) * 100) /
      Math.floor(presale ? Number(formatUnits(presale.tokensToSell, PresaleConfig.tokenDecimal)) : 1),
  );

  // Map from [0, 100] to [80, 100]
  const mappedPercent = (rawPercent / 100) * 20 + 80;

  // Optional ceiling and clamp between 80 and 100
  const finalPercent = Math.min(100, Math.ceil(mappedPercent));

  return (
    <div className="">
      <div className=" relative shadow-mobIn lg:shadow-outerDesk  rounded-[15px] lg:pt-[32px] lg:px-[32px] p-5 lg:pb-6 flex flex-col gap-3 max-xl:mx-auto max-w-[580px] largeScreen:max-w-[663px] w-full bg-[#0487AB] border-[#003E58] border-[4px] ">
        <WebmImage
          src="/gif/alien-dance1.webm"
          className="absolute top-[-125px] lg:top-[-199px] right-[-32px] lg:right-[-50px] max-w-[146px] lg:max-w-[244px] w-full h-auto"
          alt=""
        />
        <img
          src="/assets/alien811.svg"
          className="absolute lg:hidden top-[-40px] left-0 max-w-[80px] w-full h-auto"
          alt=""
        />
        <img
          src="/assets/alien81.svg"
          className="absolute hidden lg:block bottom-[110px] left-[-70px] largeScreen:left-[-90px] max-w-[100px] largeScreen:max-w-[130px] w-full h-auto"
          alt=""
        />
        <div className=" lg:px-[30px] lg:pt-[30px] p-3 lg:pb-4 flex flex-col gap-4 bg-[#005870] border-[#003E58] border-[4px] shadow-mob lg:shadow-custom-inset ">
          <div className="flex items-center gap-[37px]">
            <span className=" text-[20px] 3xl:text-[24px] font-koulen font-normal text-white">
              $LBRETT {t('Price')} =
            </span>
            <span className=" text-[20px] 3xl:text-[24px] font-koulen font-normal text-[#FFB3E8]"> ${price}</span>
          </div>
          <Progress progress={finalPercent} avatarSrc="/assets/Group 1597885435.svg" />
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="flex flex-row lg:flex-col lg:gap-[10px] justify-between items-center lg:items-start">
                <label
                  htmlFor=""
                  className="text-white text-[20px] xl:text-[24px] leading-none font-normal font-koulen"
                >
                  {t('Nextprice')}
                </label>
                <CustomInput
                  readOnly
                  placeholder="0"
                  className="max-xxs:max-w-[160px] max-w-[186px] lg:max-w-[316px]"
                  value={`$${nextPrice}`}
                />
              </div>
              <div className="flex flex-row lg:flex-col lg:gap-[10px] justify-between items-center lg:items-start">
                <label
                  htmlFor=""
                  className="text-white text-[20px] xl:text-[24px] leading-none font-normal font-koulen"
                >
                  USDT {t('RAISED')}
                </label>
                <CustomInput
                  readOnly
                  placeholder="0"
                  className="max-xxs:max-w-[160px] max-w-[186px] lg:max-w-[316px]"
                  value={`$${Math.floor(raisedAmount).toLocaleString()}`}
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center lg:gap-[11px]">
                <label
                  htmlFor=""
                  className="text-white  text-[15px] leading-none  lg:text-[20px] largeScreen:text-[24px] font-normal font-koulen"
                >
                  {t('Paywith')} {selectToken}
                </label>
                {/* <button
                className=" w-[34.718936920166016px] leading-none h-[25.303630828857422px]  lg:w-[59px] lg:h-[43px] bg-[#003E58] rounded-[5px] flex items-center justify-center uppercase font-koulen text-[14.12px] lg:text-[24px] leading-[80%]"
                onClick={() => {
                  if (selectToken === 'eth') setFromAmount(ethBal >= 0.0001 ? ethBal.toFixed(4) : '0');
                  else setFromAmount(usdtBal >= 0.01 ? usdtBal.toFixed(2) : '0');
                }}
              >
                {t('max')}
              </button> */}
              </div>
              <div className="flex gap-3 max-xxs:max-w-[160px] max-w-[186px] xl:max-w-[340px] w-full items-center">
                <div className="relative max-w-[197px] xl:max-w-[221px] w-full">
                  <input
                    type="text"
                    value={fromAmount}
                    onChange={handleChange}
                    placeholder="0"
                    className="shadow-mobIn lg:shadow-desk px-5 lg:pr-14 rounded-[5px] bg-[#138DB1] outline-none font-normal font-koulen h-[50px] lg:h-[57px] leading-[80%] text-[20px] lg:text-[24px] placeholder:text-white border-[4px] border-[#003E58] w-full"
                  />
                  <button
                    className="absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 leading-none uppercase font-koulen text-[14.12px] lg:text-[24px] text-white"
                    onClick={() => {
                      if (selectToken === 'eth') setFromAmount(ethBal >= 0.0001 ? ethBal.toFixed(4) : '0');
                      else setFromAmount(usdtBal >= 0.01 ? usdtBal.toFixed(2) : '0');
                    }}
                  >
                    {t('max')}
                  </button>
                </div>

                {/* <CustomInput
                placeholder="0"
                type="number"
                className="max-w-[197px]"
                value={fromAmount}
                onChange={handleChange}
              /> */}
                <div className="relative h-full max-w-[62.37px] lg:max-w-[106px] w-full z-10">
                  <button
                    onClick={() => setOpen(!open)}
                    className={`relative bg-[#00D2ED] h-[44px] lg:h-[57px] flex w-full items-center gap-1 justify-between px-1 lg:justify-center text-[9.81px] lg:text-base font-obriton  font-[900] uppercase text-[#003E57]  border-[#009BAF] ${
                      open
                        ? 'border-x-[4px] pt-3 border-t-[4px] rounded-x-[5px] rounded-t-[5px]'
                        : 'border-[4px] rounded-[5px]'
                    }  transition-all duration-300`}
                    style={{
                      boxShadow: '-8px 8px 0px 0px #003E58',
                    }}
                  >
                    <div className="hidden lg:block">
                      {selectToken == 'eth' && <EthIcon size={17} />}
                      {selectToken == 'usdt' && <UsdtIcon size={19} />}
                    </div>
                    {selectToken}
                    <img
                      src="/assets/Vector 586.svg"
                      className={`w-2 h-1 lg:w-[15px] lg:h-[7.5px] transition-transform duration-300 ${
                        open ? 'rotate-180' : ''
                      }`}
                      alt=""
                    />
                  </button>

                  {/* Dropdown Menu OVERLAYING below the button, same style */}
                  <div
                    className={`absolute mt-[-2px]  px-0.5 top-full left-0 w-full bg-[#00D2ED] border-[#009BAF] border-b-[4px] border-x-[4px] rounded-x-[5px] rounded-b-[5px] shadow-md transition-all duration-300 z-50 origin-top transform ${
                      open ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
                    }`}
                    style={{
                      transformOrigin: 'top',
                      boxShadow: '-8px 8px 0px 0px #003E58',
                    }}
                  >
                    {options.map((option) => (
                      <div
                        key={option}
                        onClick={() => {
                          setSelectToken(option);
                          setFromAmount('');
                          setOpen(false);
                        }}
                        className={`px-1 lg:px-2 flex ${
                          option == 'eth' ? 'gap-2.5' : 'gap-1.5'
                        }  h-[29px] text-[#003E57] transition-all hover:bg-[#003E57] hover:text-white items-center text-[9.81px] md:text-sm uppercase cursor-pointer text-center  font-obriton font-[900]`}
                      >
                        <div className="hidden lg:block">
                          {option == 'eth' && <EthIcon size={17} />}
                          {option == 'usdt' && <UsdtIcon size={15} />}
                        </div>
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <label
                htmlFor=""
                className="text-white hidden lg:block text-[20px] 2xl:text-[24px] font-normal font-koulen"
              >
                {t('YOURECEIVE')}
              </label>
              <label
                htmlFor=""
                className="text-white leading-[100%] lg:hidden text-[20px] 2xl:text-[24px] font-normal font-koulen"
              >
                {t('YOURECEIVE')}
              </label>
              <CustomInput
                readOnly
                placeholder="0"
                className="max-xxs:max-w-[160px] max-w-[186px] xl:max-w-[340px]"
                type="number"
                value={toAmount}
              />
            </div>
            {address && !hasEnoughToken && (
              <p className="text-center text-base xl:text-[24px] font-koulen font-normal text-[#FFFFFF7D]">
                {t('NOTHAVEENOUGH')} {selectToken} {t('TOPAYFORTRANSACTION')}
              </p>
            )}
            <button
              className="bg-[#FFB3E8] text-[#003E57] rounded-[5px] w-full h-[53px] lg:h-[57px] flex items-center justify-center font-koulen font-normal text-lg lg:text-[24px] border-[4px] border-[#EF53C0C0] transition-all duration-200 ease-in-out hover:bg-[#f7a8dc] hover:shadow-[inset_-8px_8px_0px_0px_#003E58]"
              style={{
                boxShadow: '-8px 8px 0px 0px #003E58',
              }}
              onClick={() => handleBuy(true)}
            >
              {selectToken === 'usdt' && allowance < Number(fromAmount)
                ? isStakeApproveloading
                  ? t('approving')
                  : t('approve')
                : isStakeDepositloading
                ? t('depositing')
                : `${t('BuyStakeFor')} ${millify((TOTAL_STAKE_REWARD * 100) / (stakeInfo?.totalStaked || 1), {
                    precision: 2,
                  })}% ${t('Rewards')}`}
            </button>

            <button
              className="bg-[#00D2ED] text-[#003E57] rounded-[5px] w-full h-[53px] lg:h-[57px] flex items-center justify-center font-koulen font-normal text-lg lg:text-[24px] border-[4px] border-[#009BAF] transition-all duration-200 ease-in-out hover:bg-[#00c6e0] hover:shadow-[inset_-8px_8px_0px_0px_#003E58]"
              style={{
                boxShadow: '-8px 8px 0px 0px #003E58',
              }}
              onClick={() => handleBuy(false)}
            >
              {selectToken === 'usdt' && allowance < Number(fromAmount)
                ? isApproveloading
                  ? t('approving')
                  : t('approve')
                : isDepositloading
                ? t('depositing')
                : `${t('buy')} $LBRETT`}
            </button>

            {/* <p className="text-center text-[14.12px] lg:text-[24px] font-normal font-koulen text-white">
            {t('Getanextra')} <span className="text-[#FFB3E8]"> 10% {t('Bonus')} </span> {t('onpurchaseover')}
          </p> */}
            <div className="flex  justify-between  items-center">
              <label htmlFor="" className="text-white text-[20px] 2xl:text-[24px] leading-none font-normal font-koulen">
                LBRETT {t('Balance')}
              </label>
              <div
                className="max-w-[197px] h-[50px] lg:h-[57px] flex gap-[18px] items-center   px-5 rounded-[5px] bg-[#138DB1] outline-none font-normal font-koulen 
        text-[20px] lg:text-[24px] placeholder:text-white lg:max-w-[316px] w-full shadow-mobIn lg:shadow-desk   border-[4px]  border-[#003E58]"
              >
                <img src="/assets/coinIcon.png" width={28} height={28} className="rounded-full" alt="" />
                <input
                  placeholder="0"
                  className="bg-transparent outline-none border-none leading-none placeholder:text-white text-white"
                  value={Math.floor(
                    (stakeable ? stakeable : 0) + (poolStakerInfo?.amount ? Number(poolStakerInfo.amount) : 0),
                  ).toLocaleString()}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <img src="/assets/Group 1597885436.svg" width={54} height={54} alt="" />
          <div className="flex gap-[11px]">
            <div
              className="w-[52px] h-[16px] rounded-[4px] bg-[#BFBFBF] border-[4px] border-[#003E58]"
              style={{
                boxShadow: '-4px 4px 0px 0px #003E58',
              }}
            ></div>
            <div
              className="w-[52px] h-[16px] rounded-[4px] bg-[#BFBFBF] border-[4px] border-[#003E58]"
              style={{
                boxShadow: '-4px 4px 0px 0px #003E58',
              }}
            ></div>
          </div>
          <div className="flex gap-[14px]">
            <div
              className="h-[47px] w-[47px] rounded-full bg-[#FF6164] border-[#D72326] border-[4px]"
              style={{
                boxShadow: '-4px 4px 0px 0px #003E58',
              }}
            ></div>
            <div
              className="h-[47px] w-[47px] rounded-full bg-[#FF6164] border-[#D72326] border-[4px]"
              style={{
                boxShadow: '-4px 4px 0px 0px #003E58',
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-col lg:flex-row gap-6 lg:gap-0 items-center pt-5">
        <h2 className="text-[28.23px] borderShadow max-lg:text-center font-nunito font-[900] leading-[120%]">
          Join LayerBrett's Rapidly <br /> Growing Community Today!
        </h2>
        <div className="flex gap-3 items-center">
          <Link
            href={'https://x.com/LayerBrett'}
            target="_blank"
            className="w-[51.877418518066406px]  h-[51.877418518066406px] rounded-[8.04px] bg-[#FFB3E8] border-[2.41px] border-[#EF53C0C0] shadow-social flex items-center justify-center "
            aria-label="Twitter link"
          >
            <img src="/assets/xCom.png" alt="" />
          </Link>
          <Link
            href={'https://t.me/layerbrett'}
            target="_blank"
            aria-label="Telegram link"
            className="w-[51.877418518066406px]  h-[51.877418518066406px] rounded-[8.04px] bg-[#FFB3E8] border-[2.41px] border-[#EF53C0C0] shadow-social flex items-center justify-center "
          >
            <img src="/assets/teleg.png" alt="" />
          </Link>

          <Link
            href={'https://www.tiktok.com/@layerbrettofficial'}
            target="_blank"
            className="w-[51.877418518066406px]  h-[51.877418518066406px] rounded-[8.04px] bg-[#FFB3E8] border-[2.41px] border-[#EF53C0C0] shadow-social flex items-center justify-center "
          >
            <img src="/assets/tik-tok.png" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};
