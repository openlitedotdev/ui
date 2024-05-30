/* eslint-disable no-console */
import fs from 'node:fs'

const filePath = './index.ts'
const backupFilePath = `${filePath}.backup.ts`

fs.copyFile(filePath, backupFilePath, (err) => {
  if (err)
    return console.log(err)

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err)
      return console.log(err)

    const result = data.replace('\'use client\'\n', '')

    fs.writeFile(filePath, result, 'utf8', (err) => {
      if (err)
        return console.log(err)

      console.log('The "use client" directive was removed.')
    })
  })
})
