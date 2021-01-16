name: publish to npm

on:
  push:
    # branches: master
    paths:
        - 'dist/**'

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v1
      with:
        node-version: '12'
        registry-url: 'https://registry.npmjs.org'
    - name: Release
      run: |
        git config --local user.email "action@github.com"
        git config --local user.name "GitHub Action"
        npx version-from-git --allow-same-version --template 'master.short'
    - name: Publish to npmjs
      run: | 
        npm publish --access public
      env:
        GITHUB_TOKEN: ${{ secrets.MG }}
        NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}