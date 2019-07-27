# node-lambda-typescript-template

The bare minimum example for a [TypeScript](https://github.com/microsoft/TypeScript) application running on [Amazon Lambda](http://aws.amazon.com/lambda/).

It uses [node-lambda](https://github.com/motdotla/node-lambda) under the hood to locally run and also deploy your TypeScript application.


## Requirements

You have to install TypeScript 

```
npm install -g typescript ts-node
```

## Getting Started

Clone this repository.

```
cd /to/your/template/path
npm install
```

See the [node-lambda](https://github.com/motdotla/node-lambda) repository for the complete guide


There are 4 available commands to use on this template, see `package.json`[package.json] for details 

```
cd /to/your/template/path
npm run clean    # setup node-lambda files
npm run test     # test your lambda function event handler and check output
npm run local    # run lambda function locally and check output
npm run deploy   # deploy lambda to AWS
```
