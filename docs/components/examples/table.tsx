import {
  Card,
  CardContent,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@openlite/ui'

export function TableDemo() {
  return (
    <Card>
      <CardContent className="w-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
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
  )
}
