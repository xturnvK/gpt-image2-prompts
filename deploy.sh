#!/bin/bash
cd /tmp/gpt-prompts-site
export GIT_ASKPASS=true
export GIT_TERMINAL_PROMPT=0

# 切换到 gh-pages 分支（或创建）
git checkout -B gh-pages

# 拷贝 build 文件到根目录（gh-pages 需要文件在根目录）
rm -rf docs && cp -r build docs
# 也拷一份到根目录以防万一
cp -r build/* .

git add -A
git commit -m "Deploy to GitHub Pages" --allow-empty || true
git push origin gh-pages --force

# 切回 main
git checkout main
