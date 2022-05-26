filePath=$1

if [[ ${filePath:0:1} = '.' ]]; then
  path=${filePath#*/}
else
  path=$filePath
fi
fileName=${path#*/}
echo ${fileName}

functionName=${fileName%.*}
echo ${functionName}

touch "./${path}"
touch "./test/${path%.*}.test.ts"



echo "export const ${functionName} = ()=>{
  
}">>"./${path}"

echo "import { ${functionName} } from '../../${path%.*}';


describe("\"${functionName}\"", () => {
  it("\"通过\"", () => {
  //  expect(${functionName}(/*input*/)).toEqual(/*output*/);
  });
});">>"./test/${path%.*}.test.ts"