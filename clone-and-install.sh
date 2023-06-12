#!/bin/bash
# Short script to work around sending multiple commands to a `docker run`

git clone https://gitlab.com/arichtman-srt/renovate-bundler-issue.git
cd renovate-bundler-issue
bundler
