import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

let cid = "QmQrFie2QhFc2QzTHPBignB1aQt7iRJozeb9Ch2AVFBTaL";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Let's go!"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${cid}/45.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=46`,
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
    </>
  );
}
