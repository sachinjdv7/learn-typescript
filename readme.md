## what is typescript

- Typescript is the superset of js
- Typescript is essentially javascript with type checking.
- It is build on top on js
- Every js code is valid ts code
- catch a bug in build time using typescript compiler (tsc)
- By default ts uses (es5) to generate js code

## Benefits

- static typing
  1.  statically typed - c++ , java, c#
      - compile time
- code completion
- refactoring
- shorthand notaions

- javascript is like without discipline kid ()
- typscript is like discipline kid

## Benefits

- compilation
- Browser dont undestand ts code
- .ts -> compiler -> .js = Transpilation
- Discipline in coding

## Usage

1. TS = Medium to large projects
2. JS = Simple projects

## Setup

1. sudo npm install -g typescript
2. verify = tsc -v

## Configuration of ts compiler

- run tsc --init = create tsconfig.json file

1. target = We can configure how much support we give to browser (using for higher target)
2. rootDir = where is ts files ("./src")
3. outDir = where is js files ("./dist")
4. removeComments = remove comments from ts -> js without comments (true)
5. noEmitOnError = if you have any error in code ts not generate js code (true)

- run tsc now compiler run all ts file and genrate js files in /dist folder
- no need to specify specific file to compile

## Debugging in TS

- first enable sourceMap = how each line of typescript map with generated js code (true)(tscon)
- set breakpoint
- click the run and debug in vscode
- create a launch.json file
- in dropdown select node
- this will create launch.json file
- add "preLaunchTask": "tsc: build - tsconfig.json" into file
- also we watch specific variable
