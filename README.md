# Intelligence-analysis
electron+vue 

最后electron_build的时候找的是/dist文件夹里面的package.json，所以/dist文件夹里面还需要package.json和electron主进程js文件，package.json的入口文件就是./index.html了 

 



主进程和渲染进程通信是个巨坑 

```
fs.existssync is not a function
```

简直有毒 

太难配了，不配了，改用electron-vue