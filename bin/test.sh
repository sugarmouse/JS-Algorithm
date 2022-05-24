#!/bin/bash

# 执行对应的测试用例

arg=$1

if [ ${arg:0:1} = '.' ]; then
  path=${arg#*/}
else
  path=$arg
fi

./node_modules/.bin/jest "./test/${path%.*}.test.ts"
