import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useRef } from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import './index.css';
import { cn } from './lib/cn';
//import Color from 'color-thief-react'
import { useColor } from 'color-thief-react'
import Text from './components/text';
import { Card, CardHeader, CardTitle, CardFooter, CardDescription, CardContent } from './components/card';
import { Button } from "./components/button"
import { Input } from './components/input';
import { Label } from './components/label';
import { Switch } from './components/switch';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/accordian';
import ToastProvider from './components/toastprovider';
import toast from 'react-hot-toast';
import { BaseChainLogo } from './components/basechain';
import fetchSpaces, { Space } from './lib/fetchSpaces';
import useSWR from 'swr';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <div className='flex flex-col items-center gap-8 m-8'>
          <nav>
            <ul className='flex flex-wrap gap-2'>
              <Button variant='link'><Link to="/">Home</Link></Button>
              <Button variant='link'><Link to="/text">Text</Link></Button>
              <Button variant='link'><Link to="/card">Card</Link></Button>
              <Button variant='link'><Link to="/button">Button</Link></Button>
              <Button variant='link'><Link to="/input">Input</Link></Button>
              <Button variant='link'><Link to="/switch">Switch</Link></Button>
              <Button variant='link'><Link to="/accordian">Accordian</Link></Button>
              <Button variant='link'><Link to="/card">CardDemo</Link></Button>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/text" element={<Text />} />
            <Route path="/card" element={<MapSpaces />} />
            <Route path="/button" element={<ButtonDemo />} />
            <Route path="/input" element={<InputDemo />} />
            <Route path="/switch" element={<SwitchDemo />} />
            <Route path="/accordian" element={<AccordianDemo />} />
            <Route path="/card" element={<AccordianDemo />} />
          </Routes>
        </div>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>
);

function Home() {

  return (
    <div className='flex w-full h-full justify-center gap-4'>
      <Card className='flex flex-col gap-4 p-2 w-1/4 border-none'>
        <CardContent className='flex flex-col gap-4'>
          <CardTitle >Buttons</CardTitle>
          <Button variant='default' size={'xl'}>default btn</Button>
          <Button variant='primary' size={'lg'}>primary btn</Button>
          <Button variant='secondary'>secondary btn</Button>
          <Button variant='ghost'>ghost btn</Button>
          <Button variant='outline'>outline btn</Button>
          <Button variant='destructive'>destructive btn</Button>
          <div className='w-full h-8 rounded-lg bg-warning text-black text-center font-medium'> warning</div>
          <div className='w-full h-8 rounded-lg bg-success text-black text-center font-medium'> success</div>
          <div className='w-full h-8 rounded-lg bg-info text-black text-center font-medium'> info</div>
          <CardTitle >Inputs</CardTitle>
          <Input placeholder='type here' />
          <Input variant='outline' placeholder='outline' />
          <Input disabled placeholder='disabled' />
          <Input variant='error' placeholder='errror!' />
          <Input variant='success' placeholder='success!' />
        </CardContent>
      </Card>

      <div className='flex flex-col gap-4 h-full w-1/4'>
        <Card className='flex flex-col gap-4 p-2 h-1/2 justify-evenly  items-center border-none'>
          <div className='bg-main rounded-xl p-2 w-3/4 h-1/4 text-center'>main</div>
          <div className='bg-base2 rounded-xl p-2 w-3/4 h-1/4 text-center'>base2</div>
          <div className='bg-base3 rounded-xl p-2 w-3/4 h-1/4 text-center'>accent</div>
        </Card>

        <Card className='flex flex-col gap-4 p-2 h-1/2 bg-main'>
          <h1>Layers</h1>
          <h2>main</h2>

          <div className='flex w-full gap-4'>
            <h3 className='text-text1'>text1</h3>
            <h3 className='text-text2'>text2</h3>
            <h3 className='text-text3'>text3</h3>
          </div>
          <Card className='bg-card p-4 border-none'>
            <h2>base1</h2>

            <div className='flex w-full gap-4'>
              <h3 className='text-text1'>text1</h3>
              <h3 className='text-text2'>text2</h3>
              <h3 className='text-text3'>text3</h3>
            </div>
            <Card className='bg-base2  p-4 w-full h-1/4'>
              <h2>base2</h2>

              <div className='flex w-full gap-4'>
                <h3 className='text-text1'>text1</h3>
                <h3 className='text-text2'>text2</h3>
                <h3 className='text-text3'>text3</h3>
              </div>
              <Card className='bg-base3 p-4 w-full h-full'>
                <h2>accent</h2>

                <div className='flex w-full gap-4'>
                  <h3 className='text-text1'>text1</h3>
                  <h3 className='text-text2'>text2</h3>
                  <h3 className='text-text3'>text3</h3>
                </div>
              </Card>
            </Card>
          </Card>
        </Card>
      </div>

      <Card className='flex flex-col gap-4 p-4 w-1/4 h-fit border-none'>
        <CardTitle>Login Test</CardTitle>
        <CardDescription>Enter your email below to create your account
        </CardDescription>
        <div className='flex gap-4 justify-center'>
          <Button variant='default'>
            sign in
          </Button>
          <Button variant='secondary'>
            documentaion
          </Button>
        </div>
        <div className='w-full h-1 bg-base2 rounded-lg' />
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label>sign in with email</Label>
          <Input variant='default' type="email" id="email" placeholder="email" />
          <Label>password</Label>
          <Input type="password" id="password" />
        </div>
        <div className='flex w-full gap-2 items-center'>
          <Button variant='primary' className='w-full'>
            submit
          </Button>
          <div className='flex flex-col gap-2'>
            <Label>wallet</Label>
            <Switch />
          </div>
        </div>
      </Card>
      <div className='flex gap-2 items center'>
        <Button onClick={() => toast.success('toast success')}>
          toast
        </Button>
        <Button onClick={() => toast.error('toast error')}>
          toast error
        </Button>
      </div>

    </div>

  )
}
interface SubmissionCardProps {
  imageSrc: string;
  user?: string;
}


