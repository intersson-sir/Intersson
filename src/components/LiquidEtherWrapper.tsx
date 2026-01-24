'use client';

import dynamic from 'next/dynamic';
import { LiquidEtherProps } from './LiquidEther';

const LiquidEther = dynamic(() => import('./LiquidEther'), {
    ssr: false
});

export default function LiquidEtherWrapper(props: LiquidEtherProps) {
    return <LiquidEther {...props} />;
}
