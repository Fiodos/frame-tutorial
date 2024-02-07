import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

let cid = "QmNaSuySTij37PwXjMmSHHC5BcRSChajGymtY1ztXK4Prg";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${cid}/45.png`,
  // post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
  post_url: `https://frame-tutorial-roan.vercel.app/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Blockstories Startups to Watch',
  description: '24 most promising startups to watch in the DACH region',
  openGraph: {
    title: 'Blockstories Startups to Watch',
    description: '24 most promising startups to watch in the DACH region',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${cid}/45.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Blockstories Startups to Watch</h1>
    </>
  );
}
