import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import './index.css';
import Text from './components/text';
import { Card, CardHeader, CardTitle, CardFooter, CardDescription, CardContent } from './components/card';
import { Button } from "./components/button"
import { Input } from './components/input';
import { Label } from './components/label';
import { Switch } from './components/switch';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/accordian';
import ToastProvider from './components/toastprovider';
import  toast  from 'react-hot-toast';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <div className='flex flex-col items-center gap-8 m-8'>
          <nav>
            <ul className='flex gap-2'>
              <Button variant='link'><Link to="/">Home</Link></Button>
              <Button variant='link'><Link to="/text">Text</Link></Button>
              <Button variant='link'><Link to="/card">Card</Link></Button>
              <Button variant='link'><Link to="/button">Button</Link></Button>
              <Button variant='link'><Link to="/input">Input</Link></Button>
              <Button variant='link'><Link to="/switch">Switch</Link></Button>
              <Button variant='link'><Link to="/accordian">Accordian</Link></Button>


            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/text" element={<Text />} />
            <Route path="/card" element={<CardExample />} />
            <Route path="/button" element={<ButtonDemo />} />
            <Route path="/input" element={<InputDemo />} />
            <Route path="/switch" element={<SwitchDemo />} />
            <Route path="/accordian" element={<AccordianDemo />} />




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

function CardExample() {
  return (
    <div className='grid gap-4 lg:grid-cols-4 auto-rows-fr w-3/4'>
      <Card className='bg-main'>
        <CardHeader>Hello from my nice card</CardHeader>
        <CardTitle>title of my card</CardTitle>
        <CardDescription>description here</CardDescription>
        <CardContent>content.repeat(50)</CardContent>
        <CardFooter className='flex flex-col gap-4'>
          <p>hello from Footer</p>
          <Button variant='default'>btn default</Button>
        </CardFooter>
      </Card>
      <Card className='bg-main'>
        <CardHeader>Hello from my nice card</CardHeader>
        <CardTitle>title of my card</CardTitle>
        <CardDescription>description here</CardDescription>
        <CardContent>content.repeat(50)</CardContent>
        <CardFooter className='flex flex-col gap-4'>
          <p>hello from Footer</p>
          <Button variant='primary'>btn primary</Button>
        </CardFooter>
      </Card>
      <Card className='bg-main'>
        <CardHeader>Hello from #2 card</CardHeader>
        <CardTitle>title of my card</CardTitle>
        <CardDescription>description here</CardDescription>
        <CardContent>content.repeat(50)</CardContent>

        <CardFooter className='flex flex-col gap-4'>
          <p>hello from Footer</p>
          <Button variant='secondary'>btn secondary</Button>
        </CardFooter>
      </Card>
      <Card className='bg-main'>
        <CardHeader>Hello from #2 card</CardHeader>
        <CardTitle>title of my card</CardTitle>
        <CardDescription>description here</CardDescription>
        <CardContent>content.repeat(50)</CardContent>

        <CardFooter className='flex flex-col gap-4'>
          <p>hello from Footer</p>
          <Button variant='outline'>btn outline</Button>
        </CardFooter>
      </Card>
      <Card >
        <CardHeader>Hello from my nice card</CardHeader>
        <CardTitle>title of my card</CardTitle>
        <CardDescription>description here</CardDescription>
        <CardContent>content.repeat(50)</CardContent>
        <CardFooter className='flex flex-col gap-4'>
          <p>hello from Footer</p>
          <Button variant='default'>btn default</Button>
        </CardFooter>
      </Card>
      <Card >
        <CardHeader>Hello from my nice card</CardHeader>
        <CardTitle>title of my card</CardTitle>
        <CardDescription>description here</CardDescription>
        <CardContent>content.repeat(50)</CardContent>
        <CardFooter className='flex flex-col gap-4'>
          <p>hello from Footer</p>
          <Button variant='primary'>btn secondary</Button>
        </CardFooter>
      </Card>
      <Card >
        <CardHeader>Hello from #2 card</CardHeader>
        <CardTitle>title of my card</CardTitle>
        <CardDescription>description here</CardDescription>
        <CardContent>content.repeat(50)</CardContent>

        <CardFooter className='flex flex-col gap-4'>
          <p>hello from Footer</p>
          <Button variant='secondary'>btn secondary</Button>
        </CardFooter>
      </Card>
      <Card >
        <CardHeader>Hello from #2 card</CardHeader>
        <CardTitle>title of my card</CardTitle>
        <CardDescription>description here</CardDescription>
        <CardContent>content.repeat(50)</CardContent>

        <CardFooter className='flex flex-col gap-4'>
          <p>hello from Footer</p>
          <Button variant='outline'>btn outline</Button>
        </CardFooter>
      </Card>

    </div>

  )
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