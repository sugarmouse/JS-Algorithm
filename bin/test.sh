#!/bin/bash

# 执行对应的测试用例

./node_modules/.bin/jest "./test/${1}/${2%.*}.test.ts"