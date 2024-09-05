'use client'

import { useState } from 'react'
import {
  Button,
  Card,
  CardContent,
  Input,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@openlite/ui'
import { AlertDemo } from './examples/alert'
import { MultipleComponentDemo } from './examples/multiple-components'
import { TableDemo } from './examples/table'

export default function Component() {
  const [activeTab, setActiveTab] = useState('account')

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-4">

      <AlertDemo />
      <div className="flex flex-col md:flex-row gap-5">
        <Card>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full justify-start rounded-none">
                <TabsTrigger value="account" className="rounded-none">Account</TabsTrigger>
                <TabsTrigger value="password" className="rounded-none">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="p-4">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <p className="text-gray-500 mb-4">Make changes to your account here. Click save when you're done.</p>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <Input id="name" defaultValue="Benjamin" />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <Input type="password" id="username" defaultValue="*******" />
                  </div>
                  <Button>Login</Button>
                </div>
              </TabsContent>
              <TabsContent value="password" className="p-4">
                <h2 className="text-2xl font-bold mb-4">Create Account</h2>
                <p className="text-gray-500 mb-4">Make changes to your account here. Click save when you're done.</p>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <Input id="name" defaultValue="Benjamin" />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <Input type="password" id="username" defaultValue="*******" />
                  </div>
                  <Button>Save account</Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        <MultipleComponentDemo />
      </div>
      <TableDemo />
    </div>
  )
}