const SubmissionCard: React.FC<SubmissionCardProps> = ({ imageSrc, user }): JSX.Element => {
  const { data, loading, error } = useColor(imageSrc, 'hex', { crossOrigin: '', quality: 256 });
  const [backgroundColor, setBackgroundColor] = useState('#262626'); // default color
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState('0px');
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (data) {
      setBackgroundColor(data);
    }
  }, [data]);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(expanded ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [expanded]);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      style={{
        backgroundImage: `linear-gradient(to bottom, ${backgroundColor} 0%, rgba(38, 38, 38, 0.45) 100%)`,
        border: 'none'
      }}
      className="flex flex-col gap-2 max-w-[350px] p-4 rounded-xl"
    >
      <div className="flex flex-col gap-2 justify-center h-full">
        <img
          src={imageSrc}
          className="w-full h-full object-cover rounded-xl shadow-xl"
          alt={user || 'submission-image'}
        />
        <div
          className="transition-all duration-300 ease-in-out overflow-hidden"
          style={{ height }}
          ref={contentRef}
        >
          <div className="flex flex-col gap-2 mb-4">
            <CardTitle>Submission Title</CardTitle>
            <div className='flex flex-row w-full justify-between'>
              <div className='flex gap-1 items-center p-1 bg-base1 rounded-xl'>
                <div className='w-6 h-6 bg-base3 rounded-lg'></div>
                <p>{user || 'unknown'}</p>
              </div>
              <div className='flex gap-2 items-center cursor-pointer'>
                <p className='hover:underline'>Base</p>
                <BaseChainLogo px={15} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button onClick={handleToggleExpand} variant="link" size="sm" className='w-fit p-0 ml-auto text-text3'>
        {expanded ? 'Close' : '+ Expand'}
      </Button>

      <CardFooter className="flex flex-row w-full justify-between gap-2 p-0">
        <Button variant='primary' size='sm' className='w-full'>Mint</Button>

      </CardFooter>

      {error && <div className="text-destructive">Error loading color</div>}
    </Card>
  );
}


