import { init } from 'vwo-fme-node-sdk';

export async function VWOFME() {

  console.log('Executing FME');

  const vwoClient = await init({
    accountId: '761765',
    sdkKey: '746796a3a0f3553f477f05b3d0dd8dff',
  });

  const userContext = { id: 'userid1287' };
  const homePageFlag = await vwoClient.getFlag('homePageFlag', userContext);
  
  const clientSideTrackingInfo = {};

  return {
    homePageFlag,
    clientSideTrackingInfo
  }
}

export type VWOFMEReturn = Awaited<ReturnType<typeof VWOFME>>;

