# FormattedList

Given these messages for intl

```
color1: 'red',
color2: 'blue',
color3: 'black',
pre_message: 'I love {list}'
```

And this code

```
const listIds = ['color1', 'color2', 'color3']
<FormattedList values={listIds} messageId={"pre_message"} />
```

The result is: 'I love red, blue, and black'
