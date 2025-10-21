import { greet } from './util'

async function main() {
  console.log(greet('world'))
}

if (require.main === module) main().catch(err => {
  console.error('Unhandled error in main:', err)
  process.exit(1)
})

export default main
