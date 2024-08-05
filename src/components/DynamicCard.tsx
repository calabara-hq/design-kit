'use client'

import React, { useEffect, useState } from 'react';
//import Link from 'next/link';
//import { Button } from '../Button/Button';
import { CardTitle } from './card';
import { useColor } from 'color-thief-react';
//import UplinkImage from '@/lib/UplinkImage';
//import { HiTrendingUp } from 'react-icons/hi';




export default function DynamicCard({ space, index }) {

    const { data, loading } = useColor(space.logoUrl, 'hex', { crossOrigin: '', quality: 256 });
    const [backgroundColor, setBackgroundColor] = useState('#1c1f26'); // default color

    useEffect(() => {
        if (data) {
            setBackgroundColor(data);
        }
    }, [data, loading]);

    return (
        <Link
            key={index}
            draggable={false}
            href={`${space.name}`}
            style={{
                backgroundImage: `linear-gradient(to bottom, ${backgroundColor} 0%, #1c1f26 100%)`,
            }}
            className="relative flex flex-col items-center justify-center gap-4
                cursor-pointer rounded-2xl p-4 full overflow-hidden w-full transform 
                transition-transform duration-300 hoverCard will-change-transform no-select animate-fadeIn"
        >
            <div className="flex flex-col gap-4 items-center justify-between p-4 h-full w-full rounded-xl bg-black/[.25]">
                <div className="relative w-28 h-28">
                    <UplinkImage
                        src={space.logoUrl}
                        fill
                        alt="spaceLogo"
                        className="object-cover mask mask-circle"
                        sizes={"10vw"}
                    />
                </div>
                <div className="flex items-center justify-center gap-1 truncate">
                    <CardTitle className="overflow-hidden text-xl font-semibold">
                        {space.displayName.length > 15
                            ? space.displayName.slice(0, 15) + "..."
                            : space.displayName}
                    </CardTitle>
                </div>
                <p>base</p>

            </div>
            <span className="absolute top-[1.25rem] right-[1.25rem]"><HiTrendingUp className="w-6 h-6 text-success" /></span>
        </Link>
    );
}