const Loading = () => <div>Loading...</div>;
interface CardExampleProps {
  space: Space;
}

const MintboardDisplay = ({ space }) => {
  return (
    <>
      <p className='ml-auto font-normal'>{space.name}</p>
      <div className='flex flex-row flex-wrap gap-2 items-center -space-x-4 w-full'>
        <div className='w-7 h-7 rounded-full bg-base3'></div>
        <div className='w-7 h-7 rounded-full bg-base3'></div>
        <div className='w-7 h-7 rounded-full bg-base3'></div>
        <div className='w-7 h-7 rounded-full bg-base3'></div>
        <div className='w-7 h-7 rounded-full bg-base3'></div>
        <div className='w-7 h-7 rounded-full bg-base3'></div>
        <div className='w-7 h-7 rounded-full bg-base3'></div>
      </div>
    </>
  )
}

const ContestDisplay = () => {
  return (
    <div className='flex flex-col gap-2 items-center w-full'>
      <p className='font-normal'>Contest Title</p>
      <div className='flex flex-col lg:flex-row gap-2 items-center'>
        <Label className='bg-base3 text-text3 p-1 rounded-xl'>other</Label>
        <Label className='bg-success text-main p-1 rounded-xl'>submitting</Label>
      </div>
      <div className='flex w-full justify-between'>
        <p className='text-normal text-text3'>4 days</p>
        <div className='flex gap-2 items-center'>
          <p className=''>Base</p>
          <BaseChainLogo px={15} />
        </div>
      </div>
    </div>
  )
}

const CardExample: React.FC<CardExampleProps> = ({ space }): JSX.Element => {
  const { data, loading, error } = useColor(space.logoUrl, 'hex', { crossOrigin: '', quality: 256 });
  const [backgroundColor, setBackgroundColor] = useState('#rgb(38, 38, 38'); // default color

  useEffect(() => {
    if (data) {
      setBackgroundColor(data);
    }
  }, [data, loading]);

  return (
    <Card
      style={{
        backgroundImage: `linear-gradient(to bottom, ${backgroundColor} 0%, rgb(38, 38, 38, .45) 100%)`,
        border: 'none'
      }}
      className="w-full h-full p-4 rounded-xl border-none"
    >
      <div className="flex flex-col gap-4 items-center justify-between p-4 h-full rounded-xl bg-black/[.25]">
        <div className="w-[112px] h-[112px] flex items-center justify-center overflow-hidden rounded-xl">
          <img
            src={space.logoUrl}
            className="w-full h-full object-cover"
            alt="space-img"
          />
        </div>
        <CardTitle>{space.displayName}</CardTitle>

        <CardFooter className="flex flex-col gap-2 p-0">
          {/* <ContestDisplay /> */}
          <MintboardDisplay space={space} />
        </CardFooter>
      </div>
      {error && <div className="text-red-500">Error loading color</div>}
    </Card>
  );
}


