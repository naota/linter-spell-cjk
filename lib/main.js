'use babel';

export default {
  provideDictionary() {
    return [{
      name: "CJK",
      checkWord: (textEditor, languages, range) => {
        return new Promise(resolve => {
          const text = textEditor.getTextInBufferRange(range);
          const re = /(?:[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3040-\u30FF\u3400-\u4DB5\u4E00-\u9FD5\uF900-\uFA6D\uFA70-\uFAD9]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D])+/;

          words = text.split(re).filter(x => x !== "");
          if (words.length === 0) {
            resolve({ isWord: true });
          } else {
            resolve({ isWord: false });
          }
        });
      }
    }];
  }
};
