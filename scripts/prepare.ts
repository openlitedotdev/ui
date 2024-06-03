import { execa } from 'execa'

async function prepare() {
  await Promise.all([
    execa('npx', ['simple-git-hooks']),
  ])
}

prepare()
