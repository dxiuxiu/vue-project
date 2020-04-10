# rules

```json
{
    "rules": {
      "no-irregular-whitespace": "off", // 禁止在字符串和注释之外不规则的空白
      "x-invalid-end-tag": false // 由于有些标签是自闭合的，所以有end标签会报错
    }
}
```

 x-invalid-end-tag  vue/no-parsing-error

```json
{
   "vue/no-parsing-error": [2, 
        { 
          "x-invalid-end-tag": false 
        }
      ]
}
```