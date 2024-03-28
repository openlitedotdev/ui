import { useState } from 'react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Separator, Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@openui-org/react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import imgPrueba from '/bghome.png'
import { DialogCloseButton } from './test-dialog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button>
        Examples UI
      </Button>
      <DialogCloseButton />
      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continuar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Badge>
        Examples
      </Badge>

      <Card className="w-96">
        <CardHeader>
          <img src={imgPrueba} alt="" className="shadow-md rounded" />
        </CardHeader>
        <CardContent className="flex justify-between  w-full mt-2">
          <CardTitle>Apple Iphone</CardTitle>
          <span className="text-dark-400">$120.00</span>
        </CardContent>
        <CardDescription className="text-pretty text-dark-400  m">
          iPhone 12 combines elegant design with cutting-edge technology, giving you the best mobile experience. With its A14 Bionic chip, the fastest in a smartphone, intense games and professional applications run effortlessly.

        </CardDescription>
        <Button className="w-full">Add To Cart</Button>
      </Card>
      <div className="w-60">
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
          <p className="text-sm text-muted-foreground">
            An open-source UI component library.
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="container">
        <Label size="lg">
          Example UI
        </Label>
        <Input />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is
          {' '}
          {count}
        </button>
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>

    </>
  )
}

export default App
