'use babel';

export default {
  provideDictionary () {
    return [{
      name: "CJK",
      checkWord: (textEditor, languages, range) => {
        return new Promise((resolve) => {
          const text = textEditor.getTextInBufferRange(range)
          const re = /[\p{blk=Hiragana}\p{blk=Katakana}\p{sc=Han}]+/u

          words = text.split(re).filter(x => x !== "")
          if (words.length === 0) {
            resolve({ isWord: true })
          } else {
            resolve({ isWord: false })
          }
        })
      }
    }]
  }
}
