This tiny HTML produces the following tree:

```
<!DOCTYPE html>
<html>
  <head>
    <title></title>
  </head>
  <body>
    <p></p>
  </body>
</html>
```

```
{
  root: {
    data: 'html',
    type: 'element',
    children: [
      {
        data: 'head',
        type: 'element',
        children: [
          {
            data: 'title'
            type: 'element',
          }
        ]
      },
      {
        data: 'body',
        type: 'element',
        children: [
          {
            data: 'p',
            type: 'element',
            children: [
              {
                data: 'sometext',
                type: 'text'
                children: []
              }
            ]
          }
        ]
      }
    ]
  }
}
```
