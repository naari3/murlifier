# murlifier

transform Japanesen sentences to MUR sentences

## How to use

```javascript
import Murlifier from 'murlifier'

const murlifier = new Murlifier();

murlifier.murlify('肝心な所洗い忘れてるよ').then(sentence => {console.log(sentence)});
// -> 肝心な所洗い忘れてるゾ
```

## License

MIT
