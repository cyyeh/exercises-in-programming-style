import fs from 'fs'
import readline from 'readline'

// the global list of [word, frequency] pairs
const wordFreqs = []

// load the list of stop words
const stopWords = (
  fs.readFileSync('./stop_words.txt', 'utf8')
    .split(',')
    .concat('abcdefghijklmnopqrstuvwxyz'.split(''))
)

const isAlNum = (char) => {
  return (
    ((char >= 'a') && (char <= 'z')) || 
    ((char >= 'A') && (char <= 'Z')) || 
    ((char >= '0') && (char <= '9'))
  )
}

// iterate through the file one line at a time
const main = async () => {
  const fileStream = fs.createReadStream('pride-and-prejudice.txt')

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  })
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in pride-and-prejudice.txt will be successfully available here as `line`
    let startChar = null
    let i = 0
    for (const char of line) {
      if (startChar === null) {
        if (isAlNum(char)) {
          startChar = i
        }
      } else {
        if (!isAlNum(char)) {
          // We found the end of the word, process it
          let found = false
          let word = line.slice(startChar, i).toLowerCase()
          // Ignore stop words
          if (!stopWords.includes(word)) {
            let pairIndex = 0
            // Let's see if it already exists
            for (const pair of wordFreqs) {
              if (word === pair[0]) {
                pair[1] += 1
                found = true
                break
              }

              pairIndex += 1
            }
            if (!found) {
              wordFreqs.push([word, 1])
            } else if (wordFreqs.length > 1) {
              // We may need to reorder
              for (let n = pairIndex - 1; n >= 0; n--) {
                if (wordFreqs[pairIndex][1] > wordFreqs[n][1]) {
                  // swap
                  [wordFreqs[n], wordFreqs[pairIndex]] = [wordFreqs[pairIndex], wordFreqs[n]]
                  pairIndex = n
                }
              }
            }
          }

          // Let's reset
          startChar = null
        }
      }

      i += 1
    }
  }

  for (const tf of wordFreqs.slice(0, 25)) {
    console.log(`${tf[0]}  -  ${tf[1]}`)
  }
}

main()