function MapSpaces() {
  const { data, error, isLoading } = useSWR('/api/user', fetchSpaces);
  const [visibleCards, setVisibleCards] = useState(4);
  const [expanded, setExpanded] = useState(false);
  const cardsData = [
    { imageSrc: "https://uplink.mypinata.cloud/ipfs/QmdQHPteviBS4WGrmHfSdYdHot9qncLgQTXXG3N7wU63pA", user: "toshi.eth" },
    { imageSrc: "https://uplink.mypinata.cloud/ipfs/QmVVmTE2VzCUcsuoYmLe9zFpN9ZXAaaxiw6jiMxNPHLSPY", user: "nounish.eth" },
    { imageSrc: "https://uplink.mypinata.cloud/ipfs/QmdYQFshFQMDufuK8CWxWTqiQVNn6S8jqtwM1c3KzZFRKD", user: "cryptoet.eth" },
    { imageSrc: "https://uplink.mypinata.cloud/ipfs/QmdmuwrtTUzQ9MvA4cnUG5JRfrLnxp5RGMCNPpXGCbZEwW", user: "tybg.eth" },
    { imageSrc: "https://uplink.mypinata.cloud/ipfs/QmaksU8Dptp9FpFWjpvLr9tUnmjhCLqpR5p2XE19gtHFmw", user: "basebord.eth" },
    { imageSrc: "https://uplink.mypinata.cloud/ipfs/QmVvZxtcW6xxLT5nUHHHjsLF5uWn4vXMXhU2maoTmqqTfb", user: "mfers.eth" },
    { imageSrc: "https://uplink.mypinata.cloud/ipfs/QmTji4NnCNhMvw5WcR6qgy477fd1f8H6ob4W5RsGFbNSNb", user: "weezy.eth" },
    { imageSrc: "https://uplink.mypinata.cloud/ipfs/QmU6mrppPdHp6qiDnajG7dpPcBo9zkP6fRee9iY8dkexo1", user: "basemanager.eth" },
    { imageSrc: "https://uplink.mypinata.cloud/ipfs/QmRPMsH4WZQPpputGWQLnK4s2ftxPBDKujksBL7iX9XwvF", user: "blinker.eth" },
  ];

  const handleLoadMore = () => {
    setVisibleCards(cardsData.length);
    setExpanded(true);
  };

  const handleHide = () => {
    setVisibleCards(4);
    setExpanded(false);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading spaces.</div>;

  if (data) {
    return (
      <div className='flex flex-col gap-4 w-full lg:w-4/5'>
        <div className="flex w-full items-center space-x-2 justify-between">
          <Input variant='default' placeholder="search spaces or tokens ..." />
          <Button variant='primary'>New Space</Button>
        </div>
        <div className='w-full h-1 bg-base1 rounded-lg' />

        <div className='flex flex-col items-center gap-4'>
          <h3 className='mr-auto'>Trending Posts</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr h-full w-full justify-items-center'>
            {cardsData.slice(0, visibleCards).map((card, index) => (
              <SubmissionCard key={index} imageSrc={card.imageSrc} user={card.user} />
            ))}
          </div>
          {!expanded && visibleCards < cardsData.length && (
            <Button variant='outline' onClick={handleLoadMore}>
              + More
            </Button>
          )}
          {expanded && (
            <Button variant='outline' onClick={handleHide}>
              Hide
            </Button>
          )}
        </div>
        <div className='w-full h-1 bg-base1 rounded-lg' />
        <div className='flex flex-col lg:flex-row w-full items-start lg:items-center justify-between'>
          <h1>Featured</h1>
          <div className='flex flex-row gap-2 items-center'>
            <p className='text-text3'>Want to be featured?</p>
            <Button variant='default' size='icon' className='w-6 h-6' />
          </div>
        </div>
        <div className='grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 auto-rows-fr w-full'>
          {data.slice(0, 10).map(space => (
            <CardExample key={space.name} space={space} />
          ))}
        </div>
      </div>
    );
  }

  return <div>No spaces found.</div>;
}

function ButtonDemo() {
  return (
    <div className='grid gap-4 lg:grid-cols-4 auto-rows-fr '>
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='destructive'>Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant='primary' asChild>
        <Link to="/">Take me home</Link>
      </Button>
    </div>
  )
}

function InputDemo() {
  return (
    <div className='flex flex-col gap-4 items-center'>
      <Input />
      <Input variant='main' />
      <Input variant='base3'></Input>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label>label</Label>
        <Input placeholder="input" />
      </div>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input variant='outline' type="email" placeholder="input" />
        <Button variant='primary'>btn primary</Button>
      </div>

    </div>
  )
}
function SwitchDemo() {
  const [isChecked, setChecked] = useState(false)

  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" checked={isChecked} onCheckedChange={setChecked} />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}

function AccordianDemo() {
  return (
    <div className='w-1/4'>
      <Accordion type="multiple" >
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>what about this one?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </div>

  )
}

