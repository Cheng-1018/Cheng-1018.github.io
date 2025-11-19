@echo off
set http_proxy=http://127.0.0.1:7897
set https_proxy=http://127.0.0.1:7897
git add .
git commit -m " 简单的博客模板"
git push
pause