#!/usr/bin/env bash
# Builds website.zip for Canvas from the docs/ folder.
set -e
cd "$(dirname "$0")"
rm -f website.zip
(cd docs && zip -r ../website.zip . -x "*.DS_Store")
echo "Created website.zip"
