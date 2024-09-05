'use client'

import { useState } from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Slider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@openlite/ui'

export default function Component() {
  const [activeTab, setActiveTab] = useState('account')

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-4">
      <header className="space-y-4">
        <Slider value={70} />
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Options" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex -space-x-2">
              <Avatar>
                <AvatarImage src="/example-sebastian.jpeg" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/example-sebastian.jpeg" />
                <AvatarFallback>BC</AvatarFallback>
              </Avatar>
              <Badge variant="secondary">+1</Badge>
            </div>
            <Button>Button</Button>
            <Badge>Badge</Badge>
          </div>

        </div>
      </header>

      <div className="grid grid-cols-3 gap-4">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Notification</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This is a notification!</p>
          </CardContent>
        </Card>

        <Card className="col-span-2">
          <CardContent className="p-0">
            <div className="p-4">
              <Input type="search" placeholder="Search..." className="w-full" />
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardContent className="p-0">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full justify-start rounded-none border-b">
                <TabsTrigger value="account" className="rounded-none">Account</TabsTrigger>
                <TabsTrigger value="password" className="rounded-none">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="p-4">
                <h2 className="text-2xl font-bold mb-4">Account</h2>
                <p className="text-gray-500 mb-4">Make changes to your account here. Click save when you're done.</p>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <Input id="name" defaultValue="Benjamin" />
                  </div>
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                    <Input id="username" defaultValue="benjamincanac" />
                  </div>
                  <Button>Save account</Button>
                </div>
              </TabsContent>
              <TabsContent value="password" className="p-4">
                <h2 className="text-2xl font-bold mb-4">Password</h2>
                <p className="text-gray-500 mb-4">Change your password here.</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]"></TableHead>
                  <TableHead>Id</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { id: 1, name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
                  { id: 2, name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Admin' },
                  { id: 3, name: 'Tom Cook', title: 'Director of Product', email: 'tom.cook@example.com', role: 'Member' },
                  { id: 4, name: 'Whitney Francis', title: 'Copywriter', email: 'whitney.francis@example.com', role: 'Admin' },
                  { id: 5, name: 'Leonard Krasner', title: 'Senior Designer', email: 'leonard.krasner@example.com', role: 'Owner' },
                ].map(person => (
                  <TableRow key={person.id}>
                    <TableCell><Checkbox checked={person.id === 2} /></TableCell>
                    <TableCell>{person.id}</TableCell>
                    <TableCell>{person.name}</TableCell>
                    <TableCell>{person.title}</TableCell>
                    <TableCell>{person.email}</TableCell>
                    <TableCell>{person.role}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
